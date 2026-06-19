import { pageMetadata } from "@/lib/i18n/metadata";

export const generateMetadata = pageMetadata({
  path: "/privacy",
  section: (d) => ({ title: d.legal.privacyTitle, description: d.legal.placeholderBody }),
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
