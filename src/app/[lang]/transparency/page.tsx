"use client";

import { PageHero } from "@/domains/common/PageHero";
import { Section } from "@/domains/common/Section";
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
  margin: "0 0 24px",
  maxWidth: 760,
} as const;

export default function TransparencyPage() {
  const { t } = useLanding();
  const tr = t.transparency;
  return (
    <>
      <PageHero title={tr.h1} subtitle={tr.sub} />

      <Section background="#fff" topRound paddingY="56px">
        <Eyebrow style={{ marginBottom: 12 }}>01</Eyebrow>
        <h2 style={h2Style}>{tr.portfolioTitle}</h2>
        <DataTable rows={tr.portfolio} />
      </Section>

      <Section background="#fff" paddingY="32px">
        <Eyebrow style={{ marginBottom: 12 }}>02</Eyebrow>
        <h2 style={h2Style}>{tr.distributionTitle}</h2>
        <DataTable rows={tr.distribution} />
      </Section>

      <Section background="#fff" paddingY="32px">
        <Eyebrow style={{ marginBottom: 12 }}>03</Eyebrow>
        <h2 style={h2Style}>{tr.reportsTitle}</h2>
        <p style={{ fontFamily: FONT, fontSize: 17, lineHeight: 1.65, color: COLOR.ink2, maxWidth: 760 }}>{tr.reportsBody}</p>
      </Section>

      <Section background="#fff" paddingY="64px">
        <Eyebrow style={{ marginBottom: 12 }}>04</Eyebrow>
        <h2 style={h2Style}>{tr.auditTitle}</h2>
        <p style={{ fontFamily: FONT, fontSize: 17, lineHeight: 1.65, color: COLOR.ink2, maxWidth: 760 }}>{tr.auditBody}</p>
      </Section>

      <PageCta title={tr.cta} primary={tr.cta} primaryHref="/#reserve" />
    </>
  );
}
