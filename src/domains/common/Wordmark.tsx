import Image from "next/image";

export function Wordmark({ height = 22 }: { height?: number }) {
  return (
    <Image
      src="/assets/logo-finnoba-white.png"
      alt="Finnoba"
      width={height * 4}
      height={height}
      priority
      style={{ height, width: "auto", display: "block" }}
    />
  );
}
