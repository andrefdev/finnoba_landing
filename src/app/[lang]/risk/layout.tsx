import { pageMetadata } from "@/lib/i18n/metadata";

export const generateMetadata = pageMetadata({ path: "/risk", section: (d) => d.risk.meta });

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
