import type { Metadata } from "next";
import { DICTIONARIES } from "@/lib/i18n/dictionaries";

const m = DICTIONARIES.es.how.meta;

export const metadata: Metadata = {
  title: m.title,
  description: m.description,
  alternates: { canonical: "/how-it-works" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
