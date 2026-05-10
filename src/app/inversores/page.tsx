"use client";

import { CtaBlock } from "@/domains/common/CtaBlock";
import { DataTable } from "@/domains/common/DataTable";
import { PageHero } from "@/domains/common/PageHero";
import { Section, SectionEyebrow, SectionLead, SectionTitle } from "@/domains/common/Section";
import { FONT_DISPLAY, FONT_MONO, FONT_UI, LIGHT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

export default function InversoresPage() {
  const { t } = useLanding();
  const i = t.investors;

  return (
    <>
      <PageHero h1={i.h1} sub={i.sub} />

      <Section>
        <SectionEyebrow>01</SectionEyebrow>
        <SectionTitle>{i.termsTitle}</SectionTitle>
        <div style={{ marginTop: 48, maxWidth: 880 }}>
          <DataTable rows={i.terms} />
        </div>
      </Section>

      <Section>
        <SectionEyebrow>02</SectionEyebrow>
        <SectionTitle>{i.profileTitle}</SectionTitle>
        <SectionLead>{i.profileBody}</SectionLead>

        <div
          className="investors-grid"
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
          }}
        >
          <ProfileList title={i.profileFor.title} items={i.profileFor.items} />
          <ProfileList title={i.profileNotFor.title} items={i.profileNotFor.items} muted />
        </div>
      </Section>

      <Section>
        <SectionEyebrow>03</SectionEyebrow>
        <SectionTitle>{i.onboardingTitle}</SectionTitle>
        <ol
          style={{
            marginTop: 48,
            listStyle: "none",
            padding: 0,
            display: "grid",
            gap: 0,
            maxWidth: 760,
          }}
        >
          {i.onboarding.map((step, idx) => (
            <li
              key={idx}
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr",
                gap: 24,
                padding: "24px 0",
                borderTop: `1px solid ${LIGHT.line}`,
                borderBottom: idx === i.onboarding.length - 1 ? `1px solid ${LIGHT.line}` : "none",
                alignItems: "start",
              }}
            >
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 13,
                  letterSpacing: "0.10em",
                  color: LIGHT.ink3,
                  paddingTop: 4,
                }}
              >
                0{idx + 1}
              </span>
              <span
                style={{
                  fontFamily: FONT_UI,
                  fontSize: 16.5,
                  lineHeight: 1.55,
                  color: LIGHT.ink,
                }}
              >
                {step}
              </span>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBlock title={i.cta} primary={i.cta} primaryHref="#reservar" />
    </>
  );
}

function ProfileList({
  title,
  items,
  muted,
}: {
  title: string;
  items: readonly string[];
  muted?: boolean;
}) {
  return (
    <div
      style={{
        padding: "32px 28px",
        background: muted ? "#fff" : LIGHT.bgCard,
        border: `1px solid ${LIGHT.line}`,
        borderRadius: 4,
      }}
    >
      <h3
        style={{
          fontFamily: FONT_DISPLAY,
          fontWeight: 400,
          fontSize: 18,
          letterSpacing: "-0.015em",
          margin: "0 0 24px",
          color: LIGHT.ink,
        }}
      >
        {title}
      </h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 16 }}>
        {items.map((it, idx) => (
          <li
            key={idx}
            style={{
              fontFamily: FONT_UI,
              fontSize: 14.5,
              lineHeight: 1.55,
              color: LIGHT.ink2,
              display: "grid",
              gridTemplateColumns: "16px 1fr",
              gap: 12,
            }}
          >
            <span
              aria-hidden
              style={{
                width: 6,
                height: 6,
                borderRadius: muted ? 0 : "50%",
                background: muted ? LIGHT.danger : LIGHT.ink2,
                marginTop: 9,
                opacity: muted ? 0.5 : 1,
              }}
            />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
