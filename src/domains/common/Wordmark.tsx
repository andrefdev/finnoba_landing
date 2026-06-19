import Image from "next/image";
import logo from "@/assets/logo.png";

// Brand logo. `size` is the rendered height in px; width auto-scales from
// the imported asset's natural aspect ratio so there's no layout shift.
export function Wordmark({ size = 26, priority }: { size?: number; priority?: boolean }) {
  const width = Math.round((logo.width / logo.height) * size);
  return (
    <Image
      src={logo}
      alt="Finnoba"
      width={width}
      height={size}
      priority={priority}
      style={{ height: size, width: "auto", display: "block" }}
    />
  );
}
