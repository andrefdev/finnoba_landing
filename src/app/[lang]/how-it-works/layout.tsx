import { pageMetadata } from "@/lib/i18n/metadata";

export const generateMetadata = pageMetadata({ path: "/how-it-works", section: (d) => d.how.meta });

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
