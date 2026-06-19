import type { CSSProperties, ReactNode } from "react";
import { COLOR, FONT } from "./tokens";

export function Eyebrow({ children, color = COLOR.violet, style }: { children: ReactNode; color?: string; style?: CSSProperties }) {
  return (
    <div
      style={{
        fontFamily: FONT,
        fontWeight: 600,
        fontSize: 13,
        letterSpacing: ".06em",
        textTransform: "uppercase",
        color,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
