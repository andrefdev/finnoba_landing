import { COLOR } from "./tokens";

type Props = {
  data: number[];
  up?: boolean;
  color?: string;
  width?: number;
  height?: number;
};

// Stroked area sparkline. `up` flips the gradient + stroke between green and red.
export function Sparkline({ data, up = true, color, width = 320, height = 56 }: Props) {
  if (data.length < 2) return null;
  const stroke = color ?? (up ? COLOR.green : COLOR.red);
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const stepX = width / (data.length - 1);
  const points = data.map((v, i) => `${i * stepX},${height - ((v - min) / range) * (height - 4) - 2}`);
  const linePath = `M${points.join("L")}`;
  const areaPath = `${linePath} L${width},${height} L0,${height} Z`;
  const gradId = `spark-grad-${stroke.replace("#", "")}`;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.18" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${gradId})`} />
      <path d={linePath} fill="none" stroke={stroke} strokeWidth={1.8} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
