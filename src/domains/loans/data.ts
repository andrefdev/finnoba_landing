// Sample marketplace data — used by the home Hero preview and the
// MarketsSection grid. The numbers are illustrative, not live state.

export const CATEGORY = {
  retail:    { color: "#6D54E8", icon: "store",         label: "Retail" },
  food:      { color: "#FB7B1E", icon: "utensils",      label: "Food & drink" },
  services:  { color: "#2D7FF9", icon: "wrench",        label: "Services" },
  ecommerce: { color: "#1FB36B", icon: "shopping-cart", label: "E-commerce" },
  logistics: { color: "#E5484D", icon: "truck",         label: "Logistics" },
  beauty:    { color: "#D6409F", icon: "scissors",      label: "Beauty" },
  freelance: { color: "#8B3DF0", icon: "laptop",        label: "Freelance" },
  coffee:    { color: "#946100", icon: "coffee",        label: "Café" },
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
  funded: number;
  trend: number[];
};

export const LOANS: Loan[] = [
  { business: "Tienda La Esquina", category: "retail",    city: "Lima, PE",         amount: 5000,  term: 6,  yld: "24%", grade: "A", funded: 72, trend: [8, 8.4, 8.2, 9, 9.4, 9.2, 9.8, 10.1] },
  { business: "Sazón Norteño",     category: "food",      city: "CDMX, MX",         amount: 8000,  term: 9,  yld: "27%", grade: "B", funded: 45, trend: [6, 6.5, 6.3, 7, 7.4, 7.2, 7.8, 8.0] },
  { business: "PixelCart",         category: "ecommerce", city: "Buenos Aires, AR", amount: 3500,  term: 6,  yld: "25%", grade: "A", funded: 88, trend: [4, 4.3, 4.6, 4.4, 4.9, 5.2, 5.0, 5.4] },
  { business: "Estudio Verde",     category: "freelance", city: "Bogotá, CO",       amount: 2500,  term: 4,  yld: "22%", grade: "A", funded: 64, trend: [2.2, 2.4, 2.3, 2.6, 2.7, 2.9, 2.8, 3.0] },
  { business: "RutaSur Logística", category: "logistics", city: "Santiago, CL",     amount: 10000, term: 12, yld: "26%", grade: "B", funded: 33, trend: [9, 9.4, 9.2, 9.8, 10.2, 10.0, 10.6, 11.0] },
  { business: "Glow Studio",       category: "beauty",    city: "Quito, EC",        amount: 1500,  term: 3,  yld: "21%", grade: "A", funded: 91, trend: [1.2, 1.3, 1.25, 1.4, 1.5, 1.48, 1.55, 1.6] },
  { business: "Café Altura",       category: "coffee",    city: "Medellín, CO",     amount: 4200,  term: 6,  yld: "23%", grade: "A", funded: 57, trend: [3.4, 3.6, 3.5, 3.9, 4.1, 4.0, 4.3, 4.5] },
  { business: "FixIt Tech",        category: "services",  city: "Arequipa, PE",     amount: 2000,  term: 5,  yld: "22%", grade: "B", funded: 48, trend: [1.8, 1.9, 1.85, 2.0, 2.1, 2.05, 2.2, 2.3] },
];
