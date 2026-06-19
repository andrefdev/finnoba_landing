"use client";

import { PageHero } from "@/domains/common/PageHero";
import { Section } from "@/domains/common/Section";
import { Eyebrow } from "@/domains/common/Eyebrow";
import { PageCta } from "@/domains/common/PageCta";
import { COLOR, FONT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

const h2Style = {
  fontFamily: FONT,
  fontWeight: 800,
  fontSize: "clamp(1.5rem,2.6vw,2.25rem)",
  letterSpacing: "-.03em",
  color: COLOR.ink,
  margin: "0 0 24px",
} as const;

export default function FaqPage() {
  const { t } = useLanding();
  const f = t.faq;
  return (
    <>
      <PageHero title={f.h1} subtitle={f.sub} />

      <Section topRound paddingY="48px">
        {f.groups.map((g, gi) => (
          <div key={g.title} style={{ marginTop: gi === 0 ? 0 : 56 }}>
            <Eyebrow style={{ marginBottom: 12 }}>{String(gi + 1).padStart(2, "0")}</Eyebrow>
            <h2 style={h2Style}>{g.title}</h2>
            {g.items.map((it) => (
              <details key={it.q} style={{ borderBottom: `1px solid ${COLOR.line}`, padding: "20px 0" }}>
                <summary
                  style={{
                    listStyle: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    fontFamily: FONT,
                    fontWeight: 700,
                    fontSize: 17,
                    color: COLOR.ink,
                  }}
                >
                  <span>{it.q}</span>
                  <span aria-hidden style={{ color: COLOR.muted, fontSize: 18, lineHeight: 1 }}>+</span>
                </summary>
                <p style={{ marginTop: 14, fontFamily: FONT, fontSize: 15, lineHeight: 1.65, color: COLOR.ink2, maxWidth: 760 }}>
                  {it.a}
                </p>
              </details>
            ))}
          </div>
        ))}
      </Section>

      <PageCta title={f.cta} primary={f.cta} primaryHref="/#reserve" />
    </>
  );
}
