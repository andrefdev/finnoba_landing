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

export default function ThesisPage() {
  const { t } = useLanding();
  const th = t.thesis;
  return (
    <>
      <PageHero title={th.h1} subtitle={th.sub} />

      <Section background="#fff" topRound paddingY="64px">
        <Eyebrow style={{ marginBottom: 12 }}>01</Eyebrow>
        <h2 style={h2Style}>{th.problemTitle}</h2>
        <p style={{ fontSize: 18, color: COLOR.ink2, maxWidth: 760, margin: "0 0 36px" }}>{th.problemIntro}</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
          {th.stats.map((s, i) => (
            <Card key={i} variant="flat" style={{ padding: 24 }}>
              <div style={{ fontFamily: FONT, fontWeight: 800, fontSize: 36, letterSpacing: "-.03em", color: COLOR.ink, fontVariantNumeric: "tabular-nums", marginBottom: 10 }}>
                {s.v}
              </div>
              <div style={{ fontFamily: FONT, fontSize: 13.5, lineHeight: 1.5, color: COLOR.muted }}>{s.l}</div>
            </Card>
          ))}
        </div>

        <p style={{ marginTop: 18, fontFamily: FONT, fontSize: 12.5, color: COLOR.faint }}>{th.statsFootnote}</p>
      </Section>

      <Section background="#fff" paddingY="32px">
        <Eyebrow style={{ marginBottom: 12 }}>02</Eyebrow>
        <h2 style={h2Style}>{th.whyFailTitle}</h2>
        <ParagraphList items={th.whyFail} tone="rose" />
      </Section>

      <Section background="#fff" paddingY="32px">
        <Eyebrow style={{ marginBottom: 12 }}>03</Eyebrow>
        <h2 style={h2Style}>{th.whyFinnobaTitle}</h2>
        <ParagraphList items={th.whyFinnoba} tone="mint" />
      </Section>

      <Section background="#fff" paddingY="64px">
        <Eyebrow style={{ marginBottom: 12 }}>04</Eyebrow>
        <h2 style={h2Style}>{th.stateTitle}</h2>
        <p style={{ fontFamily: FONT, fontSize: 17, lineHeight: 1.65, color: COLOR.ink2, maxWidth: 760 }}>{th.stateBody}</p>
      </Section>

      <PageCta title={th.cta} primary={th.cta} primaryHref="/investors" />
    </>
  );
}

function ParagraphList({ items, tone }: { items: readonly string[]; tone: "rose" | "mint" }) {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      {items.map((p, i) => (
        <Card key={i} variant={tone} style={{ padding: 24 }}>
          <p style={{ fontFamily: FONT, fontSize: 15.5, lineHeight: 1.65, color: COLOR.ink2 }}>{p}</p>
        </Card>
      ))}
    </div>
  );
}
