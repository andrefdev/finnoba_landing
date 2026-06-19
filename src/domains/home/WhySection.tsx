"use client";

import { Card } from "@/domains/common/Card";
import { Eyebrow } from "@/domains/common/Eyebrow";
import { COLOR, CONTAINER_PAD, FONT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

const TINTS = { mint: "#FBE0FA", peach: "#F1E1FC", sky: "#E4E5FB", lilac: "#EDE8FC" } as Record<string, string>;
const FGS = { mint: "#B02BC9", peach: "#8B3DF0", sky: "#4B40D6", lilac: "#6D54E8" } as Record<string, string>;

export function WhySection() {
  const { t } = useLanding();
  const w = t.home.why;
  return (
    <section style={{ background: "#fff", padding: `24px ${CONTAINER_PAD} 80px` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Eyebrow style={{ marginBottom: 12 }}>{w.eyebrow}</Eyebrow>
        <h2
          style={{
            fontFamily: FONT,
            fontWeight: 800,
            fontSize: "clamp(2rem,3.6vw,3rem)",
            letterSpacing: "-.03em",
            margin: "0 0 40px",
            color: COLOR.ink,
            maxWidth: 760,
          }}
        >
          {w.title}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
          {w.items.map((it, i) => (
            <Card key={i} style={{ background: TINTS[it.tint], borderRadius: 24 }}>
              <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: 13, color: FGS[it.tint], marginBottom: 12 }}>
                {it.eyebrow}
              </div>
              <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: 20, lineHeight: 1.2, color: COLOR.ink, margin: "0 0 10px", letterSpacing: "-.015em" }}>
                {it.title}
              </h3>
              <p style={{ color: COLOR.ink2, fontSize: 14, lineHeight: 1.55, margin: 0 }}>{it.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
