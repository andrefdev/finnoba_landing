"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
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

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${COLOR.line}`, padding: "20px 0" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          background: "transparent",
          border: 0,
          padding: 0,
          cursor: "pointer",
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          fontFamily: FONT,
          fontWeight: 700,
          fontSize: 17,
          color: COLOR.ink,
        }}
        aria-expanded={open}
      >
        <span>{q}</span>
        <ChevronDown
          size={20}
          style={{ flexShrink: 0, transition: "transform 200ms", transform: open ? "rotate(180deg)" : "none", color: COLOR.muted }}
        />
      </button>
      {open && (
        <p style={{ marginTop: 14, fontFamily: FONT, fontSize: 15, lineHeight: 1.65, color: COLOR.ink2, maxWidth: 760 }}>
          {a}
        </p>
      )}
    </div>
  );
}

export default function FaqPage() {
  const { t } = useLanding();
  const f = t.faq;
  return (
    <>
      <PageHero title={f.h1} subtitle={f.sub} />

      <Section background="#fff" topRound paddingY="48px">
        {f.groups.map((g, gi) => (
          <div key={g.title} style={{ marginTop: gi === 0 ? 0 : 56 }}>
            <Eyebrow style={{ marginBottom: 12 }}>{String(gi + 1).padStart(2, "0")}</Eyebrow>
            <h2 style={h2Style}>{g.title}</h2>
            <div>
              {g.items.map((it) => <FaqItem key={it.q} q={it.q} a={it.a} />)}
            </div>
          </div>
        ))}
      </Section>

      <PageCta title={f.cta} primary={f.cta} primaryHref="/#reserve" />
    </>
  );
}
