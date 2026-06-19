import { COLOR, FONT } from "./tokens";

export function Wordmark({ size = 26 }: { size?: number }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: FONT,
        fontWeight: 800,
        fontSize: size,
        letterSpacing: "-0.04em",
        color: COLOR.ink,
        lineHeight: 1,
      }}
    >
      finnoba<span style={{ color: COLOR.violet }}>.</span>
    </span>
  );
}
