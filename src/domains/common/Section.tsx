import type { CSSProperties, ReactNode } from "react";
import { CONTAINER_MAX, CONTAINER_PAD } from "./tokens";

type Props = {
  children: ReactNode;
  background?: string;
  topRound?: boolean;
  bottomRound?: boolean;
  paddingY?: string | number;
  marginTop?: string | number;
  style?: CSSProperties;
  innerStyle?: CSSProperties;
  id?: string;
};

// Page-level section wrapper. The kit alternates between the aurora background
// and white "card" sections with rounded top corners — `topRound` enables that.
export function Section({
  children,
  background = "transparent",
  topRound,
  bottomRound,
  paddingY = "64px",
  marginTop,
  style,
  innerStyle,
  id,
}: Props) {
  const padY = typeof paddingY === "number" ? `${paddingY}px` : paddingY;
  return (
    <section
      id={id}
      style={{
        background,
        borderRadius: `${topRound ? "40px 40px" : "0 0"} ${bottomRound ? "40px 40px" : "0 0"}`,
        padding: `${padY} ${CONTAINER_PAD}`,
        marginTop,
        ...style,
      }}
    >
      <div style={{ maxWidth: CONTAINER_MAX, margin: "0 auto", ...innerStyle }}>{children}</div>
    </section>
  );
}
