import { Chip } from "../common/Chip";
import type { GradeKey } from "./data";

const TONE: Record<GradeKey, "mint" | "sky" | "butter"> = { A: "mint", B: "sky", C: "butter" };

export function GradeChip({ grade, label = "Grade" }: { grade: GradeKey; label?: string }) {
  return <Chip tone={TONE[grade]}>{label} {grade}</Chip>;
}
