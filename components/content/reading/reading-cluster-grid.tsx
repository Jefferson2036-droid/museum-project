import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type ReadingEntry = {
  work: string;
  year: string;
  why: string;
  href: string;
  lineage: string;
};

export type ReadingCluster = {
  key: string;
  id?: string;
  eyebrow: string;
  title: string;
  description: ReactNode;
  routeHref: string;
  routeLabel?: string;
  imageUrl?: string;
  imageAlt?: string;
  readings: ReadingEntry[];
};

export function ReadingClusterGrid({
  items,
  className,
}: {
  items: ReadingCluster[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "content-grid paper-cluster-grid grid grid-cols-3 gap-8 items-stretch",
        className
      )}
      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
    >
      {items.map((item) => (
        <article
          key={item.key}
          id={item.id}
          className={cn(
            "relative flex flex-col h-full min-h-[430px] border border-slate-200/40 p-10 bg-slate-100/40 rounded-none transition-all hover:bg-slate-100/60"
          )}
        >
          {item.imageUrl ? (
            <div className="cluster-card__hero">
              <Image
                src={item.imageUrl}
                alt={item.imageAlt ?? ""}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ) : null}
          <div className="cluster-card__header">
            {item.eyebrow ? (
              <p className="content-card__meta font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F62FE] mb-4">
                {item.eyebrow}
              </p>
            ) : null}
            <h3 className="brand-gradient-text font-mono text-2xl font-black uppercase leading-tight mb-6">
              {item.title}
            </h3>
            <div className="text-sm leading-relaxed text-slate-600 mb-6">
              {item.description}
            </div>
            <p className="cluster-card__route mt-auto text-[10px] font-bold tracking-widest uppercase text-slate-400">
              <a href={item.routeHref}>
                {item.routeLabel ?? "Read the matching era chapter"}
              </a>
              <span className="cluster-card__count ml-2">
                {item.readings.length}{" "}
                {item.readings.length === 1 ? "paper" : "papers"}
              </span>
            </p>
          </div>
          <div className="reading-stack mt-6 space-y-4">
            {item.readings.map((reading, index) => (
              <div
                key={`${reading.year}-${reading.work}`}
                className="reading-entry flex flex-col"
              >
                <div className="reading-entry__head flex items-center justify-between gap-2">
                  <span className="reading-entry__year font-mono text-xl font-black text-[#0F62FE] rounded-none">
                    {reading.year}
                  </span>
                  {item.readings.length > 1 ? (
                    <span className="reading-entry__index text-[10px] font-bold tracking-widest uppercase text-slate-400">
                      {index + 1} of {item.readings.length}
                    </span>
                  ) : null}
                </div>
                {reading.work !== item.title ? (
                  <h4 className="mt-2 font-mono text-sm font-bold uppercase tracking-wide text-slate-700">
                    <a href={reading.href} target="_blank" rel="noreferrer">
                      {reading.work}
                    </a>
                  </h4>
                ) : null}
                <p className="reading-entry__why mt-4 text-sm leading-relaxed text-slate-600">
                  {reading.why}
                </p>
                <p className="reading-entry__lineage mt-3 min-h-[2.75rem] text-xs leading-relaxed text-slate-500">
                  <strong>Connects forward:</strong>{" "}
                  {reading.lineage ? (
                    reading.lineage
                  ) : (
                    <span className="invisible">No lineage provided.</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
