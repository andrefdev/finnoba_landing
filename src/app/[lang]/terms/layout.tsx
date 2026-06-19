import { pageMetadata } from "@/lib/i18n/metadata";

export const generateMetadata = pageMetadata({
  path: "/terms",
  section: (d) => ({ title: d.legal.termsTitle, description: d.legal.placeholderBody }),
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
