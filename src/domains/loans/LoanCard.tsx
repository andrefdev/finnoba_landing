import { Card } from "../common/Card";
import { ProgressBar } from "../common/ProgressBar";
import { Sparkline } from "../common/Sparkline";
import { COLOR, FONT } from "../common/tokens";
import { CATEGORY, type Loan } from "./data";
import { CategoryBadge } from "./CategoryBadge";
import { GradeChip } from "./GradeChip";

type Props = Loan & {
  onClick?: () => void;
  yieldLabel: string;
  fundedLabel: string;
  termSuffix: string;
  gradeLabel: string;
};

export function LoanCard({
  business, category, city, amount, term, yld, grade, funded, trend,
  onClick, yieldLabel, fundedLabel, termSuffix, gradeLabel,
}: Props) {
  const c = CATEGORY[category];
  return (
    <Card
      variant="flat"
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default", display: "flex", flexDirection: "column", gap: 14, overflow: "hidden" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <CategoryBadge category={category} size={52} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: FONT, fontWeight: 800, fontSize: 17, letterSpacing: "-.02em", color: COLOR.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {business}
          </div>
          <div style={{ fontSize: 13, color: COLOR.muted, fontWeight: 500 }}>
            {c.label} · {city}
          </div>
        </div>
        <GradeChip grade={grade} label={gradeLabel} />
      </div>

      <div style={{ margin: "0 -22px" }}>
        <Sparkline data={trend} up />
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: COLOR.muted }}>{yieldLabel}</div>
          <div style={{ fontFamily: FONT, fontWeight: 800, fontSize: 26, letterSpacing: "-.02em", color: COLOR.ink, fontVariantNumeric: "tabular-nums" }}>
            {yld}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: 15, color: COLOR.ink, fontVariantNumeric: "tabular-nums" }}>
            ${amount.toLocaleString()}
          </div>
          <div style={{ fontSize: 12, color: COLOR.muted, fontWeight: 500 }}>
            {term} {termSuffix}
          </div>
        </div>
      </div>

      <div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, fontWeight: 600, color: COLOR.muted, marginBottom: 6 }}>
          <span>{funded}% {fundedLabel}</span>
          <span>${Math.round((amount * funded) / 100).toLocaleString()} / ${amount.toLocaleString()}</span>
        </div>
        <ProgressBar value={funded} color={c.color} height={6} />
      </div>
    </Card>
  );
}
