"use client";

import { COLORS } from "@/domains/common/tokens";
import { Eyebrow } from "@/domains/common/Eyebrow";
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
        background: "#03001A",
        color: "#fff",
        padding: "120px clamp(20px,4vw,80px)",
        position: "relative",
        borderBottom: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="how-header"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
            gap: 56,
            alignItems: "end",
            marginBottom: 56,
          }}
        >
          <div>
            <Eyebrow>{t.how.eyebrow}</Eyebrow>
            <h2
              style={{
                fontFamily: "Poppins",
                fontWeight: 700,
                fontSize: "clamp(2rem,3.6vw,3rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                margin: "14px 0 0",
                color: "#fff",
                maxWidth: 540,
              }}
            >
              {t.how.title}
            </h2>
          </div>
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: 17,
              color: COLORS.fgDark2,
              maxWidth: 460,
              margin: 0,
              lineHeight: 1.55,
            }}
          >
            {t.how.sub}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 0,
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            overflow: "hidden",
            background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",
          }}
        >
          {steps.map((s, i) => (
            <div
              key={s.n}
              style={{
                padding: "36px 32px",
                minHeight: 260,
                borderRight: i < steps.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                position: "relative",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontSize: 13,
                  color: COLORS.magenta,
                  letterSpacing: ".08em",
                  marginBottom: 24,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {s.n}
              </div>
              <h3
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontSize: 22,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                  color: "#fff",
                  margin: "0 0 14px",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: COLORS.fgDark2,
                  margin: 0,
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
