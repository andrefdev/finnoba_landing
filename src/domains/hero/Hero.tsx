"use client";

import { FONT_DISPLAY, FONT_UI, LIGHT } from "@/domains/common/tokens";
import { WaitlistForm } from "@/domains/waitlist/WaitlistForm";
import { useLanding } from "@/lib/i18n/LandingProvider";
import { SideToggle } from "./SideToggle";
import { HeroCard } from "./HeroCard";

function CheckMini() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M2 6L5 9L10 3"
        stroke={LIGHT.ink}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Hero() {
  const { t, lang, side } = useLanding();
  const sideT = side === "lender" ? t.hero.lender : t.hero.borrower;

  return (
    <section
      style={{
        position: "relative",
        background: LIGHT.bg,
        color: LIGHT.ink,
        // top padding clears the floating nav (nav top 16 + nav ~50 + breathing room)
        padding: "120px clamp(20px,4vw,80px) 0",
        borderBottom: `1px solid ${LIGHT.line}`,
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Aurora */}
      <div
        aria-hidden
        className="hero-aurora"
        style={{
          position: "absolute",
          inset: "-10% -5%",
          zIndex: 0,
          pointerEvents: "none",
          filter: "blur(60px)",
          opacity: 0.55,
        }}
      >
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>

      {/* Dot grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: `radial-gradient(${LIGHT.lineStrong} 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 70% 80% at 50% 50%, black 20%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 80% at 50% 50%, black 20%, transparent 85%)",
          opacity: 0.35,
        }}
      />

      {/* Bottom soft fade */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 200,
          zIndex: 0,
          pointerEvents: "none",
          background: `linear-gradient(180deg, rgba(250,250,247,0) 0%, ${LIGHT.bg} 100%)`,
        }}
      />

      {/* Outer rail hairlines */}
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
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* Top meta row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 18,
            borderBottom: `1px solid ${LIGHT.line}`,
            fontFamily: FONT_UI,
            fontSize: 12,
            color: LIGHT.ink3,
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <span style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {t.hero.eyebrow}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: LIGHT.success,
              }}
            />
            {t.hero.waitlistOpen}
          </span>
        </div>

        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.15fr) minmax(0, 0.85fr)",
            gap: 0,
            alignItems: "stretch",
          }}
        >
          {/* LEFT */}
          <div
            className="hero-left"
            style={{
              padding: "88px 56px 88px 0",
              borderRight: `1px solid ${LIGHT.line}`,
            }}
          >
            <SideToggle />

            <h1
              style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: 500,
                fontSize: "clamp(2.5rem, 5.4vw, 4.75rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.04em",
                margin: "40px 0 28px",
                color: LIGHT.ink,
                textWrap: "balance",
              }}
            >
              {sideT.title}
              <br />
              <span style={{ color: LIGHT.ink3 }}>{sideT.title2}</span>
            </h1>

            <p
              style={{
                fontFamily: FONT_UI,
                fontSize: 18,
                lineHeight: 1.55,
                color: LIGHT.ink2,
                maxWidth: 540,
                margin: "0 0 36px",
              }}
            >
              {sideT.sub}
            </p>

            <WaitlistForm />

            <div
              style={{
                marginTop: 32,
                paddingTop: 24,
                borderTop: `1px solid ${LIGHT.line}`,
                display: "flex",
                gap: 28,
                alignItems: "center",
                color: LIGHT.ink3,
                fontSize: 12.5,
                flexWrap: "wrap",
                fontFamily: FONT_UI,
                letterSpacing: "0.02em",
              }}
              aria-label={lang === "es" ? "Garantías" : "Guarantees"}
            >
              {t.hero.kicker.map((k) => (
                <span key={k} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <CheckMini /> {k}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="hero-right"
            style={{
              padding: "88px 0 88px 56px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <HeroCard />
          </div>
        </div>
      </div>
    </section>
  );
}
