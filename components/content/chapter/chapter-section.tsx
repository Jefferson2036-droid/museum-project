import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ChapterSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  prose?: boolean;
};

export function ChapterSection({
  id,
  eyebrow,
  title,
  children,
  prose = false,
}: ChapterSectionProps) {
  return (
    <section
      className={cn(
        "exemplar-section chapter-section",
        prose && "chapter-section--prose"
      )}
      aria-labelledby={id}
    >
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {children}
    </section>
  );
}
