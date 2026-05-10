import { FONT_MONO, FONT_UI, LIGHT } from "./tokens";

export function DataTable({
  rows,
  head,
}: {
  rows: ReadonlyArray<readonly string[]>;
  head?: ReadonlyArray<string>;
}) {
  const cols = head ? head.length : 2;
  return (
    <div
      style={{
        border: `1px solid ${LIGHT.line}`,
        borderRadius: 4,
        overflow: "hidden",
        background: "#fff",
      }}
    >
      {head ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: cols === 2 ? "1.4fr 1fr" : `1.4fr repeat(${cols - 1}, 1fr)`,
            background: LIGHT.bgCard,
            borderBottom: `1px solid ${LIGHT.line}`,
            padding: "14px 24px",
            gap: 16,
            fontFamily: FONT_MONO,
            fontSize: 11,
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            color: LIGHT.ink3,
          }}
        >
          {head.map((h, i) => (
            <div key={i}>{h}</div>
          ))}
        </div>
      ) : null}
      {rows.map((r, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: cols === 2 ? "1.4fr 1fr" : `1.4fr repeat(${cols - 1}, 1fr)`,
            padding: "16px 24px",
            gap: 16,
            borderBottom: i < rows.length - 1 ? `1px solid ${LIGHT.line}` : "none",
            alignItems: "center",
          }}
        >
          {r.map((cell, j) => (
            <div
              key={j}
              style={{
                fontFamily: j === 0 ? FONT_UI : FONT_MONO,
                fontSize: j === 0 ? 14.5 : 14,
                color: j === 0 ? LIGHT.ink2 : LIGHT.ink,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
