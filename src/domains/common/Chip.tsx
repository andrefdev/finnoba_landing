import type { CSSProperties, ReactNode } from "react";
import { COLOR, FONT, RADIUS } from "./tokens";

type Tone = "soft" | "ink" | "peach" | "sky" | "mint" | "lilac" | "rose" | "butter" | "muted";

const TONES: Record<Tone, CSSProperties> = {
  soft: { background: COLOR.white, color: COLOR.ink, boxShadow: "inset 0 0 0 1px rgba(20,21,26,.14)" },
  ink: { background: COLOR.ink, color: COLOR.white },
  peach: { background: "#FCEBDD", color: "#C2620F" },
  sky: { background: "#E7F0FD", color: "#1C5BC2" },
  mint: { background: "#E7F5EC", color: "#157A47" },
  lilac: { background: "#EEEAFC", color: "#5B43D6" },
  rose: { background: "#FCE7EB", color: "#C0353B" },
  butter: { background: "#FBF1D6", color: "#946100" },
  muted: { background: "#F3F4F7", color: COLOR.muted },
};

type Props = {
  children?: ReactNode;
  tone?: Tone;
  dot?: boolean;
  icon?: ReactNode;
  style?: CSSProperties;
};

export function Chip({ children, tone = "soft", dot, icon, style }: Props) {
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
      {dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor" }} />}
      {icon}
      {children}
    </span>
  );
}
