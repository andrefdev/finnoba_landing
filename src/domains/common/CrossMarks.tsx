export function CrossMarks({
  corners = "all",
}: {
  corners?: "all" | "top" | "bottom";
}) {
  const show = {
    tl: corners === "all" || corners === "top",
    tr: corners === "all" || corners === "top",
    bl: corners === "all" || corners === "bottom",
    br: corners === "all" || corners === "bottom",
  };
  return (
    <>
      {show.tl ? <span aria-hidden className="cross cross-tl" /> : null}
      {show.tr ? <span aria-hidden className="cross cross-tr" /> : null}
      {show.bl ? <span aria-hidden className="cross cross-bl" /> : null}
      {show.br ? <span aria-hidden className="cross cross-br" /> : null}
    </>
  );
}
