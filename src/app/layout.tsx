import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://finnoba.com"),
  title: {
    default: "Finnoba — Plataforma de inversión en micropréstamos · LATAM",
    template: "%s | Finnoba",
  },
  description:
    "Plataforma de inversión en micropréstamos. Capital al alcance de emprendedores. Rendimiento real para inversores LATAM.",
  keywords: [
    "Finnoba",
    "micropréstamos",
    "inversión",
    "LATAM",
    "fintech",
    "crédito",
    "rendimiento",
    "P2P",
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
    url: "https://finnoba.com",
    siteName: "Finnoba",
    title: "Finnoba — Plataforma de inversión en micropréstamos · LATAM",
    description:
      "Invierte en micropréstamos a emprendedores LATAM. Diversificación automática, reportes mensuales, retornos objetivo por encima del 10% anual.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finnoba — Plataforma de inversión en micropréstamos · LATAM",
    description:
      "Invierte en micropréstamos a emprendedores LATAM. Diversificación automática, reportes mensuales.",
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
      <body>{children}</body>
    </html>
  );
}
