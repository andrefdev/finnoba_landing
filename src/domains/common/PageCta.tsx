"use client";

import Link from "next/link";
import { Button } from "./Button";
import { COLOR, CONTAINER_MAX, CONTAINER_PAD, FONT } from "./tokens";

type Props = {
  title: string;
  primary: string;
  primaryHref: string;
  sub?: string;
};

// Dark callout used at the bottom of every inner page. Mirrors the home
// CtaSection but takes its copy as props so we can reuse it across routes.
export function PageCta({ title, primary, primaryHref, sub }: Props) {
  return (
    <section style={{ padding: `48px ${CONTAINER_PAD} 64px`, background: "#fff" }}>
      <div style={{ maxWidth: CONTAINER_MAX, margin: "0 auto" }}>
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
                fontSize: "clamp(1.75rem,3.4vw,2.75rem)",
                letterSpacing: "-.03em",
                margin: "0 0 14px",
              }}
            >
              {title}
            </h2>
            {sub && <p style={{ fontSize: 17, color: "rgba(255,255,255,.7)", margin: "0 0 28px", maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>{sub}</p>}
            <Link href={primaryHref}><Button variant="on-dark" size="lg">{primary}</Button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
