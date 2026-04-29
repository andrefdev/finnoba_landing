export const LIGHT = {
  bg: "#FFFFFF",          // pure white
  bgAlt: "#FAFBFC",
  bgSoft: "#ECEEF2",      // cool light gray
  bgCard: "#F4F5F7",      // very light cool gray for cards
  bgDark: "#0B0717",      // very dark violet-black
  bgDeep: "#16093A",
  ink: "#0A0A0A",
  ink2: "#4B5563",        // cool gray
  ink3: "#6B7280",
  ink4: "#9CA3AF",
  inkOnDark: "#FFFFFF",
  inkOnDark2: "#C9C2F2",
  inkOnDark3: "#8A85B5",
  line: "#E5E7EB",
  lineStrong: "#D1D5DB",
  lineDark: "rgba(255,255,255,0.10)",
  navy: "#110458",
  violet: "#7904EB",
  violetDeep: "#4B02A8",
  magenta: "#FE76FF",
  accentSoft: "#EFEDFB",
  success: "#0E7A52",
  warning: "#A86A00",
  danger: "#A6243C",
} as const;

export const GRADIENT = {
  brand: "linear-gradient(120deg, #312E81 0%, #4B02A8 35%, #7904EB 70%, #A855F7 100%)",
  brandSoft: "linear-gradient(135deg, rgba(75,2,168,0.10) 0%, rgba(168,85,247,0.08) 100%)",
  brandText:
    "linear-gradient(120deg, #1E1B4B 0%, #312E81 18%, #4B02A8 38%, #7904EB 60%, #A855F7 80%, #C9C2F2 100%)",
  brandDark: "linear-gradient(135deg, #0B0717 0%, #1E1B4B 30%, #312E81 60%, #4B02A8 100%)",
  ctaDark: "linear-gradient(135deg, #0B0717 0%, #1E1B4B 35%, #312E81 65%, #4B02A8 100%)",
} as const;

export const FONT_DISPLAY = "var(--font-geist), system-ui, -apple-system, 'Segoe UI', sans-serif";
export const FONT_UI = "var(--font-geist), system-ui, -apple-system, 'Segoe UI', sans-serif";
export const FONT_MONO = "var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, monospace";

export const NAV_HEIGHT = 80;
export const HERO_TOP_PAD = 128;
