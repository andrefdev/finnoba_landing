import type { Metadata } from "next";
import { DICTIONARIES } from "@/lib/i18n/dictionaries";

const m = DICTIONARIES.es.investors.meta;

export const metadata: Metadata = {
  title: m.title,
  description: m.description,
  alternates: { canonical: "/investors" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
