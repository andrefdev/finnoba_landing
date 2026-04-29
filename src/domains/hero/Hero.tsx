"use client";

import { Counter } from "@/domains/common/Counter";
import { FONT_DISPLAY, FONT_UI, LIGHT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

export function Hero() {
  const { t } = useLanding();

  return (
    <section
      style={{
        position: "relative",
        background: LIGHT.bg,
        color: LIGHT.ink,
        padding: "180px clamp(20px,4vw,80px) 80px",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Mysterious cool glow — soft, long fade so it doesn't cut */}
      <div
        aria-hidden
        className="glow-pulse"
        style={{
          position: "absolute",
          top: "-40%",
          right: "-25%",
          width: 1200,
          height: 1200,
          background:
            "radial-gradient(closest-side, rgba(75,2,168,0.18) 0%, rgba(121,4,235,0.10) 25%, rgba(168,85,247,0.05) 55%, rgba(168,85,247,0) 100%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-40%",
          left: "-25%",
          width: 1100,
          height: 1100,
          background:
            "radial-gradient(closest-side, rgba(49,46,129,0.12) 0%, rgba(75,2,168,0.06) 35%, rgba(75,2,168,0) 100%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: 500,
            fontSize: "clamp(2.75rem, 7.4vw, 6.5rem)",
            lineHeight: 0.96,
            letterSpacing: "-0.045em",
            margin: "0 auto 56px",
            color: LIGHT.ink,
            textWrap: "balance",
            maxWidth: 1180,
          }}
        >
          {t.hero.lender.title}{" "}
          <span className="gradient-text">{t.hero.lender.title2}</span>
        </h1>

        {/* Soft rounded stats card */}
        <div
          style={{
            background: LIGHT.bgCard,
            borderRadius: 28,
            padding: "44px 48px",
            border: `1px solid ${LIGHT.line}`,
            display: "grid",
            gridTemplateColumns: "minmax(260px, 1.4fr) repeat(3, minmax(140px, 1fr))",
            gap: 40,
            alignItems: "center",
            textAlign: "left",
          }}
          className="hero-stats-card"
        >
          <p
            style={{
              fontFamily: FONT_UI,
              fontSize: 16.5,
              lineHeight: 1.5,
              color: LIGHT.ink2,
              margin: 0,
              maxWidth: 360,
              textWrap: "pretty",
            }}
          >
            {t.hero.lender.sub}
          </p>

          <Stat
            value={
              <>
                10–<Counter value={12} suffix="%" />
              </>
            }
            label={t.stats.tvl}
          />
          <Stat value={<Counter value={500} prefix="$" suffix="K" />} label={t.stats.vol} />
          <Stat value={<Counter value={24} suffix="h" />} label={t.stats.time} />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div style={{ minWidth: 0 }}>
      <div
        style={{
          fontFamily: FONT_DISPLAY,
          fontWeight: 400,
          fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
          lineHeight: 1,
          letterSpacing: "-0.035em",
          color: LIGHT.ink,
          fontVariantNumeric: "tabular-nums",
          marginBottom: 10,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: FONT_UI,
          fontSize: 13.5,
          color: LIGHT.ink3,
          lineHeight: 1.4,
        }}
      >
        {label}
      </div>
    </div>
  );
}
