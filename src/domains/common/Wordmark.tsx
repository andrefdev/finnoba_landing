import { COLOR, FONT } from "./tokens";

type Props = {
  size?: number;
  tone?: "ink" | "light";
};

// Pure typographic mark — `finnoba.` with the dot in violet. Matches the kit
// (the kit had a separate image mark, but the existing public assets in this
// repo don't include the kit's UUID-named mark, so we render text-only and
// avoid the extra round-trip).
export function Wordmark({ size = 26, tone = "ink" }: Props) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: FONT,
        fontWeight: 800,
        fontSize: size,
        letterSpacing: "-0.04em",
        color: tone === "light" ? COLOR.white : COLOR.ink,
        lineHeight: 1,
      }}
    >
      finnoba<span style={{ color: COLOR.violet }}>.</span>
    </span>
  );
}
