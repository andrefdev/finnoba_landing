"use client";

import { Link } from "@/lib/i18n/Link";
import { Button } from "@/domains/common/Button";
import { COLOR, CONTAINER_PAD, FONT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

export function CtaSection() {
  const { t } = useLanding();
  const c = t.home.cta;
  return (
    <section style={{ padding: `0 ${CONTAINER_PAD} 64px`, background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            borderRadius: 32,
            padding: "clamp(40px,6vw,72px)",
            background: COLOR.ink,
            color: "#fff",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 120%, rgba(109,84,232,.45), transparent 60%)" }} />
          <div style={{ position: "relative" }}>
            <h2
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: "clamp(2.25rem,4vw,3.5rem)",
                letterSpacing: "-.03em",
                margin: "0 0 18px",
              }}
            >
              {c.title}
            </h2>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,.7)", margin: "0 0 30px", maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
              {c.sub}
            </p>
            <Link href="/investors">
              <Button variant="on-dark" size="lg">{c.primary}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
