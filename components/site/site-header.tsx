"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Waterfall", href: "/waterfall" },
    { label: "DevOps", href: "/devops" },
    { label: "AI Future", href: "/ai-future" },
  ];

  const isItemActive = (label: string, href: string) => {
    if (label === "Home") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <div className="site-header__brandlock">
          <p className="site-header__eyebrow">Story-led reference</p>
          <Link href="/" className="site-brand text-lg sm:text-xl">
            MODERN LAB
          </Link>
        </div>

        <nav aria-label="Main Navigation" className="site-nav">
          {navItems.map((item) => {
            const isActive = isItemActive(item.label, item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className="site-nav__link"
                data-active={isActive ? "true" : "false"}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {pathname === "/" && (
          <nav aria-label="Homepage sections" className="hidden">
            <Link
              href="/#home-chronology"
              aria-current={
                hash === "#home-chronology" ? "location" : undefined
              }
            >
              Timeline
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
