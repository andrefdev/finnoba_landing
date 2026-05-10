"use client";

import { CtaBlock } from "@/domains/common/CtaBlock";
import { PageHero } from "@/domains/common/PageHero";
import { Section, SectionEyebrow, SectionLead, SectionTitle } from "@/domains/common/Section";
import { FONT_DISPLAY, FONT_MONO, FONT_UI, LIGHT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

const RESERVE_HREF = "/inversores#reservar";

export default function TesisPage() {
  const { t } = useLanding();
  const th = t.thesis;

  return (
    <>
      <PageHero h1={th.h1} sub={th.sub} />

      <Section>
        <SectionEyebrow>01</SectionEyebrow>
        <SectionTitle>{th.problemTitle}</SectionTitle>
        <SectionLead>{th.problemIntro}</SectionLead>

        <div
          className="thesis-stats"
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
            borderTop: `1px solid ${LIGHT.line}`,
            borderBottom: `1px solid ${LIGHT.line}`,
          }}
        >
          {th.stats.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "32px 24px",
                borderLeft: i > 0 ? `1px solid ${LIGHT.line}` : "none",
              }}
            >
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 3.6vw, 3rem)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: 16,
                  color: LIGHT.ink,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {s.v}
              </div>
              <div
                style={{
                  fontFamily: FONT_UI,
                  fontSize: 13.5,
                  lineHeight: 1.5,
                  color: LIGHT.ink3,
                }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: 16,
            fontFamily: FONT_MONO,
            fontSize: 11.5,
            letterSpacing: "0.06em",
            color: LIGHT.ink3,
          }}
        >
          {th.statsFootnote}
        </p>
      </Section>

      <Section>
        <SectionEyebrow>02</SectionEyebrow>
        <SectionTitle>{th.whyFailTitle}</SectionTitle>
        <ParagraphList items={th.whyFail} />
      </Section>

      <Section>
        <SectionEyebrow>03</SectionEyebrow>
        <SectionTitle>{th.whyFinnobaTitle}</SectionTitle>
        <ParagraphList items={th.whyFinnoba} />
      </Section>

      <Section>
        <SectionEyebrow>04</SectionEyebrow>
        <SectionTitle>{th.stateTitle}</SectionTitle>
        <p
          style={{
            marginTop: 28,
            fontFamily: FONT_UI,
            fontSize: 16.5,
            lineHeight: 1.65,
            color: LIGHT.ink2,
            margin: "28px 0 0",
            maxWidth: 760,
          }}
        >
          {th.stateBody}
        </p>
      </Section>

      <CtaBlock title={th.cta} primary={th.cta} primaryHref={RESERVE_HREF} />
    </>
  );
}

function ParagraphList({ items }: { items: readonly string[] }) {
  return (
    <div style={{ marginTop: 40, display: "grid", gap: 0 }}>
      {items.map((p, i) => (
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
            borderBottom: i === items.length - 1 ? `1px solid ${LIGHT.line}` : "none",
            maxWidth: 820,
          }}
        >
          {p}
        </p>
      ))}
    </div>
  );
}
