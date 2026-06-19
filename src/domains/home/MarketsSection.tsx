"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/domains/common/Button";
import { Eyebrow } from "@/domains/common/Eyebrow";
import { COLOR, CONTAINER_PAD, FONT } from "@/domains/common/tokens";
import { LOANS } from "@/domains/loans/data";
import { LoanCard } from "@/domains/loans/LoanCard";
import { useLanding } from "@/lib/i18n/LandingProvider";

export function MarketsSection() {
  const { t } = useLanding();
  const m = t.home.markets;
  const loans = LOANS.slice(0, 6);
  return (
    <section
      style={{
        padding: `64px ${CONTAINER_PAD}`,
        background: "#fff",
        borderRadius: "40px 40px 0 0",
        marginTop: 24,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 20, flexWrap: "wrap", marginBottom: 40 }}>
          <div>
            <Eyebrow style={{ marginBottom: 12 }}>{m.eyebrow}</Eyebrow>
            <h2
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: "clamp(2rem,3.6vw,3rem)",
                letterSpacing: "-.03em",
                margin: "0 0 10px",
                color: COLOR.ink,
              }}
            >
              {m.title}
            </h2>
            <p style={{ fontSize: 18, color: COLOR.muted, maxWidth: 580, margin: 0 }}>{m.sub}</p>
          </div>
          <Link href="/investors">
            <Button variant="soft" size="md" iconRight={<ArrowRight size={16} />}>
              {m.browse}
            </Button>
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 16 }}>
          {loans.map((l) => (
            <LoanCard
              key={l.business}
              {...l}
              yieldLabel={m.yieldLabel}
              fundedLabel={m.fundedLabel}
              termSuffix={m.termSuffix}
              gradeLabel={m.gradeLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
