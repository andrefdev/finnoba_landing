import type { APIRoute } from "astro";
import { isValidRuc } from "../../lib/ruc";
import { flagsFor, OPTIONS, pick, type OptionField } from "../../lib/form";
import { hashIp, insertLead, notify, tooManyRecently, type Submission } from "../../lib/leads";
import { DEFAULT_LOCALE, LOCALES, type Lang } from "../../lib/i18n";

export const prerender = false;

/**
 * Every answer is revalidated here. The HTML attributes on the form are there
 * for the person filling it in; this is the trust boundary, and it assumes the
 * request never went near the form at all.
 */

const MAX = { razonSocial: 200, contacto: 120, cargo: 120, email: 254, whatsapp: 32, ruc: 11 };

const back = (lang: Lang, query: string) =>
  new Response(null, { status: 303, headers: { Location: `/${lang}/apply?${query}` } });

function text(form: FormData, key: string, max: number): string | null {
  const raw = form.get(key);
  if (typeof raw !== "string") return null;
  const value = raw.trim();
  return value.length > 0 && value.length <= max ? value : null;
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return back(DEFAULT_LOCALE, "e=invalid");
  }

  const langRaw = form.get("lang");
  const lang = (LOCALES as readonly string[]).includes(String(langRaw))
    ? (langRaw as Lang)
    : DEFAULT_LOCALE;

  // Honeypot. Answered like a success so the bot has nothing to learn from,
  // and never written down.
  if (String(form.get("sitio_web") ?? "").length > 0) return back(lang, "ok=1");

  if (form.get("consent") !== "1") return back(lang, "e=invalid");

  const razonSocial = text(form, "razonSocial", MAX.razonSocial);
  const contacto = text(form, "contacto", MAX.contacto);
  const email = text(form, "email", MAX.email);
  const whatsapp = text(form, "whatsapp", MAX.whatsapp);
  const ruc = text(form, "ruc", MAX.ruc);
  const cargo = text(form, "cargo", MAX.cargo);

  if (!razonSocial || razonSocial.length < 3 || !contacto || !email || !whatsapp || !ruc) {
    return back(lang, "e=invalid");
  }
  // Deliberately loose: the only address check that proves anything is
  // sending mail to it, and phase 1 would rather keep a typo'd lead than
  // bounce a real exporter over a regex.
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return back(lang, "e=invalid");
  if (!isValidRuc(ruc)) return back(lang, "e=ruc");

  // Every single-answer field, validated against its allowed keys. `mercados`
  // is the one field that takes several values, so it is handled apart.
  const answers = {} as Record<Exclude<OptionField, "mercados">, string>;
  for (const field of Object.keys(OPTIONS) as OptionField[]) {
    if (field === "mercados") continue;
    const value = pick(field, form.get(field));
    if (!value) return back(lang, "e=invalid");
    answers[field] = value;
  }

  const mercados = form
    .getAll("mercados")
    .map((v) => pick("mercados", v))
    .filter((v) => v !== null);
  if (mercados.length === 0) return back(lang, "e=invalid");

  const utm = Object.fromEntries(
    [...form.entries()]
      .filter(([k, v]) => k.startsWith("utm_") && typeof v === "string" && v.length <= 200)
      .map(([k, v]) => [k, String(v)]),
  );

  const submission: Submission = {
    lang,
    razonSocial,
    ruc,
    contacto,
    cargo,
    email,
    whatsapp,
    ...answers,
    mercados,
    flags: flagsFor(answers),
    utm,
    ipHash: hashIp(clientAddress ?? "unknown"),
  };

  try {
    if (await tooManyRecently(submission.ipHash)) return back(lang, "e=rate");
    await insertLead(submission);
  } catch (err) {
    console.error("apply: could not store submission", err);
    return back(lang, "e=server");
  }

  // The lead is already safe, so a failing alert must not turn into an error
  // page for someone who filled the form in correctly.
  if (submission.urgencia === "semana" || submission.urgencia === "mes") {
    await notify(submission).catch((err) => console.error("apply: alert failed", err));
  }

  return back(lang, submission.urgencia === "semana" ? "ok=urgent" : "ok=1");
};
