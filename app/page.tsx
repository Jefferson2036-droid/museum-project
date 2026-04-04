import Link from "next/link";

import HeroSlideshow from "@/components/HeroSlideshow";
import {
  ReadingClusterGrid,
  type ReadingCluster,
} from "@/components/content/reading/reading-cluster-grid";

const historyItems: ReadingCluster[] = [
  {
    key: "waterfall-era-1970",
    eyebrow: "",
    title: "1970s Foundations",
    description: "The start of Waterfall.",
    routeHref: "/waterfall",
    routeLabel: "View Record →",
    readings: [
      {
        work: "1970s Foundations",
        year: "1970",
        why: "The start of Waterfall.",
        href: "/waterfall",
        lineage: "Set the baseline for phase-gated software delivery.",
      },
    ],
  },
  {
    key: "waterfall-era-1980",
    eyebrow: "",
    title: "1980s Expansion",
    description: "Structured systems.",
    routeHref: "/waterfall",
    routeLabel: "View Record →",
    readings: [
      {
        work: "1980s Expansion",
        year: "1980",
        why: "Structured systems.",
        href: "/waterfall",
        lineage: "Expanded formal requirements and design artifacts.",
      },
    ],
  },
  {
    key: "waterfall-era-1990",
    eyebrow: "",
    title: "1990s Evolution",
    description: "Object-oriented logic.",
    routeHref: "/waterfall",
    routeLabel: "View Record →",
    readings: [
      {
        work: "1990s Evolution",
        year: "1990",
        why: "Object-oriented logic.",
        href: "/waterfall",
        lineage: "Bridged classic lifecycle models with modular architecture.",
      },
    ],
  },
];

const lineageItems: ReadingCluster[] = [
  {
    key: "lineage-turing-1950",
    eyebrow: "PRIMARY SOURCE",
    title: "Computing Machinery and Intelligence",
    description:
      "A foundational framing for machine intelligence and the philosophical threshold of synthetic thought.",
    routeHref: "/reading-maps/intellectual-lineage",
    routeLabel: "VIEW SOURCE →",
    readings: [
      {
        work: "Computing Machinery and Intelligence",
        year: "1950",
        why: "Turing, 1950",
        href: "/reading-maps/intellectual-lineage",
        lineage: "Introduced the core question that informs modern AI systems.",
      },
    ],
  },
  {
    key: "lineage-royce-1970",
    eyebrow: "PRIMARY SOURCE",
    title: "Managing the Development of Large Software Systems",
    description:
      "Codified software process discipline and made phase-driven engineering legible at scale.",
    routeHref: "/reading-maps/intellectual-lineage",
    routeLabel: "VIEW SOURCE →",
    readings: [
      {
        work: "Managing the Development of Large Software Systems",
        year: "1970",
        why: "Royce, 1970",
        href: "/reading-maps/intellectual-lineage",
        lineage:
          "Established the operational baseline from which DevOps evolved.",
      },
    ],
  },
  {
    key: "lineage-humble-farley-2010",
    eyebrow: "PRIMARY SOURCE",
    title: "Continuous Delivery: Reliable Software Releases",
    description:
      "Connected delivery automation and reliability practices that paved the way for AI-scale operations.",
    routeHref: "/reading-maps/intellectual-lineage",
    routeLabel: "VIEW SOURCE →",
    readings: [
      {
        work: "Continuous Delivery: Reliable Software Releases",
        year: "2010",
        why: "Humble & Farley, 2010",
        href: "/reading-maps/intellectual-lineage",
        lineage:
          "Bridged software release engineering with intelligent infrastructure readiness.",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="relative bg-white pt-[100px] flex flex-col">
      <div className="relative z-0 w-full max-w-full overflow-x-hidden font-mono">
        <section className="relative block w-full bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-start py-20">
            <div className="w-full lg:w-1/2 flex flex-col">
              <h1
                aria-label="History of Artificial Intelligence"
                className="brand-gradient-text font-mono text-5xl lg:text-7xl font-black uppercase leading-[0.85] tracking-tighter mb-8"
              >
                THE AI HISTORY ARCHIVE: MUSEUM OF MODERN LAB
              </h1>
              <p className="font-mono text-sm leading-relaxed text-slate-600 mb-10 max-w-lg">
                Traces the evolution of artificial intelligence through decisive
                paradigm shifts and technical milestones.
              </p>
              <Link
                href="/waterfall"
                className="inline-block border-2 border-[#0047AB] px-8 py-3 font-mono font-bold text-[#0047AB] uppercase hover:bg-[#0047AB] hover:text-white transition-all"
              >
                EXPLORE MORE
              </Link>
            </div>

            <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[650px] border border-slate-200 overflow-hidden">
              <HeroSlideshow />
            </div>
          </div>
        </section>

        {/* Section 1: THE CHRONOLOGY */}
        <section className="relative bg-white py-48 md:py-60 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="brand-gradient-text font-mono text-4xl font-black uppercase mb-24">
              Era Records
            </h2>

            <ReadingClusterGrid items={historyItems} className="mb-20" />
          </div>
        </section>

        {/* Section 2: THE READING MAP */}
        <section className="relative bg-white py-48 md:py-60 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="brand-gradient-text font-mono text-4xl font-black uppercase mb-24">
              How Software Led to AI
            </h2>

            <ReadingClusterGrid items={lineageItems} className="mt-12" />
          </div>
        </section>

        {/* Section 3: THE TECHNICAL BRIDGE */}
        <section className="relative bg-white py-48 md:py-60 w-full border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="brand-gradient-text font-mono text-3xl font-black uppercase tracking-wide">
                The Mathematical Bridge
              </h2>
            </div>

            <div className="callout-panel">
              <p className="font-mono text-base leading-relaxed text-slate-900">
                Underlying all three paradigms is a shared mathematical
                foundation-from Waterfall&apos;s deterministic process flows to
                DevOps&apos; statistical reliability metrics, to AI&apos;s
                probabilistic reasoning. The &quot;Math Bridge&quot; connects
                these through formal logic, linear algebra, and information
                theory. Understanding this continuity reveals how each era built
                upon the last, rather than replacing it entirely.
              </p>
            </div>
          </div>
        </section>

        <footer className="relative z-0 px-16 py-8">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4">
            <span className="font-mono text-xs uppercase tracking-wide text-gray-500">
              © 2026 MUSEUM OF MODERN LAB
            </span>
            <span className="font-mono text-xs uppercase tracking-wide text-gray-500">
              NJIT IS117 ARCHIVE
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}
