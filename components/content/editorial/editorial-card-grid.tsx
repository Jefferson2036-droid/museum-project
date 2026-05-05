"use client";

import { useState, type ReactNode } from "react";

import { FocalImage } from "@/components/media/focal-image";
import { cn } from "@/lib/utils";

export type EditorialCardItem = {
  key?: string;
  title: ReactNode;
  description: ReactNode;
  meta?: ReactNode;
  footer?: ReactNode;
  imageUrl?: string;
  imageAlt?: string;
};

export function EditorialCardGrid({
  items,
  className,
  dense = false,
  cardClassName,
}: {
  items: EditorialCardItem[];
  className?: string;
  dense?: boolean;
  cardClassName?: string;
}) {
  return (
    <div
      className={cn("content-grid", dense && "content-grid--dense", className)}
    >
      {items.map((item) => (
        <Flashcard
          key={
            item.key ??
            (typeof item.title === "string" ? item.title : String(item.title))
          }
          item={item}
          cardClassName={cardClassName}
        />
      ))}
    </div>
  );
}

function Flashcard({
  item,
  cardClassName,
}: {
  item: EditorialCardItem;
  cardClassName?: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const titleText =
    typeof item.title === "string" ? item.title : String(item.title);
  const hasImage = Boolean(item.imageUrl);

  return (
    <article
      className={cn(
        "group relative h-full min-h-[420px] overflow-hidden border border-black bg-white transition-all duration-500 ease-in-out hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent",
        cardClassName
      )}
      style={{ backgroundColor: "#ffffff" }}
    >
      <button
        type="button"
        aria-pressed={flipped}
        aria-label={`${flipped ? "Hide" : "Show"} truth for ${titleText}`}
        onClick={() => setFlipped((current) => !current)}
        className="block h-full w-full cursor-pointer text-left font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
      >
        <div className="relative h-full min-h-[420px] [perspective:1400px]">
          <div
            className="relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d]"
            style={{
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            <div
              className={cn(
                "absolute inset-0 flex h-full w-full flex-col justify-between p-8 transition-opacity duration-500 bg-white",
                flipped ? "opacity-0 pointer-events-none" : "opacity-100"
              )}
              style={{ backfaceVisibility: "hidden" }}
            >
              <div>
                {item.meta ? (
                  <p className="mb-3 text-[0.64rem] uppercase tracking-[0.2em] text-black/80 group-hover:text-white">
                    {item.meta}
                  </p>
                ) : null}
                <h3 className="text-lg font-bold uppercase tracking-tight group-hover:text-white">
                  {item.title}
                </h3>
              </div>

              <div className="flex flex-1 items-center justify-center py-6">
                {item.imageUrl ? (
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-black bg-white">
                    <FocalImage
                      src={item.imageUrl}
                      alt={item.imageAlt ?? titleText}
                      width={600}
                      height={450}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-full min-h-[220px] w-full flex-col items-center justify-center border border-dashed border-black/30 bg-white px-6 text-center text-sm leading-relaxed text-black/70 group-hover:border-white/50 group-hover:bg-white/10 group-hover:text-white">
                    <strong className="mb-3 text-base font-bold uppercase tracking-tight text-black group-hover:text-white">
                      {item.title}
                    </strong>
                    <span>Click to reveal Truth</span>
                  </div>
                )}
              </div>

              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-black/60 group-hover:text-white">
                Click to reveal
              </p>
            </div>

            <div
              className={cn(
                "absolute inset-0 flex h-full w-full flex-col justify-between p-8 transition-opacity duration-500 bg-white",
                flipped ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            >
              <div>
                {item.meta ? (
                  <p className="mb-3 text-[0.64rem] uppercase tracking-[0.2em] text-black/80 group-hover:text-white">
                    {item.meta}
                  </p>
                ) : null}
                <h3 className="text-lg font-bold uppercase tracking-tight group-hover:text-white">
                  {item.title}
                </h3>
              </div>

              <div className="flex-1 py-6 text-sm leading-7 text-black group-hover:text-white">
                {item.description}
              </div>

              <div className="space-y-2 text-[0.7rem] uppercase tracking-[0.2em] text-black/60 group-hover:text-white">
                <p>Truth revealed</p>
                {item.footer ? <div>{item.footer}</div> : null}
              </div>
            </div>
          </div>
        </div>
      </button>
    </article>
  );
}
