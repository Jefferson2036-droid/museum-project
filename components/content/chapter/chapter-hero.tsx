import Link from "next/link";
import type { ReactNode } from "react";

type ChapterHeroLink = {
  href: string;
  label: string;
};

type ChapterHeroProps = {
  eyebrow: string;
  period?: string;
  title: string;
  lede: string;
  scene?: string;
  backHref?: string;
  backLabel?: string;
  links?: ChapterHeroLink[];
  children?: ReactNode;
};

export function ChapterHero({
  eyebrow,
  period,
  title,
  lede,
  scene,
  backHref,
  backLabel,
  links,
  children,
}: ChapterHeroProps) {
  return (
    <header className="chapter-hero">
      <div className="chapter-hero__lead">
        <div className="chapter-hero__topbar">
          <p className="eyebrow">{eyebrow}</p>
          {backHref && backLabel ? (
            <Link href={backHref} className="back-link">
              {backLabel}
            </Link>
          ) : null}
        </div>

        <div className="chapter-hero__header exemplar-header">
          {period ? <p className="exemplar-period">{period}</p> : null}
          <h1>{title}</h1>
          <p className="lede">{lede}</p>
        </div>

        {scene ? <p className="chapter-hero__scene">{scene}</p> : null}
      </div>

      {children || (links && links.length > 0) ? (
        <div className="chapter-hero__support">
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
