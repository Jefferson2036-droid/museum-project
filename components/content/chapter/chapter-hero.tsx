import Link from "next/link";
import type { ReactNode } from "react";

import { FocalImage } from "@/components/media/focal-image";
import { cn } from "@/lib/utils";

type ChapterHeroLink = {
  href: string;
  label: string;
};

type ChapterHeroProps = {
  eyebrow: string;
  period?: string;
  title: string;
  lede: string;
  links?: ChapterHeroLink[];
  children?: ReactNode;
  /** Optional feature image shown in the hero support column. */
  featureImage?: {
    src: string;
    alt: string;
  };
};

export function ChapterHero({
  eyebrow,
  period,
  title,
  lede,
  links,
  children,
  featureImage,
}: ChapterHeroProps) {
  const hasSupport = children || featureImage || (links && links.length > 0);

  return (
    <header
      className={cn(
        "chapter-hero relative",
        featureImage && "chapter-hero--visual"
      )}
    >
      <span className="absolute top-3 right-3 text-[8px] tracking-widest uppercase font-mono text-black/60">
        VERITAS // SAGE
      </span>
      <div className="chapter-hero__lead">
        <div className="chapter-hero__topbar">
          <p className="eyebrow font-mono">{eyebrow}</p>
        </div>

        <div className="chapter-hero__header exemplar-header">
          {period ? (
            <p className="exemplar-period font-mono text-sm mb-2">{period}</p>
          ) : null}
          <h1 className="museum-title-gradient font-mono">{title}</h1>
          <p className="lede font-mono text-base italic text-slate-700 mt-4">
            {lede}
          </p>
        </div>
      </div>

      {hasSupport ? (
        <div className="chapter-hero__support">
          {featureImage ? (
            <div className="chapter-hero__feature-image">
              <FocalImage
                src={featureImage.src}
                alt={featureImage.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          ) : null}

          {children ? (
            <div className="chapter-hero__body">{children}</div>
          ) : null}

          {links && links.length > 0 ? (
            <nav
              className="adjacent-era-nav chapter-hero__nav"
              aria-label="Chapter navigation"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="adjacent-era-nav__link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}
