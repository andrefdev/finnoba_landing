import { LandingProvider } from "@/lib/i18n/LandingProvider";
import { Nav } from "@/domains/nav/Nav";
import { Hero } from "@/domains/hero/Hero";
import { ValueBlock } from "@/domains/value/ValueBlock";
import { HowItWorks } from "@/domains/how-it-works/HowItWorks";
import { BackedBy } from "@/domains/backed-by/BackedBy";
import { FinalCta } from "@/domains/final-cta/FinalCta";
import { Footer } from "@/domains/footer/Footer";
import { LIGHT } from "@/domains/common/tokens";

export default function Page() {
  return (
    <LandingProvider>
      <div style={{ background: LIGHT.bg, minHeight: "100vh", color: LIGHT.ink }}>
        <Nav />
        <main className="page-fade">
          <Hero />
          <ValueBlock />
          <HowItWorks />
          <BackedBy />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </LandingProvider>
  );
}
