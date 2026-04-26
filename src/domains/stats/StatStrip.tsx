"use client";

import type { ReactNode } from "react";
import { COLORS } from "@/domains/common/tokens";
import { Eyebrow } from "@/domains/common/Eyebrow";
import { DotGrid } from "@/domains/common/DotGrid";
import { Counter } from "@/domains/common/Counter";
import { useLanding } from "@/lib/i18n/LandingProvider";

function BigStat({
  label,
  value,
  sub,
  dividerRight,
  accent = COLORS.magenta,
}: {
  label: string;
  value: ReactNode;
  sub: string;
  dividerRight?: boolean;
  accent?: string;
}) {
  return (
    <div
      style={{
        padding: "32px 28px",
        borderRight: dividerRight ? "1px solid rgba(255,255,255,0.06)" : "none",
        position: "relative",
      }}
    >
      <div
        style={{
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: 11,
          letterSpacing: ".14em",
          textTransform: "uppercase",
          color: COLORS.fgDark3,
          marginBottom: 12,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "Poppins",
          fontWeight: 700,
          fontSize: "clamp(2.25rem, 3.4vw, 3rem)",
          lineHeight: 1,
          letterSpacing: "-0.025em",
          color: "#fff",
          background: `linear-gradient(135deg, #fff 0%, ${accent} 130%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {value}
      </div>
      <div
        style={{
          marginTop: 10,
          fontSize: 13,
          fontWeight: 500,
          color: COLORS.fgDark3,
          fontFamily: "Poppins",
        }}
      >
        {sub}
      </div>
    </div>
  );
}

export function StatStrip() {
  const { t } = useLanding();
  return (
    <section
      style={{
        background: "#03001A",
        color: "#fff",
        padding: "88px clamp(20px,4vw,80px)",
        position: "relative",
        borderBottom: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <DotGrid opacity={0.025} size={40} />
      <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto" }}>
        <Eyebrow>{t.stats.title}</Eyebrow>
        <p
          style={{
            fontFamily: "Poppins",
            fontSize: 16,
            color: COLORS.fgDark3,
            margin: "12px 0 40px",
            maxWidth: 520,
          }}
        >
          {t.stats.sub}
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: 0,
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12,
            overflow: "hidden",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <BigStat label={t.stats.tvl} value={<Counter value={1.5} decimals={1} prefix="$" suffix="M" />} sub={t.stats.tvlSub} dividerRight />
          <BigStat label={t.stats.vol} value={<Counter value={500} prefix="$" suffix="K" />} sub={t.stats.volSub} dividerRight />
          <BigStat label={t.stats.def} value={<Counter value={5} suffix="%" />} sub={t.stats.defSub} dividerRight accent={COLORS.success} />
          <BigStat label={t.stats.time} value={<Counter value={24} suffix="h" />} sub={t.stats.timeSub} accent={COLORS.magenta} />
        </div>
      </div>
    </section>
  );
}
