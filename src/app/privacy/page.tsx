"use client";

import { PageHero } from "@/domains/common/PageHero";
import { Section } from "@/domains/common/Section";
import { Card } from "@/domains/common/Card";
import { COLOR, FONT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

export default function PrivacyPage() {
  const { t } = useLanding();
  const l = t.legal;
  return (
    <>
      <PageHero title={l.privacyTitle} subtitle={l.placeholderTitle} />
      <Section background="#fff" topRound paddingY="64px">
        <Card variant="flat" style={{ padding: 32, maxWidth: 760 }}>
          <p style={{ fontFamily: FONT, fontSize: 16, lineHeight: 1.7, color: COLOR.ink2 }}>{l.placeholderBody}</p>
        </Card>
      </Section>
    </>
  );
}
