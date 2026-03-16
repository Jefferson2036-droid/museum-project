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
    <div className={cn("content-grid paper-cluster-grid", className)}>
      {items.map((item) => (
        <article key={item.key} id={item.id} className="content-card">
          <p className="content-card__meta">{item.eyebrow}</p>
          <h3>{item.title}</h3>
          <div>{item.description}</div>
          <p className="artifact-note">
            Start here: {item.readings[0]?.work}.{" "}
            <a href={item.routeHref}>
              {item.routeLabel ?? "Read the matching era chapter"}
            </a>
            .
          </p>
          <div className="reading-stack">
            {item.readings.map((reading) => (
              <div
                key={`${reading.year}-${reading.work}`}
                className="reading-entry"
              >
                <p className="timeline-year">{reading.year}</p>
                <h4>
                  <a href={reading.href} target="_blank" rel="noreferrer">
                    {reading.work}
                  </a>
                </h4>
                <p>{reading.why}</p>
                <p className="content-card__meta">
                  Canonical source or paper link.
                </p>
                <p className="artifact-note">
                  Connects forward: {reading.lineage}
                </p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
