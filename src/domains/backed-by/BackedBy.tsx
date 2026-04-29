"use client";

import { SectionHeader } from "@/domains/common/SectionHeader";
import { FONT_DISPLAY, FONT_MONO, FONT_UI, LIGHT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

export function BackedBy() {
  const { t } = useLanding();
  const b = t.backed;

  return (
    <section
      id="backed"
      style={{
        background: "#fff",
        padding: "120px clamp(20px,4vw,80px)",
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
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        <SectionHeader eyebrow={b.eyebrow} title={b.title} lead={b.sub} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 0,
            borderTop: `1px solid ${LIGHT.line}`,
            borderLeft: `1px solid ${LIGHT.line}`,
          }}
        >
          {b.partners.map((p) => (
            <div
              key={p.name}
              style={{
                padding: "32px 28px",
                borderRight: `1px solid ${LIGHT.line}`,
                borderBottom: `1px solid ${LIGHT.line}`,
                fontFamily: FONT_UI,
                background: "#fff",
                transition: "background 160ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = LIGHT.bgSoft)}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
            >
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontWeight: 500,
                  fontSize: 11,
                  letterSpacing: "0.04em",
                  color: LIGHT.ink3,
                  marginBottom: 20,
                }}
              >
                — {p.tag}
              </div>
              <h3
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 400,
                  fontSize: 26,
                  letterSpacing: "-0.015em",
                  color: LIGHT.ink,
                  margin: "0 0 12px",
                  lineHeight: 1.1,
                }}
              >
                {p.name}
              </h3>
              <p style={{ fontFamily: FONT_UI, fontSize: 14.5, lineHeight: 1.55, color: LIGHT.ink2, margin: 0 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
