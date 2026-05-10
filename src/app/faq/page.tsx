"use client";

import { useState } from "react";
import { CtaBlock } from "@/domains/common/CtaBlock";
import { PageHero } from "@/domains/common/PageHero";
import { Section, SectionEyebrow, SectionTitle } from "@/domains/common/Section";
import { FONT_DISPLAY, FONT_MONO, FONT_UI, LIGHT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

const RESERVE_HREF = "/inversores#reservar";

export default function FaqPage() {
  const { t } = useLanding();
  const f = t.faq;

  return (
    <>
      <PageHero h1={f.h1} sub={f.sub} />

      {f.groups.map((group, gi) => (
        <Section key={gi}>
          <SectionEyebrow>0{gi + 1}</SectionEyebrow>
          <SectionTitle>{group.title}</SectionTitle>

          <div style={{ marginTop: 40, borderTop: `1px solid ${LIGHT.line}` }}>
            {group.items.map((item, idx) => (
              <FaqItem key={idx} q={item.q} a={item.a} index={idx} />
            ))}
          </div>
        </Section>
      ))}

      <CtaBlock title={f.cta} primary={f.cta} primaryHref={RESERVE_HREF} />
    </>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${LIGHT.line}` }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{
          all: "unset",
          width: "100%",
          cursor: "pointer",
          display: "grid",
          gridTemplateColumns: "44px 1fr 24px",
          alignItems: "center",
          gap: 16,
          padding: "22px 0",
        }}
      >
        <span
          style={{
            fontFamily: FONT_MONO,
            fontSize: 12,
            letterSpacing: "0.10em",
            color: LIGHT.ink3,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: 400,
            fontSize: "clamp(1rem, 1.6vw, 1.125rem)",
            letterSpacing: "-0.015em",
            color: LIGHT.ink,
            lineHeight: 1.4,
          }}
        >
          {q}
        </span>
        <span
          aria-hidden
          style={{
            display: "inline-block",
            width: 14,
            height: 14,
            position: "relative",
            color: LIGHT.ink2,
          }}
        >
          <span
            style={{
              position: "absolute",
              top: 6,
              left: 0,
              width: 14,
              height: 1.5,
              background: "currentColor",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: 0,
              left: 6,
              width: 1.5,
              height: 14,
              background: "currentColor",
              transform: open ? "scaleY(0)" : "scaleY(1)",
              transition: "transform 220ms ease",
            }}
          />
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? 600 : 0,
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 320ms cubic-bezier(.22,1,.36,1), opacity 220ms ease",
        }}
      >
        <p
          style={{
            fontFamily: FONT_UI,
            fontSize: 15.5,
            lineHeight: 1.65,
            color: LIGHT.ink2,
            margin: "0 0 22px 60px",
            maxWidth: 760,
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}
