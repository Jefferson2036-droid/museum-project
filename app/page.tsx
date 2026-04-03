import Image from "next/image";
import Link from "next/link";

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
    <main className="relative min-h-screen bg-white !bg-none pt-[80px] md:pt-[100px]">
      <div className="relative z-0 flex min-h-screen w-full max-w-full flex-col overflow-x-hidden font-mono">
        <section className="relative bg-white py-48 md:py-60 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-[1.4fr_1fr] gap-12 items-center w-full">
              <div>
                <h1 className="brand-gradient-text mb-8 break-words font-mono text-[5.5rem] font-black uppercase leading-[0.85] tracking-[-0.04em]">
                  THE AI HISTORY ARCHIVE: MUSEUM OF MODERN LAB
                </h1>

                <p className="mb-10 max-w-2xl text-[1.2rem] font-mono leading-relaxed text-black opacity-90">
                  This exhibit traces the evolution of artificial intelligence
                  through decisive paradigm shifts, technical milestones, and
                  institutional turning points. Narrative modules, system
                  diagrams, and archival references will be mapped into a
                  unified modern lab interface across upcoming sprints.
                </p>

                <div className="mt-8 md:mt-12 flex w-full justify-start">
                  <Link
                    href="/waterfall"
                    className="rounded-none border-2 border-[#0047AB] px-2 py-1 font-mono font-bold uppercase tracking-widest text-[#0047AB] transition-colors duration-300 hover:bg-primary hover:text-white"
                  >
                    EXPLORE MORE
                  </Link>
                </div>
              </div>

              <div className="relative h-[70vh] w-full flex justify-end">
                <Image
                  src="/media/wikimedia/alan-turing.webp"
                  alt="Archival portrait"
                  width={900}
                  height={1125}
                  priority
                  className="img-terminal h-full w-auto object-contain shadow-2xl border border-primary/5"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
              </div>
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
