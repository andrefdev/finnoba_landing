import type { CSSProperties, ReactNode } from "react";
import { FONT_UI, LIGHT } from "./tokens";

export function Eyebrow({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <div
      style={{
        fontFamily: FONT_UI,
        fontWeight: 300,
        fontSize: 12,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: LIGHT.ink3,
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        ...style,
      }}
    >
      <span style={{ width: 18, height: 1, background: LIGHT.lineStrong }} />
      {children}
    </div>
  );
}
