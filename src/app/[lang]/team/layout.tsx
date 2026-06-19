import { pageMetadata } from "@/lib/i18n/metadata";

export const generateMetadata = pageMetadata({ path: "/team", section: (d) => d.team.meta });

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
