import type { CSSProperties, ReactNode } from "react";
import { CrossMarks } from "./CrossMarks";
import { LIGHT } from "./tokens";

export function BoxedSection({
  children,
  tag,
  style,
  innerStyle,
  noTopBorder,
  noBottomBorder,
  showCorners = true,
}: {
  children: ReactNode;
  tag?: string;
  style?: CSSProperties;
  innerStyle?: CSSProperties;
  noTopBorder?: boolean;
  noBottomBorder?: boolean;
  showCorners?: boolean;
}) {
  return (
    <section
      style={{
        background: LIGHT.bg,
        padding: "0 clamp(20px,4vw,80px)",
        ...style,
      }}
    >
      <div
        className="frame"
        style={{
          borderLeft: `1px solid ${LIGHT.line}`,
          borderRight: `1px solid ${LIGHT.line}`,
          borderTop: noTopBorder ? "none" : `1px solid ${LIGHT.line}`,
          borderBottom: noBottomBorder ? "none" : `1px solid ${LIGHT.line}`,
          padding: "clamp(56px,8vw,100px) clamp(24px,4vw,64px)",
          position: "relative",
          ...innerStyle,
        }}
      >
        {showCorners ? <CrossMarks /> : null}
        {tag ? <span className="frame-tag">— {tag}</span> : null}
        {children}
      </div>
    </section>
  );
}
