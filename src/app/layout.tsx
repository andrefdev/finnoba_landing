import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LandingProvider } from "@/lib/i18n/LandingProvider";
import { Nav } from "@/domains/nav/Nav";
import { Footer } from "@/domains/footer/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://finnoba.xyz"),
  title: {
    default: "Finnoba — USD productive credit for LATAM",
    template: "%s · Finnoba",
  },
  description:
    "Marketplace de crédito privado en USD para LATAM. Inversores ganan 20–30% en USD; los negocios obtienen crédito en minutos — sin colateral, sin banco.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "es_LA",
    url: "https://finnoba.xyz",
    siteName: "Finnoba",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={jakarta.variable}>
      <body>
        <LandingProvider>
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
