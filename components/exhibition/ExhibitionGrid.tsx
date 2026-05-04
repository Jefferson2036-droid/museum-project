import type { ReactNode } from "react";

export default function ExhibitionGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={"container " + (className ?? "")}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {children}
      </div>
    </div>
  );
}
