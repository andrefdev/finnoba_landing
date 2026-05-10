"use client";

import { CtaBlock } from "@/domains/common/CtaBlock";
import { PageHero } from "@/domains/common/PageHero";
import { Section, SectionEyebrow, SectionLead, SectionTitle } from "@/domains/common/Section";
import { FONT_DISPLAY, FONT_MONO, FONT_UI, LIGHT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

export default function EquipoPage() {
  const { t } = useLanding();
  const e = t.team;

  return (
    <>
      <PageHero h1={e.h1} sub={e.sub} />

      <Section>
        <SectionEyebrow>01</SectionEyebrow>
        <SectionTitle>{e.foundersTitle}</SectionTitle>

        <div
          className="team-founders"
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {e.founders.map((f, idx) => (
            <div
              key={idx}
              style={{
                background: "#fff",
                border: `1px solid ${LIGHT.line}`,
                borderRadius: 4,
                padding: "28px 24px",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: LIGHT.bgCard,
                  border: `1px solid ${LIGHT.line}`,
                  marginBottom: 24,
                }}
                aria-hidden
              />
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 400,
                  fontSize: 18,
                  letterSpacing: "-0.015em",
                  color: LIGHT.ink,
                  marginBottom: 6,
                }}
              >
                {f.name}
              </div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  color: LIGHT.ink3,
                  marginBottom: 16,
                }}
              >
                {f.role}
              </div>
              <p
                style={{
                  fontFamily: FONT_UI,
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: LIGHT.ink2,
                  margin: 0,
                }}
              >
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionEyebrow>02</SectionEyebrow>
        <SectionTitle>{e.ecosystemTitle}</SectionTitle>
        <SectionLead>{e.ecosystemSub}</SectionLead>

        <div
          className="team-eco"
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0,
            borderTop: `1px solid ${LIGHT.line}`,
            borderLeft: `1px solid ${LIGHT.line}`,
          }}
        >
          {e.ecosystem.map((p) => (
            <div
              key={p.name}
              style={{
                padding: "32px 28px",
                borderRight: `1px solid ${LIGHT.line}`,
                borderBottom: `1px solid ${LIGHT.line}`,
              }}
            >
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 400,
                  fontSize: 22,
                  letterSpacing: "-0.02em",
                  color: LIGHT.ink,
                  marginBottom: 14,
                }}
              >
                {p.name}
              </div>
              <p
                style={{
                  fontFamily: FONT_UI,
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: LIGHT.ink2,
                  margin: 0,
                  maxWidth: 480,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionEyebrow>03</SectionEyebrow>
        <SectionTitle>{e.philosophyTitle}</SectionTitle>
        <div style={{ marginTop: 40, display: "grid", gap: 0 }}>
          {e.philosophy.map((p, i) => (
            <p
              key={i}
              style={{
                fontFamily: FONT_UI,
                fontSize: 16.5,
                lineHeight: 1.65,
                color: LIGHT.ink2,
                margin: 0,
                padding: "24px 0",
                borderTop: `1px solid ${LIGHT.line}`,
                borderBottom: i === e.philosophy.length - 1 ? `1px solid ${LIGHT.line}` : "none",
                maxWidth: 820,
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </Section>

      <CtaBlock title={e.cta} primary={e.cta} primaryHref="/tesis" />
    </>
  );
}
