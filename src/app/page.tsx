import { LandingProvider } from "@/lib/i18n/LandingProvider";
import { Nav } from "@/domains/nav/Nav";
import { Hero } from "@/domains/hero/Hero";
import { StatStrip } from "@/domains/stats/StatStrip";
import { HowItWorks } from "@/domains/how-it-works/HowItWorks";
import { Compare } from "@/domains/compare/Compare";
import { BackedBy } from "@/domains/backed-by/BackedBy";
import { FinalCta } from "@/domains/final-cta/FinalCta";
import { Footer } from "@/domains/footer/Footer";

export default function Page() {
  return (
    <LandingProvider>
      <div style={{ background: "#03001A", minHeight: "100vh", fontFamily: "Poppins", color: "#fff" }}>
        <Nav />
        <Hero />
        <StatStrip />
        <HowItWorks />
        <Compare />
        <BackedBy />
        <FinalCta />
        <Footer />
      </div>
    </LandingProvider>
  );
}
