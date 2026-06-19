import { pageMetadata } from "@/lib/i18n/metadata";

export const generateMetadata = pageMetadata({ path: "/transparency", section: (d) => d.transparency.meta });

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
