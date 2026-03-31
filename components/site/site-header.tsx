"use client";

import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-[100] w-full bg-[#121212] border-b border-[#32CD32]">
      <div className="flex justify-between items-center text-[#32CD32] font-mono text-center py-2">
        <div>
          <span className="text-lg">ARCHIVE LOG</span>
          <span className="system-label ml-2">
            [STATUS: ONLINE // ENCRYPTED]
          </span>
        </div>
        <nav className="flex gap-6 items-center">
          <Link href="/" className="font-mono uppercase binary-hover">
            [ HOME ]
          </Link>
          <Link href="/about" className="font-mono uppercase binary-hover">
            [ ABOUT ]
          </Link>
          <Link href="/contact" className="font-mono uppercase binary-hover">
            [ CONTACT ]
          </Link>
        </nav>
      </div>
    </header>
  );
}
