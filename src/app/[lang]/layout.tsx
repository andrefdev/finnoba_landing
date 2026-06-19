import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { LandingProvider } from "@/lib/i18n/LandingProvider";
import { DICTIONARIES, type Lang } from "@/lib/i18n/dictionaries";
import { Nav } from "@/domains/nav/Nav";
import { Footer } from "@/domains/footer/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const LOCALES: readonly Lang[] = ["es", "en"];
const OG_LOCALE: Record<Lang, string> = { es: "es_LA", en: "en_US" };
const HTML_LANG: Record<Lang, string> = { es: "es", en: "en" };

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!LOCALES.includes(lang as Lang)) return {};
  const t = DICTIONARIES[lang as Lang];
  return {
    metadataBase: new URL("https://finnoba.xyz"),
    title: {
      default: t.home.meta.title,
      template: "%s · Finnoba",
    },
    description: t.home.meta.description,
    icons: { icon: "/favicon.ico" },
    alternates: {
      canonical: `/${lang}`,
      languages: {
        es: "/es",
        en: "/en",
        "x-default": "/es",
      },
    },
    openGraph: {
      type: "website",
      locale: OG_LOCALE[lang as Lang],
      url: `https://finnoba.xyz/${lang}`,
      siteName: "Finnoba",
      title: t.home.meta.title,
      description: t.home.meta.description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!LOCALES.includes(lang as Lang)) notFound();

  return (
    <html lang={HTML_LANG[lang as Lang]} className={jakarta.variable}>
      <body>
        <LandingProvider lang={lang as Lang}>
          <div
            style={{
              minHeight: "100vh",
              display: "flow-root",
              background:
                "linear-gradient(165deg,#F8D4FA 0%,#EFCFFA 13%,#DFD0F9 25%,#CFD2F7 37%,#D9DAF6 45%,#EBEAF7 52%,#F3F4F7 100%)",
            }}
          >
            <Nav />
            <main className="page-fade">{children}</main>
          </div>
          <Footer />
        </LandingProvider>
      </body>
    </html>
  );
}
