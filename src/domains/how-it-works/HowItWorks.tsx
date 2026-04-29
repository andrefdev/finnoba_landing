"use client";

import { FONT_DISPLAY, FONT_MONO, FONT_UI, GRADIENT, LIGHT } from "@/domains/common/tokens";
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
        background: LIGHT.bg,
        padding: "120px clamp(20px,4vw,80px)",
        position: "relative",
        scrollMarginTop: 96,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ marginBottom: 56, maxWidth: 880 }}>
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
            — {t.how.eyebrow}
          </div>
          <h2
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 500,
              fontSize: "clamp(2.25rem, 4.6vw, 4rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.04em",
              margin: "0 0 20px",
              color: LIGHT.ink,
              textWrap: "balance",
            }}
          >
            {t.how.title}
          </h2>
          <p
            style={{
              fontFamily: FONT_UI,
              fontSize: 17.5,
              lineHeight: 1.6,
              color: LIGHT.ink2,
              maxWidth: 640,
              margin: 0,
            }}
          >
            {t.how.sub}
          </p>
        </div>

        <div
          style={{
            background: LIGHT.bgCard,
            borderRadius: 28,
            border: `1px solid ${LIGHT.line}`,
            overflow: "hidden",
          }}
        >
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="step-row"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(120px, 180px) minmax(0, 1fr) minmax(0, 1.2fr)",
                gap: 56,
                alignItems: "center",
                padding: "44px 56px",
                borderBottom: i < steps.length - 1 ? `1px solid ${LIGHT.line}` : "none",
                transition: "background 200ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = LIGHT.bgSoft)}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <div
                className="step-row-num"
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 400,
                  fontSize: 84,
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                  background: GRADIENT.brandText,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {s.n}
              </div>
              <h3
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 500,
                  fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.05,
                  color: LIGHT.ink,
                  margin: 0,
                  textWrap: "balance",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: FONT_UI,
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: LIGHT.ink2,
                  margin: 0,
                  maxWidth: 520,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
