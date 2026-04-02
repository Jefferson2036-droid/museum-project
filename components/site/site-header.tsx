"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export function SiteHeader() {
  const pathname = usePathname();

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "WATERFALL", href: "/waterfall" },
    { label: "DEVOPS", href: "/devops" },
    { label: "AI FUTURE", href: "/ai-future" },
  ];

  return (
    <header className="fixed left-0 top-0 z-[100] flex h-16 w-full max-w-[100vw] overflow-hidden items-center justify-between rounded-none border-b border-blue-200/30 bg-white/70 px-4 backdrop-blur-md md:px-10">
      <span className="min-w-0 font-mono text-sm font-black uppercase tracking-[0.3em] text-[#0047AB] rounded-none md:text-2xl md:tracking-[0.4em]">
        MODERN LAB
      </span>

      <nav className="absolute left-3/4 flex min-w-0 -translate-x-1/2 items-center justify-center gap-x-2 rounded-none sm:gap-x-4 md:gap-x-8">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <Fragment key={item.label}>
              {index > 0 ? (
                <span
                  aria-hidden="true"
                  className="px-1 text-xs text-white/70 md:px-2 md:text-sm"
                >
                  |
                </span>
              ) : null}
              <Link
                href={item.href}
                className={`group relative inline-flex items-center whitespace-nowrap rounded-none px-2 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:text-[#9D4EDD] sm:text-sm md:px-3 md:text-base md:tracking-widest ${
                  isActive ? "text-[#0F62FE]" : "text-[#0047AB]"
                }`}
              >
                {item.label}
                <span
                  className={`pointer-events-none absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-[#0047AB] transition-all duration-300 ease-out ${
                    isActive
                      ? "w-[70%] opacity-70"
                      : "w-0 opacity-100 group-hover:w-[70%]"
                  }`}
                />
              </Link>
            </Fragment>
          );
        })}
      </nav>
    </header>
  );
}
