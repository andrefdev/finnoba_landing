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
  title: "Finnoba — Marketplace P2P de micropréstamos en USDT",
  description:
    "Marketplace P2P de micropréstamos en USDT. Crédito sin colateral. Yield real para LATAM.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={poppins.variable}>
      <body style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
