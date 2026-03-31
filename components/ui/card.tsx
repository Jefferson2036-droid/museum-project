import type * as React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-[#32CD32] bg-[#121212] rounded-none p-4">
      {children}
    </div>
  );
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <span className="text-[10px] text-[#32CD32] opacity-60 font-mono mb-2 block">
        [REF: ID-092-A]
      </span>
      {children}
    </div>
  );
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono uppercase tracking-tighter text-[#32CD32] text-lg">
      {children}
    </h2>
  );
}

export function CardDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-[#32CD32] text-sm">{children}</p>;
}
