import Link from "next/link";
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
            "group relative h-full flex flex-col justify-between min-h-[300px] border border-slate-200/60 p-8 bg-white rounded-none transition-all duration-500 ease-out",
            "hover:bg-[#f8faff] hover:border-[#0F62FE]/30 hover:shadow-[0_20px_40px_-15px_rgba(15,98,254,0.1)] hover:-translate-y-1"
          )}
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0F62FE] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          <div className="flex flex-col h-full justify-between">
            <div>
              {item.eyebrow ? (
                <p className="content-card__meta font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F62FE] mb-4">
                  {item.eyebrow}
                </p>
              ) : null}
              <h3 className="font-mono font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div className="flex justify-end mt-4">
              <Link
                href={item.routeHref}
                aria-label={item.routeLabel ?? `Open ${item.title}`}
                className="group/arrow flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-slate-400 group-hover/arrow:text-slate-900 transition-colors"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
