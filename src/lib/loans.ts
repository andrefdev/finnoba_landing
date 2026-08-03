// Illustrative marketplace data — used by the home Hero preview and the
// MarketsSection grid. These are NOT live offerings and no loan has been
// disbursed; the businesses are fictional. Every example is a Peruvian
// exporter that invoices in USD (the IRON RULE: we only lend USD to
// businesses that earn USD).
//
// Amounts and terms follow the closed level ladder (revenue model v6):
//   L1 $500 · 2mo   L2 $1,200 · 3mo   L3 $3,000 · 4mo
//   L4 $7,000 · 4mo   L5 $15,000 · 6mo
// The borrower's rate falls as they climb. Level 1 is published in full (see
// N1 below) because it is the only level the pilot originates; the rest are
// agreed in writing. No lender yield figure lives in this data — a return
// number on screen reads as a promise, and it isn't one.

export const CATEGORY = {
  coffee:   { color: "#946100", icon: "coffee", label: { es: "Café de exportación",     en: "Coffee export" } },
  berries:  { color: "#6D54E8", icon: "grape",  label: { es: "Arándano de exportación", en: "Blueberry export" } },
  seafood:  { color: "#2D7FF9", icon: "fish",   label: { es: "Pesca de exportación",    en: "Seafood export" } },
  software: { color: "#8B3DF0", icon: "laptop", label: { es: "Software / BPO",          en: "Software / BPO" } },
  cacao:    { color: "#E5484D", icon: "sprout", label: { es: "Cacao de exportación",    en: "Cacao export" } },
  avocado:  { color: "#1FB36B", icon: "leaf",   label: { es: "Palta de exportación",    en: "Avocado export" } },
  textile:  { color: "#D6409F", icon: "shirt",  label: { es: "Textil de exportación",   en: "Apparel export" } },
  agro:     { color: "#FB7B1E", icon: "wheat",  label: { es: "Agroexportación",         en: "Agro-export" } },
} as const;

export type CategoryKey = keyof typeof CATEGORY;
export type Level = 1 | 2 | 3 | 4 | 5;

/** The ladder a business climbs. Amount and term are fixed per level. */
export const LEVELS: ReadonlyArray<{ level: Level; amount: number; term: string }> = [
  { level: 1, amount: 500, term: "2" },
  { level: 2, amount: 1200, term: "3" },
  { level: 3, amount: 3000, term: "4" },
  { level: 4, amount: 7000, term: "4" },
  { level: 5, amount: 15000, term: "6" },
];

/**
 * Level 1 repayment schedule, published verbatim. Figures come from the
 * Cronograma_Pagos sheet of the closed model — do not recalculate them here.
 *
 * $500 over 2 months at 5%/month on the OUTSTANDING balance (never flat: the
 * same 5% charged flat would price at 115% TCEA, over the legal cap). Capital
 * repays in equal parts; interest is split 40% Finnoba commission / 60%
 * lender. `model.test.ts` asserts the arithmetic still ties out.
 */
export const N1 = {
  amount: 500,
  months: 2,
  tcea: "79.59%",
  /** BCRP cap for foreign currency, in force May-Oct 2026. */
  legalCap: "99.84%",
  rows: [
    { capital: 250, interest: 25, fee: 10, lender: 15, payment: 275 },
    { capital: 250, interest: 12.5, fee: 5, lender: 7.5, payment: 262.5 },
  ],
  totals: { capital: 500, interest: 37.5, fee: 15, lender: 22.5, payment: 537.5 },
} as const;

/** Money as the schedule prints it — two decimals, always. */
export const usd = (n: number) => `$${n.toFixed(2)}`;

export type Loan = {
  business: string;
  category: CategoryKey;
  city: string;
  level: Level;
  amount: number;
  term: number;
  trend: number[];
};

// ponytail: first 4 feed the hero mockup, first 6 the marketplace grid — order matters.
// The Level 1 slot is an artisan exporter on purpose: a Lima software/BPO firm
// billing in dollars does not borrow $500, and putting one there made the entry
// level look unserious.
export const LOANS: Loan[] = [
  { business: "Andes Coffee Export", category: "coffee",   city: "Cusco, PE",       level: 3, amount: 3000,  term: 4, trend: [8, 8.4, 8.2, 9, 9.4, 9.2, 9.8, 10.1] },
  { business: "Berry Andina Export", category: "berries",  city: "La Libertad, PE", level: 4, amount: 7000,  term: 4, trend: [9, 9.4, 9.2, 9.8, 10.2, 10, 10.6, 11] },
  { business: "Pesquera Costa Azul", category: "seafood",  city: "Paita, PE",       level: 2, amount: 1200,  term: 3, trend: [6, 6.5, 6.3, 7, 7.4, 7.2, 7.8, 8] },
  { business: "Artesanía Titicaca",  category: "textile",  city: "Puno, PE",        level: 1, amount: 500,   term: 2, trend: [4, 4.3, 4.6, 4.4, 4.9, 5.2, 5, 5.4] },
  { business: "Cacao Amazónico",     category: "cacao",    city: "San Martín, PE",  level: 2, amount: 1200,  term: 3, trend: [5.2, 5.5, 5.4, 5.9, 6.1, 6, 6.4, 6.7] },
  { business: "Palta Verde Export",  category: "avocado",  city: "Ica, PE",         level: 5, amount: 15000, term: 6, trend: [7.4, 7.8, 7.6, 8.2, 8.6, 8.4, 8.9, 9.3] },
  { business: "Delta BPO Perú",      category: "software", city: "Lima, PE",        level: 3, amount: 3000,  term: 4, trend: [3.4, 3.6, 3.5, 3.9, 4.1, 4, 4.3, 4.5] },
  { business: "Agro Valle Norte",    category: "agro",     city: "Piura, PE",       level: 3, amount: 3000,  term: 4, trend: [5.6, 5.9, 5.8, 6.2, 6.5, 6.4, 6.8, 7.1] },
];
