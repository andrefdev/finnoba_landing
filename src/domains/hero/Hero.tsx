"use client";

import { COLORS } from "@/domains/common/tokens";
import { Eyebrow } from "@/domains/common/Eyebrow";
import { ChainGlyph } from "@/domains/common/ChainGlyph";
import { WaitlistForm } from "@/domains/waitlist/WaitlistForm";
import { useLanding } from "@/lib/i18n/LandingProvider";
import { SideToggle } from "./SideToggle";
import { HeroCard } from "./HeroCard";

export function Hero() {
  const { t, side, heroVariant } = useLanding();
  const sideT = side === "lender" ? t.hero.lender : t.hero.borrower;

  return (
    <section
      style={{
        position: "relative",
        background:
          heroVariant === "glow"
            ? "radial-gradient(ellipse 70% 55% at 82% 8%, rgba(121,4,235,0.22) 0%, rgba(121,4,235,0) 55%), radial-gradient(ellipse 50% 45% at 8% 92%, rgba(254,118,255,0.08) 0%, rgba(254,118,255,0) 60%), #03001A"
            : "#03001A",
        color: "#fff",
        padding: "96px clamp(20px,4vw,80px) 120px",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
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
          width: "min(1200px, 100% - 40px)",
          pointerEvents: "none",
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "calc(100% / 12) 100%",
          borderLeft: "1px solid rgba(255,255,255,0.04)",
          borderRight: "1px solid rgba(255,255,255,0.04)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "100% 160px",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
        }}
      />

      <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 0.95fr)",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div>
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <div style={{ marginTop: 18 }}>
              <SideToggle />
            </div>

            <h1
              style={{
                fontFamily: "Poppins",
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 5.4vw, 4.25rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.025em",
                margin: "24px 0 22px",
                textWrap: "balance",
              }}
            >
              {sideT.title}
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg,#FE76FF 0%,#C9C2F2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {sideT.title2}
              </span>
            </h1>

            <p
              style={{
                fontFamily: "Poppins",
                fontSize: 18,
                lineHeight: 1.55,
                color: COLORS.fgDark2,
                maxWidth: 540,
                margin: "0 0 32px",
              }}
            >
              {sideT.sub}
            </p>

            <WaitlistForm />

            <div
              style={{
                marginTop: 28,
                display: "flex",
                gap: 18,
                alignItems: "center",
                color: COLORS.fgDark3,
                fontSize: 12.5,
                flexWrap: "wrap",
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: COLORS.success,
                    boxShadow: "0 0 0 3px rgba(0,198,138,.15)",
                  }}
                />
                {t.hero.kicker[0]}
              </span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>{t.hero.kicker[1]}</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
                <ChainGlyph chain="polygon" size={16} />
                <ChainGlyph chain="base" size={16} />
                Polygon · Base
              </span>
            </div>
          </div>

          <div style={{ minWidth: 0 }}>
            <HeroCard />
          </div>
        </div>
      </div>
    </section>
  );
}
