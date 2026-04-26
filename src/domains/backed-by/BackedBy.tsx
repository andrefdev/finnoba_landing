"use client";

import { COLORS } from "@/domains/common/tokens";
import { Eyebrow } from "@/domains/common/Eyebrow";
import { useLanding } from "@/lib/i18n/LandingProvider";

export function BackedBy() {
  const { t } = useLanding();
  const b = t.backed;
  return (
    <section
      id="backed"
      style={{
        background: "#03001A",
        color: "#fff",
        padding: "120px clamp(20px,4vw,80px)",
        position: "relative",
        borderBottom: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Eyebrow>{b.eyebrow}</Eyebrow>
        <h2
          style={{
            fontFamily: "Poppins",
            fontWeight: 700,
            fontSize: "clamp(2rem,3.6vw,3rem)",
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            margin: "14px 0 14px",
            color: "#fff",
            maxWidth: 720,
          }}
        >
          {b.title}
        </h2>
        <p
          style={{
            fontFamily: "Poppins",
            fontSize: 17,
            color: COLORS.fgDark2,
            maxWidth: 620,
            margin: "0 0 48px",
            lineHeight: 1.55,
          }}
        >
          {b.sub}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 16,
          }}
        >
          {b.partners.map((p) => (
            <div
              key={p.name}
              style={{
                padding: "28px 24px",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                height: "100%",
                transition: "all 200ms cubic-bezier(.22,1,.36,1)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(254,118,255,0.30)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.background = "rgba(255,255,255,0.025)";
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: COLORS.magenta,
                  marginBottom: 18,
                  padding: "4px 10px",
                  borderRadius: 9999,
                  background: "rgba(254,118,255,0.08)",
                  border: "1px solid rgba(254,118,255,0.18)",
                }}
              >
                {p.tag}
              </div>
              <h3
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontSize: 22,
                  letterSpacing: "-0.01em",
                  color: "#fff",
                  margin: "0 0 10px",
                }}
              >
                {p.name}
              </h3>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: 14.5,
                  lineHeight: 1.55,
                  color: COLORS.fgDark2,
                  margin: 0,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
