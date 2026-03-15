import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { primaryNavigation, secondaryNavigation } from "@/lib/site-navigation";

export function SiteHeader() {
  return (
    <header className="border-b border-(--ink-12) px-4 pt-1 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-(--frame-width)">
        <div className="grid gap-3 py-3 sm:py-4 lg:grid-cols-[minmax(0,9.5rem)_minmax(0,1fr)] lg:items-end lg:gap-6">
          <div className="max-w-[9rem] space-y-1.5">
            <p className="text-(--accent-strong) text-[0.69rem] font-semibold uppercase tracking-[0.26em]">
              Story-led reference
            </p>
            <Link
              href="/"
              className="block max-w-[7ch] font-(family-name:--font-display) text-[1.72rem] leading-[0.92] tracking-[-0.04em] text-foreground no-underline sm:text-[1.9rem]"
            >
              {siteConfig.name}
            </Link>
          </div>

          <div className="flex min-w-0 flex-col gap-2.5 lg:items-end">
            <div className="flex w-full flex-col gap-2.5 lg:items-end">
              <div className="flex w-full flex-col gap-1.5 lg:items-end">
                <p className="text-(--accent-strong) text-[0.69rem] font-semibold uppercase tracking-[0.26em]">
                  Browse
                </p>
                <nav
                  aria-label="Primary navigation"
                  className="flex flex-wrap gap-x-4 gap-y-1.5 lg:justify-end"
                >
                  {primaryNavigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-[0.88rem] font-semibold leading-5 text-(--ink-90) no-underline nav-link sm:text-[0.92rem]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="w-full border-t border-(--ink-12) pt-2">
                <div className="flex flex-col gap-1.5 lg:items-end">
                  <p className="text-(--accent-strong) text-[0.69rem] font-semibold uppercase tracking-[0.26em]">
                    Start with
                  </p>
                  <nav
                    aria-label="Secondary navigation"
                    className="flex flex-wrap gap-x-3 gap-y-1.5 lg:justify-end"
                  >
                    {secondaryNavigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-[0.82rem] font-medium leading-5 text-(--ink-72) no-underline nav-link sm:text-[0.85rem]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
