import type { Metadata } from "next";
import { DICTIONARIES } from "@/lib/i18n/dictionaries";

export const metadata: Metadata = {
  title: DICTIONARIES.es.legal.privacyTitle,
  description: DICTIONARIES.es.legal.placeholderBody,
  alternates: { canonical: "/privacidad" },
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
