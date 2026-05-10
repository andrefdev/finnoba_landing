"use client";

import { CtaBlock } from "@/domains/common/CtaBlock";
import { DataTable } from "@/domains/common/DataTable";
import { PageHero } from "@/domains/common/PageHero";
import { Section, SectionEyebrow, SectionLead, SectionTitle } from "@/domains/common/Section";
import { FONT_DISPLAY, FONT_MONO, FONT_UI, LIGHT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

export default function RiesgoPage() {
  const { t } = useLanding();
  const r = t.risk;

  return (
    <>
      <PageHero h1={r.h1} sub={r.sub} />

      <Section>
        <SectionEyebrow>01</SectionEyebrow>
        <SectionTitle>{r.frameworkTitle}</SectionTitle>
        <SectionLead>{r.frameworkBody}</SectionLead>
      </Section>

      <Section>
        <SectionEyebrow>02</SectionEyebrow>
        <SectionTitle>{r.layersTitle}</SectionTitle>

        <div
          className="risk-layers"
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0,
            borderTop: `1px solid ${LIGHT.line}`,
            borderLeft: `1px solid ${LIGHT.line}`,
          }}
        >
          {r.layers.map((layer) => (
            <div
              key={layer.k}
              style={{
                padding: "36px 32px",
                borderRight: `1px solid ${LIGHT.line}`,
                borderBottom: `1px solid ${LIGHT.line}`,
              }}
            >
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 12,
                  letterSpacing: "0.10em",
                  color: LIGHT.ink3,
                  marginBottom: 20,
                }}
              >
                Capa {layer.k}
              </div>
              <h3
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 300,
                  fontSize: "clamp(1.5rem, 2.2vw, 1.875rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                  margin: "0 0 16px",
                  color: LIGHT.ink,
                }}
              >
                {layer.t}
              </h3>
              <p
                style={{
                  fontFamily: FONT_UI,
                  fontSize: 15.5,
                  lineHeight: 1.6,
                  color: LIGHT.ink2,
                  margin: 0,
                }}
              >
                {layer.b}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionEyebrow>03</SectionEyebrow>
        <SectionTitle>{r.metricsTitle}</SectionTitle>
        <div style={{ marginTop: 48, maxWidth: 880 }}>
          <DataTable rows={r.metrics} head={r.metricsHead} />
        </div>
        <p
          style={{
            marginTop: 18,
            fontFamily: FONT_UI,
            fontSize: 13,
            color: LIGHT.ink3,
            lineHeight: 1.55,
            maxWidth: 720,
          }}
        >
          {r.metricsNote}
        </p>
      </Section>

      <Section>
        <SectionEyebrow>04</SectionEyebrow>
        <SectionTitle>{r.uncontrolledTitle}</SectionTitle>
        <p
          style={{
            marginTop: 28,
            fontFamily: FONT_UI,
            fontSize: 16.5,
            lineHeight: 1.65,
            color: LIGHT.ink2,
            maxWidth: 760,
          }}
        >
          {r.uncontrolledIntro}
        </p>
        <ul
          style={{
            marginTop: 24,
            listStyle: "none",
            padding: 0,
            display: "grid",
            gap: 0,
            maxWidth: 760,
          }}
        >
          {r.uncontrolled.map((item, idx) => (
            <li
              key={idx}
              style={{
                padding: "20px 0",
                borderTop: `1px solid ${LIGHT.line}`,
                borderBottom: idx === r.uncontrolled.length - 1 ? `1px solid ${LIGHT.line}` : "none",
                fontFamily: FONT_UI,
                fontSize: 15.5,
                lineHeight: 1.55,
                color: LIGHT.ink,
                display: "grid",
                gridTemplateColumns: "16px 1fr",
                gap: 16,
              }}
            >
              <span aria-hidden style={{ width: 6, height: 6, borderRadius: "50%", background: LIGHT.warning, marginTop: 9 }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p
          style={{
            marginTop: 28,
            fontFamily: FONT_UI,
            fontSize: 16,
            lineHeight: 1.6,
            color: LIGHT.ink2,
            maxWidth: 760,
            fontStyle: "italic",
          }}
        >
          {r.uncontrolledFoot}
        </p>
      </Section>

      <CtaBlock title={r.cta} primary={r.cta} primaryHref="/faq" />
    </>
  );
}
