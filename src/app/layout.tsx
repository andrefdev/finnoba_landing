import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://finnoba.com"),
  title: {
    default: "Finnoba — Marketplace P2P de micropréstamos en USDT",
    template: "%s | Finnoba",
  },
  description:
    "Marketplace P2P de micropréstamos en USDT. Crédito sin colateral. Yield real para LATAM.",
  keywords: [
    "Finnoba",
    "micropréstamos",
    "USDT",
    "P2P",
    "marketplace",
    "crédito",
    "yield",
    "LATAM",
    "DeFi",
    "stablecoin",
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
    title: "Finnoba — Marketplace P2P de micropréstamos en USDT",
    description:
      "Marketplace P2P de micropréstamos en USDT. Crédito sin colateral. Yield real para LATAM.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finnoba — Marketplace P2P de micropréstamos en USDT",
    description:
      "Marketplace P2P de micropréstamos en USDT. Crédito sin colateral. Yield real para LATAM.",
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
    <html lang="es" className={poppins.variable}>
      <body style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
