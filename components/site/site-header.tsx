"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "WATERFALL", href: "/waterfall" },
    { label: "DEVOPS", href: "/devops" },
    { label: "AI FUTURE", href: "/ai-future" },
  ];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__brandlock">
          <p className="site-header__eyebrow">Story-led reference</p>
          <Link href="/" className="site-brand text-lg sm:text-xl">
            MODERN LAB
          </Link>
        </div>

        <nav aria-label="Main Navigation" className="site-nav">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className="site-nav__link"
                data-active={isActive ? "true" : "false"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
