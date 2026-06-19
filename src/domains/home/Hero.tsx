"use client";

import { Link } from "@/lib/i18n/Link";
import { Button } from "@/domains/common/Button";
import { COLOR, CONTAINER_PAD, FONT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";
import { DashboardPreview } from "./DashboardPreview";

export function Hero() {
  const { t } = useLanding();
  const h = t.home.hero;
  return (
    <section id="reserve" style={{ padding: `44px ${CONTAINER_PAD} 0`, position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
        <h1
          style={{
            fontFamily: FONT,
            fontWeight: 800,
            fontSize: "clamp(2.25rem,4.8vw,3.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-.035em",
            margin: "0 auto 20px",
            color: COLOR.ink,
            textWrap: "balance",
            maxWidth: 820,
          }}
        >
          {h.h1}
        </h1>
        <p style={{ fontFamily: FONT, fontSize: 17, lineHeight: 1.55, color: COLOR.ink2, maxWidth: 600, margin: "0 auto 28px" }}>
          {h.sub}
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/investors"><Button variant="ink" size="lg">{h.primary}</Button></Link>
          <Link href="/how-it-works"><Button variant="soft" size="lg">{h.secondary}</Button></Link>
        </div>
        <div
          style={{
            marginTop: 24,
            display: "flex",
            gap: 16,
            alignItems: "center",
            justifyContent: "center",
            color: COLOR.muted,
            fontSize: 13,
            fontWeight: 500,
            flexWrap: "wrap",
          }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: COLOR.green }} />
            {h.badges[0]}
          </span>
          <span>·</span>
          <span>{h.badges[1]}</span>
          <span>·</span>
          <span>{h.badges[2]}</span>
        </div>
      </div>
      <DashboardPreview />
    </section>
  );
}
