import { Eyebrow } from "./Eyebrow";
import { FONT_DISPLAY, FONT_UI, LIGHT } from "./tokens";

type Props = { eyebrow: string; title: string; lead?: string };

export function SectionHeader({ eyebrow, title, lead }: Props) {
  return (
    <div
      className="section-header"
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
        gap: 56,
        alignItems: "end",
        paddingBottom: 48,
        borderBottom: `1px solid ${LIGHT.line}`,
        marginBottom: 56,
      }}
    >
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: 500,
            fontSize: "clamp(2.25rem, 4.2vw, 3.5rem)",
            lineHeight: 1.04,
            letterSpacing: "-0.035em",
            margin: "20px 0 0",
            color: LIGHT.ink,
            textWrap: "balance",
          }}
        >
          {title}
        </h2>
      </div>
      {lead && (
        <p
          style={{
            fontFamily: FONT_UI,
            fontSize: 17,
            lineHeight: 1.55,
            color: LIGHT.ink2,
            margin: 0,
            maxWidth: 520,
          }}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
