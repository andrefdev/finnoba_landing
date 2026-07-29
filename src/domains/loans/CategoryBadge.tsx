import { Coffee, Grape, Fish, Laptop, Sprout, Leaf, Shirt, Wheat, type LucideIcon } from "lucide-react";
import { CATEGORY, type CategoryKey } from "./data";

const ICONS: Record<string, LucideIcon> = {
  coffee: Coffee, grape: Grape, fish: Fish, laptop: Laptop,
  sprout: Sprout, leaf: Leaf, shirt: Shirt, wheat: Wheat,
};

export function CategoryBadge({ category, size = 52 }: { category: CategoryKey; size?: number }) {
  const c = CATEGORY[category];
  const Icon = ICONS[c.icon];
  return (
    <div style={{ position: "relative", width: size, height: size, display: "grid", placeItems: "center", flexShrink: 0 }}>
      <div
        style={{
          position: "absolute",
          width: size * 1.5,
          height: size * 1.5,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${c.color}55 0%, ${c.color}00 68%)`,
          filter: "blur(4px)",
        }}
      />
      <div
        style={{
          position: "relative",
          width: size,
          height: size,
          borderRadius: "50%",
          background: `linear-gradient(150deg, ${c.color}, ${c.color}cc)`,
          boxShadow: `0 8px 20px ${c.color}40, inset 0 1px 0 rgba(255,255,255,.35)`,
          display: "grid",
          placeItems: "center",
          color: "#fff",
        }}
      >
        <Icon size={size * 0.42} strokeWidth={2.2} />
      </div>
    </div>
  );
}

export function CategoryAvatar({ category, size = 32 }: { category: CategoryKey; size?: number }) {
  const c = CATEGORY[category];
  const Icon = ICONS[c.icon];
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `${c.color}1A`,
        color: c.color,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Icon size={size * 0.5} strokeWidth={2.2} />
    </span>
  );
}
