/**
 * Only the values JavaScript genuinely needs at build time — SVG strokes and
 * bullet colours that are passed as props. Everything used purely for styling
 * lives as a CSS custom property in `src/styles/global.css`, so each value has
 * exactly one source of truth instead of a TS copy that can drift.
 */
export const COLOR = {
  green: "#1FB36B",
  red: "#E5484D",
  violet: "#6D54E8",
  muted: "#71747E",
} as const;
