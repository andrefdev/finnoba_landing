import type { CSSProperties, ReactNode } from "react";
import { FONT_DISPLAY, FONT_MONO, FONT_UI, LIGHT } from "./tokens";

export function Section({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <section
      style={{
        padding: "80px clamp(20px,4vw,80px)",
        borderTop: `1px solid ${LIGHT.line}`,
        background: LIGHT.bg,
        ...style,
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 20px" }}>{children}</div>
    </section>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: FONT_MONO,
        fontSize: 11,
        letterSpacing: "0.10em",
        textTransform: "uppercase",
        color: LIGHT.ink3,
        marginBottom: 20,
      }}
    >
      — {children}
    </div>
  );
}

export function SectionTitle({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <h2
      style={{
        fontFamily: FONT_DISPLAY,
        fontWeight: 300,
        fontSize: "clamp(1.875rem, 3.6vw, 3rem)",
        lineHeight: 1.05,
        letterSpacing: "-0.035em",
        color: LIGHT.ink,
        margin: 0,
        textWrap: "balance",
        maxWidth: 880,
        ...style,
      }}
    >
      {children}
    </h2>
  );
}

export function SectionLead({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        fontFamily: FONT_UI,
        fontSize: 17,
        lineHeight: 1.6,
        color: LIGHT.ink2,
        margin: "20px 0 0",
        maxWidth: 720,
      }}
    >
      {children}
    </p>
  );
}
