import type { CSSProperties, ReactNode } from "react";
import { COLOR, FONT, RADIUS } from "./tokens";

type Tone = "soft" | "mint" | "sky" | "butter";

const TONES: Record<Tone, CSSProperties> = {
  soft: { background: COLOR.white, color: COLOR.ink, boxShadow: "inset 0 0 0 1px rgba(20,21,26,.14)" },
  mint: { background: "#E7F5EC", color: "#157A47" },
  sky: { background: "#E7F0FD", color: "#1C5BC2" },
  butter: { background: "#FBF1D6", color: "#946100" },
};

type Props = {
  children?: ReactNode;
  tone?: Tone;
  style?: CSSProperties;
};

export function Chip({ children, tone = "soft", style }: Props) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 11px",
        borderRadius: RADIUS.pill,
        fontFamily: FONT,
        fontWeight: 600,
        fontSize: 12,
        ...TONES[tone],
        ...style,
      }}
    >
      {children}
    </span>
  );
}
