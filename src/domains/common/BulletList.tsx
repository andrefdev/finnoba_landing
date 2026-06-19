import { COLOR, FONT } from "./tokens";

type Props = {
  items: readonly string[];
  bulletColor?: string;
};

export function BulletList({ items, bulletColor = COLOR.violet }: Props) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14 }}>
      {items.map((it, i) => (
        <li
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "18px 1fr",
            gap: 12,
            fontFamily: FONT,
            fontSize: 15,
            lineHeight: 1.55,
            color: COLOR.ink2,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: bulletColor, marginTop: 9 }} />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
