"use client";

import { FONT_DISPLAY, FONT_MONO, FONT_UI, GRADIENT, LIGHT } from "@/domains/common/tokens";
import { WaitlistForm } from "@/domains/waitlist/WaitlistForm";
import { useLanding } from "@/lib/i18n/LandingProvider";

export function FinalCta() {
  const { t } = useLanding();

  return (
    <section
      data-final-cta
      id="docs"
      style={{
        position: "relative",
        background: GRADIENT.ctaDark,
        padding: "160px clamp(20px,4vw,80px)",
        borderBottom: `1px solid ${LIGHT.lineDark}`,
        overflow: "hidden",
        scrollMarginTop: 96,
      }}
    >
      {/* Aurora */}
      <div
        aria-hidden
        className="glow-pulse"
        style={{
          position: "absolute",
          top: "-40%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 1100,
          height: 1100,
          background: "radial-gradient(closest-side, rgba(254,118,255,0.32), transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          mixBlendMode: "screen",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-30%",
          right: "-10%",
          width: 700,
          height: 700,
          background: "radial-gradient(closest-side, rgba(121,4,235,0.45), transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          mixBlendMode: "screen",
        }}
      />
      {/* Dot grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 20%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 20%, transparent 85%)",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: 920,
          margin: "0 auto",
          textAlign: "center",
          padding: "0 40px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 16px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.16)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            fontFamily: FONT_MONO,
            fontSize: 11.5,
            color: LIGHT.inkOnDark2,
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: GRADIENT.brand,
              boxShadow: "0 0 0 4px rgba(254,118,255,0.18)",
            }}
          />
          {t.cta.foot}
        </div>

        <h2
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: 300,
            fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
            letterSpacing: "-0.04em",
            lineHeight: 0.98,
            color: "#fff",
            margin: "0 0 20px",
            textWrap: "balance",
          }}
        >
          {t.cta.title}
        </h2>
        <p
          style={{
            fontFamily: FONT_UI,
            fontSize: 19,
            color: LIGHT.inkOnDark2,
            margin: "0 0 40px",
            lineHeight: 1.5,
            opacity: 0.9,
          }}
        >
          {t.cta.sub}
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: 520 }}>
            <WaitlistForm full />
          </div>
        </div>
        <div
          style={{
            marginTop: 22,
            color: LIGHT.inkOnDark3,
            fontFamily: FONT_UI,
            fontSize: 12.5,
            letterSpacing: "0.04em",
          }}
        >
          {t.waitlist.foot}
        </div>
      </div>
    </section>
  );
}
