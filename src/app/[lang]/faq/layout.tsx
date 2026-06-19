import { pageMetadata } from "@/lib/i18n/metadata";

export const generateMetadata = pageMetadata({ path: "/faq", section: (d) => d.faq.meta });

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
