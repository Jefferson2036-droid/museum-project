import Link from "next/link";

export default function GalleryNav({
  prevHref,
  prevLabel,
  nextHref,
  nextLabel,
}: {
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
}) {
  return (
    <footer className="container mt-12 mb-12 flex items-center justify-between">
      {prevHref ? (
        <Link href={prevHref} className="text-sm font-semibold text-slate-700">
          ← {prevLabel ?? "Previous Gallery"}
        </Link>
      ) : (
        <div />
      )}

      {nextHref ? (
        <Link href={nextHref} className="text-sm font-semibold text-slate-700">
          {nextLabel ?? "Next Gallery"} →
        </Link>
      ) : (
        <div />
      )}
    </footer>
  );
}
