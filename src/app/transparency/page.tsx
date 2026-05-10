"use client";

import { CtaBlock } from "@/domains/common/CtaBlock";
import { DataTable } from "@/domains/common/DataTable";
import { PageHero } from "@/domains/common/PageHero";
import { Section, SectionEyebrow, SectionTitle } from "@/domains/common/Section";
import { FONT_UI, LIGHT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

const RESERVE_HREF = "/investors#reserve";

export default function TransparenciaPage() {
  const { t } = useLanding();
  const tr = t.transparency;

  return (
    <>
      <PageHero h1={tr.h1} sub={tr.sub} />

      <Section>
        <SectionEyebrow>01</SectionEyebrow>
        <SectionTitle>{tr.portfolioTitle}</SectionTitle>
        <div style={{ marginTop: 48, maxWidth: 760 }}>
          <DataTable rows={tr.portfolio} />
        </div>
      </Section>

      <Section>
        <SectionEyebrow>02</SectionEyebrow>
        <SectionTitle>{tr.distributionTitle}</SectionTitle>
        <div style={{ marginTop: 48, maxWidth: 760 }}>
          <DataTable rows={tr.distribution} />
        </div>
      </Section>

      <Section>
        <SectionEyebrow>03</SectionEyebrow>
        <SectionTitle>{tr.reportsTitle}</SectionTitle>
        <p
          style={{
            marginTop: 28,
            fontFamily: FONT_UI,
            fontSize: 16,
            lineHeight: 1.65,
            color: LIGHT.ink2,
            maxWidth: 720,
          }}
        >
          {tr.reportsBody}
        </p>
      </Section>

      <Section>
        <SectionEyebrow>04</SectionEyebrow>
        <SectionTitle>{tr.auditTitle}</SectionTitle>
        <p
          style={{
            marginTop: 28,
            fontFamily: FONT_UI,
            fontSize: 16,
            lineHeight: 1.65,
            color: LIGHT.ink2,
            maxWidth: 720,
          }}
        >
          {tr.auditBody}
        </p>
      </Section>

      <CtaBlock title={tr.cta} primary={tr.cta} primaryHref={RESERVE_HREF} />
    </>
  );
}
