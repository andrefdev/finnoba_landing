// Finnoba "Aurora" design tokens. Mirrors the CSS variables in globals.css so
// inline-styled components can reach the same values without re-declaring them.

export const FONT = "var(--font-jakarta), system-ui, -apple-system, 'Segoe UI', sans-serif";

export const COLOR = {
  ink: "#14151A",
  ink2: "#3C3E47",
  muted: "#71747E",
  faint: "#A7AAB3",
  line: "rgba(20, 21, 26, 0.08)",
  lineStrong: "rgba(20, 21, 26, 0.14)",
  white: "#FFFFFF",
  card: "#FFFFFF",
  surface: "#F3F4F7",
  violet: "#6D54E8",
  violetInk: "#5B43D6",
  orange: "#FB7B1E",
  blue: "#2D7FF9",
  green: "#1FB36B",
  red: "#E5484D",
} as const;

export const TINT = {
  peach: { bg: "#FCEBDD", fg: "#C2620F" },
  sky: { bg: "#E7F0FD", fg: "#1C5BC2" },
  mint: { bg: "#E7F5EC", fg: "#157A47" },
  lilac: { bg: "#EEEAFC", fg: "#5B43D6" },
  butter: { bg: "#FBF1D6", fg: "#946100" },
  rose: { bg: "#FCE7EB", fg: "#C0353B" },
} as const;

export const RADIUS = {
  sm: 12,
  md: 14,
  lg: 20,
  xl: 24,
  xxl: 32,
  pill: 9999,
} as const;

export const EASE = "cubic-bezier(.22,1,.36,1)";

export const CONTAINER_MAX = 1200;
export const CONTAINER_PAD = "clamp(20px, 4vw, 64px)";
