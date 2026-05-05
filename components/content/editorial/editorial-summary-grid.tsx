import type { ReactNode } from "react";

import { EditorialInsightCard } from "@/components/content/editorial/editorial-design-system";
import { cn } from "@/lib/utils";

export type EditorialSummaryItem = {
  eyebrow?: string;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  footer?: ReactNode;
};

export function EditorialSummaryGrid({
  items,
  className,
  dense = true,
  cardClassName,
  titleClassName,
  descriptionClassName,
  eyebrowScale,
}: {
  items: EditorialSummaryItem[];
  className?: string;
  dense?: boolean;
  cardClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  eyebrowScale?: "compact" | "default" | "section";
}) {
  return (
    <div
      className={cn("content-grid", dense && "content-grid--dense", className)}
    >
      {items.map((item) => (
        <article
          key={`${item.eyebrow ?? "item"}-${item.title}`}
          className={cn(
            "content-card group border border-black transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent",
            cardClassName
          )}
        >
          <EditorialInsightCard
            eyebrow={item.eyebrow}
            title={item.title}
            description={item.description}
            titleClassName={cn(
              titleClassName,
              "font-mono group-hover:text-white"
            )}
            descriptionClassName={cn(
              descriptionClassName,
              "font-mono group-hover:text-white"
            )}
            eyebrowScale={eyebrowScale}
            footer={
              item.footer ??
              (item.href && item.linkLabel ? (
                <p className="artifact-note font-mono group-hover:text-white">
                  <a href={item.href}>{item.linkLabel}</a>
                </p>
              ) : null)
            }
          />
        </article>
      ))}
    </div>
  );
}
