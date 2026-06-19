import { pageMetadata } from "@/lib/i18n/metadata";

export const generateMetadata = pageMetadata({ path: "/investors", section: (d) => d.investors.meta });

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
