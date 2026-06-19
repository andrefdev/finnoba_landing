"use client";

import { PageHero } from "@/domains/common/PageHero";
import { Section } from "@/domains/common/Section";
import { Card } from "@/domains/common/Card";
import { Eyebrow } from "@/domains/common/Eyebrow";
import { DataTable } from "@/domains/common/DataTable";
import { PageCta } from "@/domains/common/PageCta";
import { COLOR, FONT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

const h2Style = {
  fontFamily: FONT,
  fontWeight: 800,
  fontSize: "clamp(1.75rem,3vw,2.5rem)",
  letterSpacing: "-.03em",
  color: COLOR.ink,
  margin: "0 0 32px",
  maxWidth: 760,
} as const;

export default function HowItWorksPage() {
  const { t } = useLanding();
  const c = t.how;
  return (
    <>
      <PageHero title={c.h1} subtitle={c.sub} />

      <Section background="#fff" topRound paddingY="64px">
        <Eyebrow style={{ marginBottom: 12 }}>01</Eyebrow>
        <h2 style={h2Style}>{c.stepsTitle}</h2>
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
          {c.steps.map((s, i) => (
            <Card key={s.k} variant="flat" style={{ padding: 28 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 12,
                  background: COLOR.ink,
                  color: "#fff",
                  fontFamily: FONT,
                  fontWeight: 700,
                  fontSize: 14,
                  display: "grid",
                  placeItems: "center",
                  marginBottom: 18,
                }}
              >
                {i + 1}
              </div>
              <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: 20, letterSpacing: "-.015em", color: COLOR.ink, margin: "0 0 10px" }}>{s.t}</h3>
              <p style={{ fontFamily: FONT, fontSize: 14.5, lineHeight: 1.55, color: COLOR.ink2 }}>{s.b}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="#fff" paddingY="32px">
        <Eyebrow style={{ marginBottom: 12 }}>02</Eyebrow>
        <h2 style={h2Style}>{c.flowTitle}</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
            gap: 12,
          }}
        >
          {c.flow.map((node, i) => (
            <Card key={node.t} variant="flat" style={{ padding: 20 }}>
              <Eyebrow style={{ color: COLOR.muted, marginBottom: 10 }}>{`0${i + 1}`}</Eyebrow>
              <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: 15, color: COLOR.ink, marginBottom: 6 }}>{node.t}</div>
              <div style={{ fontFamily: FONT, fontSize: 13, lineHeight: 1.5, color: COLOR.muted }}>{node.b}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="#fff" paddingY="64px">
        <Eyebrow style={{ marginBottom: 12 }}>03</Eyebrow>
        <h2 style={h2Style}>{c.tableTitle}</h2>
        <div style={{ maxWidth: 720 }}>
          <DataTable rows={c.table} />
        </div>
      </Section>

      <PageCta title={c.cta} primary={c.cta} primaryHref="/investors" />
    </>
  );
}
