"use client";

import { SectionHeader } from "@/domains/common/SectionHeader";
import { FONT_DISPLAY, FONT_MONO, FONT_UI, LIGHT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

export function HowItWorks() {
  const { t } = useLanding();
  const steps = [
    { n: "01", title: t.how.step1Title, body: t.how.step1 },
    { n: "02", title: t.how.step2Title, body: t.how.step2 },
    { n: "03", title: t.how.step3Title, body: t.how.step3 },
  ];

  return (
    <section
      id="how"
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
        <SectionHeader eyebrow={t.how.eyebrow} title={t.how.title} lead={t.how.sub} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 0,
            borderTop: `1px solid ${LIGHT.line}`,
            borderLeft: `1px solid ${LIGHT.line}`,
          }}
        >
          {steps.map((s) => (
            <div
              key={s.n}
              style={{
                padding: "40px 32px 44px",
                borderRight: `1px solid ${LIGHT.line}`,
                borderBottom: `1px solid ${LIGHT.line}`,
                minHeight: 280,
                fontFamily: FONT_UI,
                background: "#fff",
              }}
            >
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontWeight: 500,
                  fontSize: 12,
                  color: LIGHT.ink3,
                  marginBottom: 32,
                  letterSpacing: "0.04em",
                }}
              >
                {s.n} / 03
              </div>
              <h3
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 400,
                  fontSize: 28,
                  letterSpacing: "-0.015em",
                  lineHeight: 1.1,
                  color: LIGHT.ink,
                  margin: "0 0 14px",
                }}
              >
                {s.title}
              </h3>
              <p style={{ fontFamily: FONT_UI, fontSize: 15, lineHeight: 1.6, color: LIGHT.ink2, margin: 0 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
