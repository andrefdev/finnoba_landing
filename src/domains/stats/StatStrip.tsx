"use client";

import type { ReactNode } from "react";
import { Counter } from "@/domains/common/Counter";
import { SectionFrame } from "@/domains/common/SectionFrame";
import { SectionHeader } from "@/domains/common/SectionHeader";
import { FONT_DISPLAY, FONT_UI, LIGHT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

function BigStat({ label, value, sub }: { label: string; value: ReactNode; sub: string }) {
  return (
    <div
      style={{
        padding: "36px 28px",
        borderRight: `1px solid ${LIGHT.line}`,
        borderBottom: `1px solid ${LIGHT.line}`,
        fontFamily: FONT_UI,
        background: "#fff",
      }}
    >
      <div
        style={{
          fontWeight: 500,
          fontSize: 11,
          letterSpacing: "0.10em",
          textTransform: "uppercase",
          color: LIGHT.ink3,
          marginBottom: 18,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: FONT_DISPLAY,
          fontWeight: 400,
          fontSize: "clamp(2.5rem, 3.6vw, 3.25rem)",
          lineHeight: 1,
          letterSpacing: "-0.025em",
          color: LIGHT.ink,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </div>
      <div style={{ marginTop: 12, fontSize: 13, fontWeight: 400, color: LIGHT.ink3 }}>{sub}</div>
    </div>
  );
}

export function StatStrip() {
  const { t } = useLanding();
  return (
    <SectionFrame bg={LIGHT.bg} padY="120px">
      <SectionHeader eyebrow={t.stats.title} title={t.stats.title} lead={t.stats.sub} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 0,
          borderTop: `1px solid ${LIGHT.line}`,
          borderLeft: `1px solid ${LIGHT.line}`,
          background: "#fff",
        }}
      >
        <BigStat
          label={t.stats.tvl}
          value={<Counter value={1.5} decimals={1} prefix="$" suffix="M" />}
          sub={t.stats.tvlSub}
        />
        <BigStat
          label={t.stats.vol}
          value={<Counter value={500} prefix="$" suffix="K" />}
          sub={t.stats.volSub}
        />
        <BigStat
          label={t.stats.def}
          value={<Counter value={5} suffix="%" />}
          sub={t.stats.defSub}
        />
        <BigStat
          label={t.stats.time}
          value={<Counter value={24} suffix="h" />}
          sub={t.stats.timeSub}
        />
      </div>
    </SectionFrame>
  );
}
