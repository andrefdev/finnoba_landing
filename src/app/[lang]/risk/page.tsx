"use client";

import { PageHero } from "@/domains/common/PageHero";
import { Section } from "@/domains/common/Section";
import { Card } from "@/domains/common/Card";
import { Eyebrow } from "@/domains/common/Eyebrow";
import { DataTable } from "@/domains/common/DataTable";
import { BulletList } from "@/domains/common/BulletList";
import { PageCta } from "@/domains/common/PageCta";
import { COLOR, FONT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

const h2Style = {
  fontFamily: FONT,
  fontWeight: 800,
  fontSize: "clamp(1.75rem,3vw,2.5rem)",
  letterSpacing: "-.03em",
  color: COLOR.ink,
  margin: "0 0 24px",
  maxWidth: 760,
} as const;

export default function RiskPage() {
  const { t } = useLanding();
  const r = t.risk;
  return (
    <>
      <PageHero title={r.h1} subtitle={r.sub} />

      <Section background="#fff" topRound paddingY="64px">
        <Eyebrow style={{ marginBottom: 12 }}>01</Eyebrow>
        <h2 style={h2Style}>{r.frameworkTitle}</h2>
        <p style={{ fontFamily: FONT, fontSize: 17, lineHeight: 1.65, color: COLOR.ink2, maxWidth: 760 }}>{r.frameworkBody}</p>
      </Section>

      <Section background="#fff" paddingY="32px">
        <Eyebrow style={{ marginBottom: 12 }}>02</Eyebrow>
        <h2 style={h2Style}>{r.layersTitle}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16 }}>
          {r.layers.map((l, i) => (
            <Card key={l.k} variant="lilac">
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 12,
                  background: COLOR.violet,
                  color: "#fff",
                  fontFamily: FONT,
                  fontWeight: 700,
                  fontSize: 14,
                  display: "grid",
                  placeItems: "center",
                  marginBottom: 16,
                }}
              >
                {i + 1}
              </div>
              <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: 18, color: COLOR.ink, margin: "0 0 10px" }}>{l.t}</h3>
              <p style={{ fontFamily: FONT, fontSize: 14, lineHeight: 1.6, color: COLOR.ink2 }}>{l.b}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="#fff" paddingY="32px">
        <Eyebrow style={{ marginBottom: 12 }}>03</Eyebrow>
        <h2 style={h2Style}>{r.metricsTitle}</h2>
        <DataTable rows={r.metrics} header={r.metricsHead} />
        <p style={{ marginTop: 14, fontFamily: FONT, fontSize: 12.5, color: COLOR.faint }}>{r.metricsNote}</p>
      </Section>

      <Section background="#fff" paddingY="64px">
        <Eyebrow style={{ marginBottom: 12 }}>04</Eyebrow>
        <h2 style={h2Style}>{r.uncontrolledTitle}</h2>
        <p style={{ fontSize: 17, color: COLOR.ink2, maxWidth: 760, margin: "0 0 24px" }}>{r.uncontrolledIntro}</p>
        <Card variant="rose">
          <BulletList items={r.uncontrolled} bulletColor={COLOR.red} />
        </Card>
        <p style={{ marginTop: 18, fontFamily: FONT, fontSize: 14.5, lineHeight: 1.65, color: COLOR.ink2, maxWidth: 760 }}>
          {r.uncontrolledFoot}
        </p>
      </Section>

      <PageCta title={r.cta} primary={r.cta} primaryHref="/faq" />
    </>
  );
}
