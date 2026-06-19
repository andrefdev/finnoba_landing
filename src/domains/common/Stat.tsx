import { COLOR, FONT } from "./tokens";

type Props = {
  label: string;
  value: string;
  sub?: string;
  subColor?: string;
  dark?: boolean;
};

export function Stat({ label, value, sub, subColor, dark }: Props) {
  return (
    <div>
      <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: 13, color: dark ? COLOR.faint : COLOR.muted, marginBottom: 8 }}>
        {label}
      </div>
      <div
        style={{
          fontFamily: FONT,
          fontWeight: 800,
          fontSize: 34,
          lineHeight: 1.02,
          letterSpacing: "-0.02em",
          fontVariantNumeric: "tabular-nums",
          color: dark ? COLOR.white : COLOR.ink,
        }}
      >
        {value}
      </div>
      {sub && (
        <div style={{ marginTop: 6, fontSize: 13, fontWeight: 700, color: subColor || (dark ? COLOR.faint : COLOR.muted) }}>
          {sub}
        </div>
      )}
    </div>
  );
}
