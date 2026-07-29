// Illustrative marketplace data — used by the home Hero preview and the
// MarketsSection grid. These are NOT live offerings and no loan has been
// disbursed; the businesses are fictional. Every example is a Peruvian
// exporter that invoices in USD (the IRON RULE: we only lend USD to
// businesses that earn USD).
//
// Amounts and terms follow the closed level ladder (docs/business_logic):
//   L1 $500 · 2-3mo   L2 $1,200 · 3mo   L3 $3,000 · 4mo
//   L4 $7,000 · 4mo   L5 $15,000 · 6mo
// The borrower's rate falls as they climb; those rates are deliberately not
// published. The investor's return is the same on every loan — it does not
// vary per borrower, so it lives here as one constant.

export const INVESTOR_YIELD = "14%";

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
  { level: 1, amount: 500, term: "2-3" },
  { level: 2, amount: 1200, term: "3" },
  { level: 3, amount: 3000, term: "4" },
  { level: 4, amount: 7000, term: "4" },
  { level: 5, amount: 15000, term: "6" },
];

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
export const LOANS: Loan[] = [
  { business: "Andes Coffee Export", category: "coffee",   city: "Cusco, PE",       level: 3, amount: 3000,  term: 4, trend: [8, 8.4, 8.2, 9, 9.4, 9.2, 9.8, 10.1] },
  { business: "Berry Andina Export", category: "berries",  city: "La Libertad, PE", level: 4, amount: 7000,  term: 4, trend: [9, 9.4, 9.2, 9.8, 10.2, 10, 10.6, 11] },
  { business: "Pesquera Costa Azul", category: "seafood",  city: "Paita, PE",       level: 2, amount: 1200,  term: 3, trend: [6, 6.5, 6.3, 7, 7.4, 7.2, 7.8, 8] },
  { business: "Delta BPO Perú",      category: "software", city: "Lima, PE",        level: 1, amount: 500,   term: 3, trend: [4, 4.3, 4.6, 4.4, 4.9, 5.2, 5, 5.4] },
  { business: "Cacao Amazónico",     category: "cacao",    city: "San Martín, PE",  level: 2, amount: 1200,  term: 3, trend: [5.2, 5.5, 5.4, 5.9, 6.1, 6, 6.4, 6.7] },
  { business: "Palta Verde Export",  category: "avocado",  city: "Ica, PE",         level: 5, amount: 15000, term: 6, trend: [7.4, 7.8, 7.6, 8.2, 8.6, 8.4, 8.9, 9.3] },
  { business: "Textil Sur Export",   category: "textile",  city: "Arequipa, PE",    level: 1, amount: 500,   term: 2, trend: [3.4, 3.6, 3.5, 3.9, 4.1, 4, 4.3, 4.5] },
  { business: "Agro Valle Norte",    category: "agro",     city: "Piura, PE",       level: 3, amount: 3000,  term: 4, trend: [5.6, 5.9, 5.8, 6.2, 6.5, 6.4, 6.8, 7.1] },
];
