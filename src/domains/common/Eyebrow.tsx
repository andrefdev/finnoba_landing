import type { CSSProperties, ReactNode } from "react";
import { COLORS } from "./tokens";

export function Eyebrow({
  children,
  color = COLORS.magenta,
  style,
}: {
  children: ReactNode;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: 12,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
