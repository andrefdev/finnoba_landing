import { COLOR, FONT } from "./tokens";

type Props = {
  rows: ReadonlyArray<ReadonlyArray<string>>;
  header?: ReadonlyArray<string>;
};

// Key/value list rendered as a card-with-divider table. Used by the
// inner pages (terms, metrics, portfolio, etc.).
export function DataTable({ rows, header }: Props) {
  const cols = (header && header.length) || (rows[0]?.length ?? 2);
  return (
    <div
      style={{
        background: "#fff",
        border: `1px solid ${COLOR.line}`,
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      {header && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            padding: "14px 22px",
            background: COLOR.surface,
            borderBottom: `1px solid ${COLOR.line}`,
            fontFamily: FONT,
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: ".06em",
            textTransform: "uppercase",
            color: COLOR.muted,
            gap: 16,
          }}
        >
          {header.map((h) => (
            <span key={h}>{h}</span>
          ))}
        </div>
      )}
      {rows.map((row, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: 16,
            padding: "16px 22px",
            borderTop: i === 0 ? "none" : `1px solid ${COLOR.line}`,
            fontFamily: FONT,
            fontSize: 14.5,
            alignItems: "center",
          }}
        >
          {row.map((cell, j) => (
            <span
              key={j}
              style={{
                color: j === 0 ? COLOR.ink2 : COLOR.ink,
                fontWeight: j === 0 ? 500 : 700,
                fontVariantNumeric: j === 0 ? undefined : "tabular-nums",
              }}
            >
              {cell}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
