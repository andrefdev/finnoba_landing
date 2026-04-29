"use client";

import { FONT_DISPLAY, FONT_MONO, FONT_UI, LIGHT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

export function BackedBy() {
  const { t } = useLanding();
  const b = t.backed;

  return (
    <section
      id="backed"
      style={{
        background: LIGHT.bg,
        padding: "120px clamp(20px,4vw,80px)",
        position: "relative",
        scrollMarginTop: 96,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ marginBottom: 48, maxWidth: 720 }}>
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
            — {b.eyebrow}
          </div>
          <h2
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 500,
              fontSize: "clamp(2rem, 3.6vw, 3.25rem)",
              lineHeight: 1,
              letterSpacing: "-0.035em",
              margin: 0,
              color: LIGHT.ink,
              textWrap: "balance",
            }}
          >
            {b.title}
          </h2>
        </div>

        <div
          style={{
            background: LIGHT.bgCard,
            borderRadius: 28,
            border: `1px solid ${LIGHT.line}`,
            padding: "12px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 0,
            }}
          >
            {b.partners.map((p, i) => (
              <div
                key={p.name}
                style={{
                  padding: "32px 28px",
                  borderRight: (i + 1) % 3 !== 0 ? `1px solid ${LIGHT.line}` : "none",
                  borderBottom: i < b.partners.length - (b.partners.length % 3 || 3) ? `1px solid ${LIGHT.line}` : "none",
                  fontFamily: FONT_UI,
                  background: "transparent",
                  transition: "background 200ms ease",
                  borderRadius: 16,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = LIGHT.bgSoft)}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontWeight: 500,
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    color: LIGHT.ink3,
                    marginBottom: 18,
                  }}
                >
                  — {p.tag}
                </div>
                <h3
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontWeight: 500,
                    fontSize: 22,
                    letterSpacing: "-0.02em",
                    color: LIGHT.ink,
                    margin: "0 0 10px",
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    fontFamily: FONT_UI,
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: LIGHT.ink2,
                    margin: 0,
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
