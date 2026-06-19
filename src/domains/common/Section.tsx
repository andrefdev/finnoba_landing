import type { ReactNode } from "react";
import { CONTAINER_MAX, CONTAINER_PAD } from "./tokens";

type Props = {
  children: ReactNode;
  topRound?: boolean;
  paddingY?: string;
};

// White-card section used on every inner page (the aurora wrapper is in
// the layout). `topRound` rounds the top corners — used once per page on
// the first section that sits directly under the PageHero.
export function Section({ children, topRound, paddingY = "64px" }: Props) {
  return (
    <section
      style={{
        background: "#fff",
        borderRadius: topRound ? "40px 40px 0 0" : 0,
        padding: `${paddingY} ${CONTAINER_PAD}`,
      }}
    >
      <div style={{ maxWidth: CONTAINER_MAX, margin: "0 auto" }}>{children}</div>
    </section>
  );
}
