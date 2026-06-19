import { Hero } from "@/domains/home/Hero";
import { StatStrip } from "@/domains/home/StatStrip";
import { MarketsSection } from "@/domains/home/MarketsSection";
import { WhySection } from "@/domains/home/WhySection";
import { HowSection } from "@/domains/home/HowSection";
import { CtaSection } from "@/domains/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatStrip />
      <MarketsSection />
      <WhySection />
      <HowSection />
      <CtaSection />
    </>
  );
}
