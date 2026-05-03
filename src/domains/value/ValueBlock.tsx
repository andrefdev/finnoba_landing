"use client";

import { FONT_DISPLAY, FONT_MONO, FONT_UI, GRADIENT, LIGHT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";
import { HeroCard } from "@/domains/hero/HeroCard";

export function ValueBlock() {
  const { t } = useLanding();
  const v = t.value;

  return (
    <section
      style={{
        background: LIGHT.bg,
        padding: "120px clamp(20px,4vw,80px)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px" }}>
        <div
          style={{
            background: LIGHT.bgCard,
            borderRadius: 28,
            border: `1px solid ${LIGHT.line}`,
            padding: "clamp(40px, 6vw, 80px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle violet glow inside the card */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "-20%",
              right: "-10%",
              width: 600,
              height: 600,
              background: "radial-gradient(closest-side, rgba(121,4,235,0.18), transparent 70%)",
              filter: "blur(50px)",
              pointerEvents: "none",
            }}
          />

          <div
            className="value-grid"
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 460px)",
              gap: 64,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 12,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  color: LIGHT.ink3,
                  marginBottom: 24,
                }}
              >
                — {v.eyebrow}
              </div>
              <h2
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 300,
                  fontSize: "clamp(2.25rem, 4.6vw, 4rem)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.04em",
                  margin: "0 0 28px",
                  color: LIGHT.ink,
                  textWrap: "balance",
                }}
              >
                {v.title}
              </h2>
              <p
                style={{
                  fontFamily: FONT_UI,
                  fontSize: 17,
                  lineHeight: 1.6,
                  color: LIGHT.ink2,
                  maxWidth: 520,
                  margin: "0 0 36px",
                }}
              >
                {v.lead}
              </p>

              <div style={{ display: "grid", gap: 20 }}>
                {v.bullets.map((b) => (
                  <div
                    key={b.k}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "44px 1fr",
                      gap: 20,
                      alignItems: "start",
                      paddingTop: 20,
                      borderTop: `1px solid ${LIGHT.line}`,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 13,
                        background: GRADIENT.brandText,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "transparent",
                        fontWeight: 300,
                      }}
                    >
                      {b.k}
                    </span>
                    <div>
                      <h3
                        style={{
                          fontFamily: FONT_DISPLAY,
                          fontWeight: 300,
                          fontSize: 20,
                          letterSpacing: "-0.02em",
                          color: LIGHT.ink,
                          margin: "0 0 6px",
                        }}
                      >
                        {b.t}
                      </h3>
                      <p
                        style={{
                          fontFamily: FONT_UI,
                          fontSize: 14.5,
                          lineHeight: 1.55,
                          color: LIGHT.ink2,
                          margin: 0,
                        }}
                      >
                        {b.b}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: -30,
                  background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(121,4,235,0.20), transparent 70%)",
                  filter: "blur(20px)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative", width: "100%", maxWidth: 460 }}>
                <HeroCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
