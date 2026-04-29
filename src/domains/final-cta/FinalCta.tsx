"use client";

import { Eyebrow } from "@/domains/common/Eyebrow";
import { FONT_DISPLAY, FONT_UI, LIGHT } from "@/domains/common/tokens";
import { WaitlistForm } from "@/domains/waitlist/WaitlistForm";
import { useLanding } from "@/lib/i18n/LandingProvider";

export function FinalCta() {
  const { t } = useLanding();

  return (
    <section
      data-final-cta
      id="docs"
      style={{
        background: LIGHT.bg,
        padding: "140px clamp(20px,4vw,80px)",
        borderBottom: `1px solid ${LIGHT.line}`,
        position: "relative",
        scrollMarginTop: 96,
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(1280px, 100% - 40px)",
          pointerEvents: "none",
          borderLeft: `1px solid ${LIGHT.line}`,
          borderRight: `1px solid ${LIGHT.line}`,
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: 880,
          margin: "0 auto",
          textAlign: "center",
          padding: "0 40px",
        }}
      >
        <Eyebrow style={{ justifyContent: "center" }}>—</Eyebrow>
        <h2
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: 400,
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            letterSpacing: "-0.025em",
            lineHeight: 1.02,
            color: LIGHT.ink,
            margin: "20px 0 18px",
            textWrap: "balance",
          }}
        >
          {t.cta.title}
        </h2>
        <p
          style={{
            fontFamily: FONT_UI,
            fontSize: 18,
            color: LIGHT.ink2,
            margin: "0 0 36px",
            lineHeight: 1.5,
          }}
        >
          {t.cta.sub}
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: 480 }}>
            <WaitlistForm full />
          </div>
        </div>
        <div
          style={{
            marginTop: 22,
            color: LIGHT.ink3,
            fontFamily: FONT_UI,
            fontSize: 12.5,
            letterSpacing: "0.04em",
          }}
        >
          {t.cta.foot}
        </div>
      </div>
    </section>
  );
}
