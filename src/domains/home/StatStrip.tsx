"use client";

import { Card } from "@/domains/common/Card";
import { Stat } from "@/domains/common/Stat";
import { CONTAINER_PAD } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

export function StatStrip() {
  const { t } = useLanding();
  return (
    <section style={{ padding: `0 ${CONTAINER_PAD} 24px` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Card
          variant="glass"
          style={{
            borderRadius: 24,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
            gap: 28,
            padding: "26px 28px",
          }}
        >
          {t.home.stats.map((s) => {
            const subColor = "subColor" in s ? (s as { subColor: string }).subColor : undefined;
            return <Stat key={s.label} label={s.label} value={s.value} sub={s.sub} subColor={subColor} />;
          })}
        </Card>
      </div>
    </section>
  );
}
