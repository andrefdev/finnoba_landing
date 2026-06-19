import type { ReactNode } from "react";
import { CONTAINER_MAX, CONTAINER_PAD, COLOR, FONT } from "./tokens";
import { Eyebrow } from "./Eyebrow";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
};

// Hero block for inner pages (everything except `/`). Uses the same typography
// rules as the marketing Hero but centered narrower and no preview frame.
export function PageHero({ eyebrow, title, subtitle, children }: Props) {
  return (
    <section style={{ padding: `64px ${CONTAINER_PAD} 32px` }}>
      <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
        {eyebrow && <Eyebrow style={{ marginBottom: 16 }}>{eyebrow}</Eyebrow>}
        <h1
          style={{
            fontFamily: FONT,
            fontWeight: 800,
            fontSize: "clamp(2rem, 4.4vw, 3.25rem)",
            lineHeight: 1.05,
            letterSpacing: "-.035em",
            color: COLOR.ink,
            marginBottom: subtitle ? 18 : 0,
            textWrap: "balance",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontFamily: FONT, fontSize: 18, lineHeight: 1.55, color: COLOR.ink2, maxWidth: 640, margin: "0 auto" }}>
            {subtitle}
          </p>
        )}
        {children && <div style={{ marginTop: 28 }}>{children}</div>}
      </div>
    </section>
  );
}
