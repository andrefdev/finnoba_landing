// Illustrative marketplace data — used by the home Hero preview and the
// MarketsSection grid. These are NOT live offerings and no loan has been
// disbursed; the businesses are fictional. Every example is a Peruvian
// exporter that invoices in USD (the IRON RULE: we only lend USD to
// businesses that earn USD).

export const CATEGORY = {
  coffee:   { color: "#946100", icon: "coffee", label: "Coffee export" },
  berries:  { color: "#6D54E8", icon: "grape",  label: "Blueberry export" },
  seafood:  { color: "#2D7FF9", icon: "fish",   label: "Seafood export" },
  software: { color: "#8B3DF0", icon: "laptop", label: "Software / BPO" },
  cacao:    { color: "#E5484D", icon: "sprout", label: "Cacao export" },
  avocado:  { color: "#1FB36B", icon: "leaf",   label: "Avocado export" },
  textile:  { color: "#D6409F", icon: "shirt",  label: "Apparel export" },
  agro:     { color: "#FB7B1E", icon: "wheat",  label: "Agro-export" },
} as const;

export type CategoryKey = keyof typeof CATEGORY;
export type GradeKey = "A" | "B" | "C";

export type Loan = {
  business: string;
  category: CategoryKey;
  city: string;
  amount: number;
  term: number;
  yld: string;
  grade: GradeKey;
  trend: number[];
};

// ponytail: first 4 feed the hero mockup, first 6 the marketplace grid — order matters.
export const LOANS: Loan[] = [
  { business: "Andes Coffee Export",  category: "coffee",   city: "Cusco, PE",        amount: 8000,  term: 6,  yld: "12.5%", grade: "A", trend: [8, 8.4, 8.2, 9, 9.4, 9.2, 9.8, 10.1] },
  { business: "Berry Andina Export",  category: "berries",  city: "La Libertad, PE",  amount: 10000, term: 9,  yld: "13%",   grade: "A", trend: [9, 9.4, 9.2, 9.8, 10.2, 10.0, 10.6, 11.0] },
  { business: "Pesquera Costa Azul",  category: "seafood",  city: "Paita, PE",        amount: 7500,  term: 6,  yld: "14%",   grade: "B", trend: [6, 6.5, 6.3, 7, 7.4, 7.2, 7.8, 8.0] },
  { business: "Delta BPO Perú",       category: "software", city: "Lima, PE",         amount: 5000,  term: 4,  yld: "12%",   grade: "A", trend: [4, 4.3, 4.6, 4.4, 4.9, 5.2, 5.0, 5.4] },
  { business: "Cacao Amazónico",      category: "cacao",    city: "San Martín, PE",   amount: 6000,  term: 6,  yld: "13.5%", grade: "B", trend: [5.2, 5.5, 5.4, 5.9, 6.1, 6.0, 6.4, 6.7] },
  { business: "Palta Verde Export",   category: "avocado",  city: "Ica, PE",          amount: 9000,  term: 8,  yld: "13%",   grade: "A", trend: [7.4, 7.8, 7.6, 8.2, 8.6, 8.4, 8.9, 9.3] },
  { business: "Textil Sur Export",    category: "textile",  city: "Arequipa, PE",     amount: 4500,  term: 5,  yld: "14%",   grade: "B", trend: [3.4, 3.6, 3.5, 3.9, 4.1, 4.0, 4.3, 4.5] },
  { business: "Agro Valle Norte",     category: "agro",     city: "Piura, PE",        amount: 6500,  term: 6,  yld: "12.5%", grade: "A", trend: [5.6, 5.9, 5.8, 6.2, 6.5, 6.4, 6.8, 7.1] },
];
