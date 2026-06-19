"use client";

import { PageHero } from "@/domains/common/PageHero";
import { Section } from "@/domains/common/Section";
import { Card } from "@/domains/common/Card";
import { Eyebrow } from "@/domains/common/Eyebrow";
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

export default function TeamPage() {
  const { t } = useLanding();
  const tm = t.team;
  return (
    <>
      <PageHero title={tm.h1} subtitle={tm.sub} />

      <Section topRound>
        <Eyebrow style={{ marginBottom: 12 }}>01</Eyebrow>
        <h2 style={h2Style}>{tm.foundersTitle}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16 }}>
          {tm.founders.map((f) => (
            <Card key={f.role} variant="flat" style={{ padding: 24 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#6D54E8,#2D7FF9)",
                  marginBottom: 16,
                }}
              />
              <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: 17, color: COLOR.ink, margin: "0 0 4px" }}>{f.name}</h3>
              <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: 13, color: COLOR.violet, marginBottom: 12 }}>{f.role}</div>
              <p style={{ fontFamily: FONT, fontSize: 14, lineHeight: 1.55, color: COLOR.ink2 }}>{f.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section paddingY="32px">
        <Eyebrow style={{ marginBottom: 12 }}>02</Eyebrow>
        <h2 style={h2Style}>{tm.ecosystemTitle}</h2>
        <p style={{ fontSize: 18, color: COLOR.ink2, maxWidth: 760, margin: "0 0 32px" }}>{tm.ecosystemSub}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
          {tm.ecosystem.map((eco) => (
            <Card key={eco.name} variant="flat" style={{ padding: 24 }}>
              <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: 17, color: COLOR.ink, margin: "0 0 10px" }}>{eco.name}</h3>
              <p style={{ fontFamily: FONT, fontSize: 14, lineHeight: 1.55, color: COLOR.ink2 }}>{eco.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow style={{ marginBottom: 12 }}>03</Eyebrow>
        <h2 style={h2Style}>{tm.philosophyTitle}</h2>
        <div style={{ display: "grid", gap: 14, maxWidth: 820 }}>
          {tm.philosophy.map((p, i) => (
            <Card key={i} variant="lilac">
              <p style={{ fontFamily: FONT, fontSize: 15.5, lineHeight: 1.65, color: COLOR.ink2 }}>{p}</p>
            </Card>
          ))}
        </div>
      </Section>

      <PageCta title={tm.cta} primary={tm.cta} primaryHref="/thesis" />
    </>
  );
}
