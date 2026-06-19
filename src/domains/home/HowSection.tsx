"use client";

import { Card } from "@/domains/common/Card";
import { Chip } from "@/domains/common/Chip";
import { Eyebrow } from "@/domains/common/Eyebrow";
import { COLOR, CONTAINER_PAD, FONT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

export function HowSection() {
  const { t } = useLanding();
  const h = t.home.how;
  return (
    <section style={{ background: "#fff", padding: `0 ${CONTAINER_PAD} 72px` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Eyebrow style={{ marginBottom: 12 }}>{h.eyebrow}</Eyebrow>
        <h2
          style={{
            fontFamily: FONT,
            fontWeight: 800,
            fontSize: "clamp(2rem,3.6vw,3rem)",
            letterSpacing: "-.03em",
            margin: "0 0 40px",
            color: COLOR.ink,
          }}
        >
          {h.title}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 18 }}>
          {h.columns.map((s) => (
            <Card key={s.tag} variant="flat" style={{ padding: 28 }}>
              <Chip tone="soft" style={{ marginBottom: 22 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: s.color }} />
                {s.tag}
              </Chip>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {s.steps.map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: 14 }}>
                    <span
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 10,
                        background: COLOR.ink,
                        color: "#fff",
                        fontFamily: FONT,
                        fontWeight: 700,
                        fontSize: 14,
                        display: "grid",
                        placeItems: "center",
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: 15, color: COLOR.ink }}>{step.t}</div>
                      <div style={{ fontSize: 14, color: COLOR.muted, lineHeight: 1.5 }}>{step.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
