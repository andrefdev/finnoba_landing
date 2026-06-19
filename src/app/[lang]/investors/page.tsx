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

export default function InvestorsPage() {
  const { t } = useLanding();
  const i = t.investors;
  return (
    <>
      <PageHero title={i.h1} subtitle={i.sub} />

      <Section topRound>
        <Eyebrow style={{ marginBottom: 12 }}>01</Eyebrow>
        <h2 style={h2Style}>{i.termsTitle}</h2>
        <div style={{ maxWidth: 880 }}>
          <DataTable rows={i.terms} />
        </div>
      </Section>

      <Section paddingY="32px">
        <Eyebrow style={{ marginBottom: 12 }}>02</Eyebrow>
        <h2 style={h2Style}>{i.profileTitle}</h2>
        <p style={{ fontSize: 18, color: COLOR.ink2, maxWidth: 760, margin: "0 0 32px" }}>{i.profileBody}</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
          <Card variant="mint">
            <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: 18, color: COLOR.ink, margin: "0 0 18px" }}>{i.profileFor.title}</h3>
            <BulletList items={i.profileFor.items} bulletColor={COLOR.green} />
          </Card>
          <Card variant="rose">
            <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: 18, color: COLOR.ink, margin: "0 0 18px" }}>{i.profileNotFor.title}</h3>
            <BulletList items={i.profileNotFor.items} bulletColor={COLOR.red} />
          </Card>
        </div>
      </Section>

      <Section>
        <Eyebrow style={{ marginBottom: 12 }}>03</Eyebrow>
        <h2 style={h2Style}>{i.onboardingTitle}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 760 }}>
          {i.onboarding.map((step, idx) => (
            <Card key={idx} variant="flat" style={{ display: "flex", gap: 16, alignItems: "center", padding: 20 }}>
              <span
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
                  flexShrink: 0,
                }}
              >
                {idx + 1}
              </span>
              <span style={{ fontFamily: FONT, fontSize: 15.5, lineHeight: 1.55, color: COLOR.ink }}>{step}</span>
            </Card>
          ))}
        </div>
      </Section>

      <PageCta title={i.cta} primary={i.cta} primaryHref="/#reserve" />
    </>
  );
}
