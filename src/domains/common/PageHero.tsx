import type { CSSProperties, ReactNode } from "react";
import { FONT_DISPLAY, FONT_UI, LIGHT } from "./tokens";

export function PageHero({
  h1,
  sub,
  children,
  style,
}: {
  h1: ReactNode;
  sub?: ReactNode;
  children?: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <section
      style={{
        position: "relative",
        background: LIGHT.bg,
        color: LIGHT.ink,
        padding: "180px clamp(20px,4vw,80px) 80px",
        overflow: "hidden",
        ...style,
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 20px" }}>
        <h1
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: 300,
            fontSize: "clamp(2.5rem, 6vw, 5.25rem)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            margin: 0,
            color: LIGHT.ink,
            textWrap: "balance",
            maxWidth: 980,
          }}
        >
          {h1}
        </h1>
        {sub ? (
          <p
            style={{
              marginTop: 28,
              fontFamily: FONT_UI,
              fontSize: 18,
              lineHeight: 1.55,
              color: LIGHT.ink2,
              maxWidth: 720,
            }}
          >
            {sub}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
