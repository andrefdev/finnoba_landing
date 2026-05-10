"use client";

import { CtaBlock } from "@/domains/common/CtaBlock";
import { DataTable } from "@/domains/common/DataTable";
import { PageHero } from "@/domains/common/PageHero";
import { Section, SectionEyebrow, SectionTitle } from "@/domains/common/Section";
import { FONT_DISPLAY, FONT_MONO, FONT_UI, LIGHT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

export default function ComoFuncionaPage() {
  const { t } = useLanding();
  const c = t.how;

  return (
    <>
      <PageHero h1={c.h1} sub={c.sub} />

      <Section>
        <SectionEyebrow>01</SectionEyebrow>
        <SectionTitle>{c.stepsTitle}</SectionTitle>
        <div style={{ marginTop: 56, display: "grid", gap: 24 }}>
          {c.steps.map((s) => (
            <div
              key={s.k}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: 32,
                padding: "32px 0",
                borderTop: `1px solid ${LIGHT.line}`,
                alignItems: "start",
              }}
              className="step-row"
            >
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 13,
                  letterSpacing: "0.10em",
                  color: LIGHT.ink3,
                }}
              >
                {s.k}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontWeight: 300,
                    fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                    margin: "0 0 16px",
                    color: LIGHT.ink,
                  }}
                >
                  {s.t}
                </h3>
                <p
                  style={{
                    fontFamily: FONT_UI,
                    fontSize: 16.5,
                    lineHeight: 1.65,
                    color: LIGHT.ink2,
                    margin: 0,
                    maxWidth: 720,
                  }}
                >
                  {s.b}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionEyebrow>02</SectionEyebrow>
        <SectionTitle>{c.flowTitle}</SectionTitle>
        <div
          className="how-flow"
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 16,
          }}
        >
          {c.flow.map((node, i) => (
            <div
              key={node.t}
              style={{
                position: "relative",
                padding: "24px 20px",
                background: LIGHT.bgCard,
                border: `1px solid ${LIGHT.line}`,
                borderRadius: 4,
              }}
            >
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  letterSpacing: "0.10em",
                  color: LIGHT.ink3,
                  marginBottom: 12,
                }}
              >
                0{i + 1}
              </div>
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 400,
                  fontSize: 16,
                  letterSpacing: "-0.015em",
                  color: LIGHT.ink,
                  marginBottom: 8,
                }}
              >
                {node.t}
              </div>
              <div
                style={{
                  fontFamily: FONT_UI,
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: LIGHT.ink2,
                }}
              >
                {node.b}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionEyebrow>03</SectionEyebrow>
        <SectionTitle>{c.tableTitle}</SectionTitle>
        <div style={{ marginTop: 48, maxWidth: 720 }}>
          <DataTable rows={c.table} />
        </div>
      </Section>

      <CtaBlock
        title={c.cta}
        primary={c.cta}
        primaryHref="/inversores"
      />
    </>
  );
}
