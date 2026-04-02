"use client";

import Link from "next/link";

export function SiteHeader() {
  const navItems = [
    { label: "HOME", href: "/" },
    { label: "WATERFALL", href: "/waterfall" },
    { label: "DEVOPS", href: "/devops" },
    { label: "AI FUTURE", href: "/ai-future" },
  ];

  return (
    <header className="fixed left-0 top-0 z-[100] flex h-[100px] w-full items-center justify-between border-b-4 border-solid border-[#003399] bg-[#002366] px-12 rounded-none">
      <span className="font-mono text-2xl font-black uppercase tracking-[0.4em] text-[#FFFFFF] rounded-none">
        MODERN LAB
      </span>

      <nav className="flex items-center justify-end gap-x-16 rounded-none">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="inline-flex items-center whitespace-nowrap rounded-none px-1 py-2 text-lg font-bold uppercase tracking-widest !text-white transition-colors"
            style={{ color: "#FFFFFF" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
