import type { CSSProperties, ReactNode } from "react";
import { LIGHT } from "./tokens";

type Props = {
  children: ReactNode;
  id?: string;
  bg?: string;
  padY?: string;
  noBorder?: boolean;
  style?: CSSProperties;
};

export function SectionFrame({ children, id, bg = LIGHT.bg, padY = "120px", noBorder, style }: Props) {
  return (
    <section
      id={id}
      style={{
        position: "relative",
        background: bg,
        padding: `${padY} clamp(20px,4vw,80px)`,
        borderBottom: noBorder ? "none" : `1px solid ${LIGHT.line}`,
        ...style,
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(1280px, 100% - 40px)",
          pointerEvents: "none",
          borderLeft: `1px solid ${LIGHT.line}`,
          borderRight: `1px solid ${LIGHT.line}`,
        }}
      />
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        {children}
      </div>
    </section>
  );
}
