/**
 * The demand-validation form: the shape of every answer, the soft
 * disqualification rules, and nothing else. No scoring, no pre-approval —
 * phase 1 only captures. Scoring waits for the legal GO.
 *
 * Option keys are stable and language-independent; the labels a visitor reads
 * live in the dictionary under `apply.options`, keyed by these same strings.
 */

export const OPTIONS = {
  cobraUsd: ["si", "no", "parcial"],
  sector: ["agro", "pesca", "textil", "software", "turismo", "otro"],
  mercados: ["eeuu", "europa", "asia", "latam", "otro"],
  facturacion: ["<3k", "3-10k", "10-30k", "30-100k", ">100k"],
  antiguedad: ["<12", "12-24", "24-48", ">48"],
  monto: ["500-1.5k", "1.5-3k", "3-7k", "7-15k", ">15k"],
  destino: ["insumos", "proveedores", "flete", "cosecha", "planilla", "otro"],
  urgencia: ["semana", "mes", "3meses", "explorando"],
  ocSinFactura: ["si", "no", "nose"],
  alternativa: ["banco", "caja", "factoring", "informal", "familiares", "ninguna"],
} as const;

export type OptionField = keyof typeof OPTIONS;

/** Narrows an untrusted submitted value to one of the allowed keys. */
export function pick<F extends OptionField>(field: F, value: unknown) {
  const allowed: readonly string[] = OPTIONS[field];
  return typeof value === "string" && allowed.includes(value)
    ? (value as (typeof OPTIONS)[F][number])
    : null;
}

export type Answers = {
  cobraUsd: string;
  antiguedad: string;
  monto: string;
  urgencia: string;
};

/**
 * Internal marks. Nobody is rejected on screen — every submission is stored,
 * because knowing who *doesn't* fit is part of what phase 1 is measuring.
 * Only URGENCIA_INMEDIATA changes what the visitor is told, and only to avoid
 * promising a turnaround we can't deliver.
 */
export function flagsFor(a: Answers): string[] {
  const flags: string[] = [];
  if (a.cobraUsd === "no") flags.push("FUERA_REGLA_ORO");
  if (a.antiguedad === "<12" || a.antiguedad === "12-24") flags.push("SIN_ANTIGUEDAD");
  if (a.monto === ">15k") flags.push("SOBRE_TECHO_PILOTO");
  if (a.urgencia === "semana") flags.push("URGENCIA_INMEDIATA");
  return flags;
}
