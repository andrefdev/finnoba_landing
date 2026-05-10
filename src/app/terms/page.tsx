"use client";

import { PageHero } from "@/domains/common/PageHero";
import { Section } from "@/domains/common/Section";
import { FONT_UI, LIGHT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

export default function TerminosPage() {
  const { t } = useLanding();
  const l = t.legal;
  return (
    <>
      <PageHero h1={l.termsTitle} sub={l.placeholderTitle} />
      <Section>
        <p
          style={{
            fontFamily: FONT_UI,
            fontSize: 16,
            lineHeight: 1.7,
            color: LIGHT.ink2,
            maxWidth: 720,
            margin: 0,
          }}
        >
          {l.placeholderBody}
        </p>
      </Section>
    </>
  );
}
