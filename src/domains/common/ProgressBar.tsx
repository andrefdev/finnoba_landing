import { COLOR } from "./tokens";

type Props = {
  value: number;
  color?: string;
  track?: string;
  height?: number;
};

export function ProgressBar({ value, color = COLOR.violet, track = "#EEF0F3", height = 8 }: Props) {
  return (
    <div style={{ width: "100%", height, background: track, borderRadius: 9999, overflow: "hidden" }}>
      <div style={{ width: `${Math.min(100, Math.max(0, value))}%`, height: "100%", background: color, borderRadius: 9999 }} />
    </div>
  );
}
