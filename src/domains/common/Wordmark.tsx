import Image from "next/image";

export function Wordmark({ height = 32 }: { height?: number }) {
  return (
    <Image
      src="/assets/logo-finnoba-navy.png"
      alt="Finnoba"
      width={height * 4}
      height={height}
      priority
    />
  );
}
