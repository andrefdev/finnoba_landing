import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LandingProvider } from "@/lib/i18n/LandingProvider";
import { Nav } from "@/domains/nav/Nav";
import { Footer } from "@/domains/footer/Footer";
import { LIGHT } from "@/domains/common/tokens";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://finnoba.xyz"),
  title: {
    default: "Finnoba — Rendimiento real, respaldado por crédito productivo en LATAM",
    template: "%s · Finnoba",
  },
  description:
    "Marketplace de inversión en micropréstamos a emprendedores y profesionales independientes en LATAM. Diversificación automática, reportes mensuales, 10–12% anual neto objetivo.",
  keywords: [
    "Finnoba",
    "inversión productiva",
    "crédito productivo",
    "LATAM",
    "private credit",
    "rendimiento real",
    "micropréstamos",
  ],
  authors: [{ name: "Finnoba" }],
  creator: "Finnoba",
  publisher: "Finnoba",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "es_LA",
    url: "https://finnoba.xyz",
    siteName: "Finnoba",
    title: "Finnoba — Rendimiento real, respaldado por crédito productivo en LATAM",
    description:
      "Marketplace de inversión en micropréstamos a emprendedores y profesionales independientes en LATAM.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finnoba — Rendimiento real, respaldado por crédito productivo en LATAM",
    description:
      "Marketplace de inversión en micropréstamos a emprendedores y profesionales independientes en LATAM.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <LandingProvider>
          <div style={{ background: LIGHT.bg, color: LIGHT.ink }}>
            <div className="shell">
              <Nav />
              <main className="page-fade">{children}</main>
            </div>
            <Footer />
          </div>
        </LandingProvider>
      </body>
    </html>
  );
}
