import Link from "next/link";
import type { ReactNode } from "react";

type ExhibitionCardProps = {
  category?: string;
  title: string;
  summary: ReactNode;
  href?: string;
  children?: ReactNode;
  className?: string;
};

export default function ExhibitionCard({
  category,
  title,
  summary,
  href,
  children,
  className,
}: ExhibitionCardProps) {
  const Card = (
    <article
      className={
        "group relative h-full flex flex-col justify-between min-h-[180px] border border-black p-6 bg-white transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent " +
        (className ?? "")
      }
    >
      <div>
        {category ? (
          <p className="text-[0.64rem] tracking-widest uppercase text-black/80 mb-2 font-mono group-hover:text-white">
            {category}
          </p>
        ) : null}

        <h3 className="font-bold text-lg mb-2 font-mono group-hover:text-white">
          {title}
        </h3>

        <div className="text-sm text-slate-700 font-mono group-hover:text-white">
          {summary}
        </div>
      </div>

      {children ? (
        <div className="mt-4 font-mono group-hover:text-white">{children}</div>
      ) : null}
    </article>
  );

  if (href) {
    return (
      <Link href={href} aria-label={title} className="no-underline">
        {Card}
      </Link>
    );
  }

  return Card;
}

export type { ExhibitionCardProps };
