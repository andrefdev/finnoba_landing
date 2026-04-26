export function DotGrid({ opacity = 0.05, size = 36 }: { opacity?: number; size?: number }) {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        backgroundImage: `radial-gradient(rgba(255,255,255,${opacity}) 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
        maskImage: "radial-gradient(ellipse at 50% 30%, black 30%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 30%, transparent 80%)",
      }}
    />
  );
}
