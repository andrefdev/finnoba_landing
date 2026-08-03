import { neon } from "@neondatabase/serverless";
import { createHash } from "node:crypto";

/**
 * Storage for the demand-validation form. One table of submissions, one daily
 * visit counter, and the six phase-1 metrics as plain aggregates.
 *
 * Env (Vercel project settings): DATABASE_URL, IP_SALT, ADMIN_TOKEN, and
 * optionally RESEND_API_KEY + ALERT_EMAIL for the urgency alert.
 */

function db() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set");
  return neon(url);
}

/** Salted so the table never holds an address we could reverse. */
export function hashIp(ip: string): string {
  const salt = process.env.IP_SALT;
  if (!salt) throw new Error("IP_SALT is not set");
  return createHash("sha256").update(salt + ip).digest("hex");
}

export type Submission = {
  lang: string;
  razonSocial: string;
  ruc: string;
  contacto: string;
  cargo: string | null;
  email: string;
  whatsapp: string;
  cobraUsd: string;
  sector: string;
  mercados: string[];
  facturacion: string;
  antiguedad: string;
  monto: string;
  destino: string;
  urgencia: string;
  ocSinFactura: string;
  alternativa: string;
  flags: string[];
  utm: Record<string, string>;
  ipHash: string;
};

export async function insertLead(s: Submission): Promise<void> {
  const sql = db();
  await sql`
    insert into leads (
      lang, razon_social, ruc, contacto, cargo, email, whatsapp,
      cobra_usd, sector, mercados, facturacion, antiguedad, monto, destino,
      urgencia, oc_sin_factura, alternativa, flags, utm, ip_hash
    ) values (
      ${s.lang}, ${s.razonSocial}, ${s.ruc}, ${s.contacto}, ${s.cargo},
      ${s.email}, ${s.whatsapp}, ${s.cobraUsd}, ${s.sector}, ${s.mercados},
      ${s.facturacion}, ${s.antiguedad}, ${s.monto}, ${s.destino},
      ${s.urgencia}, ${s.ocSinFactura}, ${s.alternativa}, ${s.flags},
      ${JSON.stringify(s.utm)}, ${s.ipHash}
    )
  `;
}

/**
 * Rate limit, in place of a captcha — a visible captcha costs more conversion
 * than the spam it stops on a form this obscure.
 * ponytail: counts rows instead of keeping a store; serverless has no shared
 * memory anyway, and one indexed count per submission is cheap. Swap for a
 * proper limiter if the form ever gets real traffic.
 */
export async function tooManyRecently(ipHash: string, max = 3): Promise<boolean> {
  const sql = db();
  const [{ n }] = await sql`
    select count(*)::int as n from leads
    where ip_hash = ${ipHash} and created_at > now() - interval '1 hour'
  `;
  return n >= max;
}

/** One row per day; the visit is what metric 6 divides by. No cookie needed. */
export async function countView(): Promise<void> {
  const sql = db();
  await sql`
    insert into form_views (day, n) values (current_date, 1)
    on conflict (day) do update set n = form_views.n + 1
  `;
}

export type Metrics = {
  submissions: number;
  views: number;
  pctUsd: number;
  pctOrderNoInvoice: number;
  pctSmallTicket: number;
  pctInformalAlternative: number;
  pctUrgentWithinMonth: number;
  conversion: number;
};

/**
 * The six figures phase 1 has to produce. Thresholds to advance:
 * USD >70%, order-without-invoice >40%, small ticket >=30%,
 * informal alternative >40%, urgency within the month >30%, conversion >25%.
 */
export async function metrics(): Promise<Metrics> {
  const sql = db();

  // "Cobra en dólares" counts partial too, matching FUERA_REGLA_ORO, which
  // only fires on a flat no.
  const [row] = await sql`
    select
      count(*)::int as submissions,
      coalesce(avg((cobra_usd in ('si','parcial'))::int), 0) as usd,
      coalesce(avg((oc_sin_factura = 'si')::int), 0) as order_no_invoice,
      coalesce(avg((monto in ('500-1.5k','1.5-3k'))::int), 0) as small_ticket,
      coalesce(avg((alternativa in ('informal','ninguna'))::int), 0) as informal,
      coalesce(avg((urgencia in ('semana','mes'))::int), 0) as urgent
    from leads
  `;
  const [{ views }] = await sql`select coalesce(sum(n), 0)::int as views from form_views`;

  const pct = (v: unknown) => Math.round(Number(v) * 1000) / 10;

  return {
    submissions: row.submissions,
    views,
    pctUsd: pct(row.usd),
    pctOrderNoInvoice: pct(row.order_no_invoice),
    pctSmallTicket: pct(row.small_ticket),
    pctInformalAlternative: pct(row.informal),
    pctUrgentWithinMonth: pct(row.urgent),
    conversion: views > 0 ? Math.round((row.submissions / views) * 1000) / 10 : 0,
  };
}

/** Everything, for the CSV export on the admin page. */
export async function allLeads() {
  const sql = db();
  return (await sql`select * from leads order by created_at desc`) as Record<string, unknown>[];
}

/**
 * Alerts Jose on anything urgent within the month. Fire-and-forget: a failed
 * notification must never cost us the submission itself.
 */
export async function notify(s: Submission): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.ALERT_EMAIL;
  if (!key || !to) return;

  const body = [
    `${s.razonSocial} (RUC ${s.ruc})`,
    `${s.contacto} · ${s.email} · ${s.whatsapp}`,
    `Sector ${s.sector} · factura ${s.facturacion} · opera ${s.antiguedad} meses`,
    `Pide ${s.monto} para ${s.destino}. Urgencia: ${s.urgencia}`,
    `Cobra en USD: ${s.cobraUsd} · OC sin factura: ${s.ocSinFactura} · hoy usa: ${s.alternativa}`,
    s.flags.length ? `Marcas: ${s.flags.join(", ")}` : "Sin marcas",
  ].join("\n");

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Finnoba <no-reply@finnoba.xyz>",
      to,
      subject: `Solicitud ${s.urgencia === "semana" ? "urgente" : "del mes"}: ${s.razonSocial}`,
      text: body,
    }),
  });
}
