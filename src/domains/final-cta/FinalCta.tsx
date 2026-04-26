"use client";

import { COLORS } from "@/domains/common/tokens";
import { DotGrid } from "@/domains/common/DotGrid";
import { WaitlistForm } from "@/domains/waitlist/WaitlistForm";
import { useLanding } from "@/lib/i18n/LandingProvider";

export function FinalCta() {
  const { t } = useLanding();
  return (
    <section
      data-final-cta
      style={{
        position: "relative",
        padding: "140px clamp(20px,4vw,80px)",
        background: "#03001A",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(121,4,235,0.30) 0%, rgba(121,4,235,0) 60%)",
        }}
      />
      <DotGrid opacity={0.04} size={40} />
      <div style={{ position: "relative", maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "Poppins",
            fontWeight: 700,
            fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "#fff",
            margin: "0 0 18px",
            textWrap: "balance",
          }}
        >
          {t.cta.title}
        </h2>
        <p
          style={{
            fontFamily: "Poppins",
            fontSize: 18,
            color: COLORS.fgDark2,
            margin: "0 0 32px",
          }}
        >
          {t.cta.sub}
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <WaitlistForm />
        </div>
        <div
          style={{
            marginTop: 22,
            color: COLORS.fgDark3,
            fontFamily: "Poppins",
            fontSize: 12.5,
            letterSpacing: ".04em",
          }}
        >
          {t.cta.foot}
        </div>
      </div>
    </section>
  );
}
