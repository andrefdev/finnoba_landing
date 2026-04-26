type Chain = "polygon" | "base" | "eth" | "usdt" | "usdc";

const MAP: Record<Chain, { letter: string; bg: string }> = {
  polygon: { letter: "P", bg: "#8247E5" },
  base: { letter: "B", bg: "#0052FF" },
  eth: { letter: "E", bg: "#627EEA" },
  usdt: { letter: "₮", bg: "#26A17B" },
  usdc: { letter: "$", bg: "#2775CA" },
};

export function ChainGlyph({ chain, size = 22 }: { chain: Chain; size?: number }) {
  const c = MAP[chain] ?? MAP.eth;
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: c.bg,
        color: "#fff",
        fontFamily: "Poppins",
        fontWeight: 700,
        fontSize: size * 0.5,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {c.letter}
    </span>
  );
}
