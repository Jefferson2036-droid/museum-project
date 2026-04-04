"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

import HeroSlideshow from "@/components/HeroSlideshow";
import {
  ReadingClusterGrid,
  type ReadingCluster,
} from "@/components/content/reading/reading-cluster-grid";

const historyItems: ReadingCluster[] = [
  {
    key: "waterfall-era-1970",
    eyebrow: "",
    title: "1970s: The Waterfall Era",
    description:
      "Linear, plan-driven development focusing on rigid documentation and sequential phases.",
    routeHref: "/waterfall",
    routeLabel: "View Record →",
    readings: [
      {
        work: "1970s: The Waterfall Era",
        year: "1970",
        why: "Linear, plan-driven development focusing on rigid documentation and sequential phases.",
        href: "/waterfall",
        lineage: "Set the baseline for phase-gated software delivery.",
      },
    ],
  },
  {
    key: "waterfall-era-1980",
    eyebrow: "",
    title: "1990s: Iterative Prototyping",
    description:
      "The shift toward user feedback loops and 'spiral' models to reduce technical risk.",
    routeHref: "/waterfall",
    routeLabel: "View Record →",
    readings: [
      {
        work: "1990s: Iterative Prototyping",
        year: "1990",
        why: "The shift toward user feedback loops and 'spiral' models to reduce technical risk.",
        href: "/waterfall",
        lineage:
          "Introduced iterative risk reduction and frequent user validation.",
      },
    ],
  },
  {
    key: "waterfall-era-1990",
    eyebrow: "",
    title: "2000s: The Agile Revolution",
    description:
      "Focusing on adaptive planning and rapid delivery as defined by the 2001 Manifesto.",
    routeHref: "/waterfall",
    routeLabel: "View Record →",
    readings: [
      {
        work: "2000s: The Agile Revolution",
        year: "2001",
        why: "Focusing on adaptive planning and rapid delivery as defined by the 2001 Manifesto.",
        href: "/waterfall",
        lineage:
          "Shifted software teams toward continuous adaptation and customer collaboration.",
      },
    ],
  },
];

const lineageItems: ReadingCluster[] = [
  {
    key: "practice-cicd",
    eyebrow: "",
    title: "CI/CD Pipelines",
    description:
      "Automating the path from code commit to production deployment.",
    routeHref: "/devops",
    routeLabel: "View Record →",
    readings: [
      {
        work: "CI/CD Pipelines",
        year: "2000s",
        why: "Automating the path from code commit to production deployment.",
        href: "/devops",
        lineage:
          "Reduced release friction by turning integration and deployment into repeatable automation.",
      },
    ],
  },
  {
    key: "practice-devops-culture",
    eyebrow: "",
    title: "The DevOps Culture",
    description:
      "Merging development and operations into a single continuous lifecycle.",
    routeHref: "/devops",
    routeLabel: "View Record →",
    readings: [
      {
        work: "The DevOps Culture",
        year: "2010s",
        why: "Merging development and operations into a single continuous lifecycle.",
        href: "/devops",
        lineage:
          "Connected code ownership, operations, and feedback loops across the full delivery chain.",
      },
    ],
  },
  {
    key: "practice-xp-tdd",
    eyebrow: "",
    title: "XP & TDD",
    description:
      "High-discipline engineering practices including pair programming and test-first logic.",
    routeHref: "/devops",
    routeLabel: "View Record →",
    readings: [
      {
        work: "XP & TDD",
        year: "2000s",
        why: "High-discipline engineering practices including pair programming and test-first logic.",
        href: "/devops",
        lineage:
          "Improved code quality through tight feedback, disciplined design, and continuous testing.",
      },
    ],
  },
];

export default function Home() {
  useEffect(() => {
    // Force scroll to top on refresh.
    window.scrollTo(0, 0);

    // Clear any hash so the CTA always triggers a scroll action.
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <main className="relative bg-white pt-[100px] flex flex-col">
      <div className="relative z-0 w-full max-w-full overflow-x-hidden font-mono">
        <section
          className="relative block w-full bg-white"
          style={{ paddingBottom: "60px" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex-row-force flex flex-col lg:flex-row gap-12 items-center py-12 lg:py-24">
            <div className="w-1/2 flex flex-col justify-center pr-12 lg:pr-20">
              <p className="font-mono text-xs font-bold tracking-[0.3em] text-slate-500 uppercase mb-4">
                SYSTEMS & ARCHITECTURE LAB
              </p>
              <h1
                aria-label="History of Artificial Intelligence"
                className="brand-gradient-text font-mono text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-6 max-w-xl break-words"
              >
                THE ARCHIVE OF SOFTWARE WORKFLOWS
              </h1>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mt-12">
                <p className="text-slate-300 font-mono text-lg max-w-xl leading-relaxed">
                  Exploring the evolution of the Software Development Life Cycle
                  (SDLC)-from the foundational Waterfall models of the 1970s to
                  the rapid, iterative Agile and DevOps frameworks of the modern
                  era.
                </p>

                <div className="flex w-full justify-end lg:w-auto">
                  <button
                    onClick={() => {
                      const element = document.getElementById("era-records");
                      if (element) {
                        // Keep a visible top offset so the section heading is not clipped.
                        const offset = 100;
                        const bodyRect =
                          document.body.getBoundingClientRect().top;
                        const elementRect = element.getBoundingClientRect().top;
                        const elementPosition = elementRect - bodyRect;
                        const offsetPosition = elementPosition - offset;

                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth",
                        });
                      }
                    }}
                    className="group flex items-center gap-6 bg-transparent text-white font-mono font-bold uppercase tracking-[0.3em] text-xs border-b border-white/20 pb-4 hover:border-[#0F62FE] transition-all duration-500 ml-auto"
                  >
                    <span className="brand-gradient-text transition-opacity group-hover:opacity-80">
                      EXPLORE MORE
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="w-1/2 relative h-[600px] lg:h-[800px]">
              <HeroSlideshow />
            </div>
          </div>
        </section>

        {/* Section 1: THE CHRONOLOGY */}
        <section
          id="era-records"
          className="relative bg-white w-full scroll-mt-24"
          style={{ paddingTop: "60px", paddingBottom: "60px" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="brand-gradient-text font-mono text-4xl font-black uppercase"
              style={{ marginBottom: "30px" }}
            >
              Era Records
            </h2>

            <ReadingClusterGrid items={historyItems} className="mb-20" />
          </div>
        </section>

        {/* Section 2: THE READING MAP */}
        <section
          className="relative bg-white w-full"
          style={{ paddingTop: "60px", paddingBottom: "60px" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="brand-gradient-text font-mono text-4xl font-black uppercase mb-24">
              How Software Led to AI
            </h2>

            <ReadingClusterGrid items={lineageItems} className="mt-12" />
          </div>
        </section>

        <section className="relative w-full min-h-[700px] bg-slate-950 flex items-end pb-32 overflow-hidden">
          {/* 1. THE IMAGE (Must be relative + h-full to show up) */}
          <div className="absolute inset-0 w-full h-full bg-slate-950 z-0">
            <Image
              src="/media/wikimedia/logo.png"
              alt="AI Neural Network"
              fill
              priority
              unoptimized
              className="object-cover object-center opacity-40 z-0"
            />
            {/* 2. THE DIMMER (Cinematic gradient overlay) */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-[1]" />
          </div>

          {/* 3. THE CONTENT (Must have z-index to stay above image) */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="brand-gradient-text font-mono text-5xl lg:text-7xl font-black uppercase leading-[0.85] tracking-tighter mb-8 z-10 relative">
              THE DAWN OF <br /> AI-AUGMENTED DEVELOPMENT
            </h2>
            <p className="text-white font-mono text-sm tracking-wide z-10 relative max-w-xl mb-10 drop-shadow-lg">
              Integrating AI insights to enhance productivity and software
              quality in high-tech environments.
            </p>
            <Link
              href="/waterfall"
              className="inline-flex items-center gap-4 text-white font-mono font-bold uppercase border-2 border-white px-8 py-4 hover:bg-white hover:text-black transition-all"
            >
              Explore the Archive <span>→</span>
            </Link>
          </div>
        </section>

        {/* Section 3: THE TECHNICAL BRIDGE */}
        <section
          className="relative block w-full bg-slate-50"
          style={{
            paddingTop: "60px",
            paddingBottom: "60px",
            borderBottom: "1px solid #e2e8f0",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 bg-transparent">
            <h2 className="brand-gradient-text font-mono text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-6">
              THE EVOLUTION OF DEVELOPMENT WORKFLOWS
            </h2>
            <p className="text-slate-500 font-mono text-lg max-w-3xl mb-10 leading-relaxed text-left">
              From initial research and system analysis to maintenance and
              evolution. This lifecycle represents the industrial standard for
              transforming a conceptual requirement into a high-performance
              software system through structured design and rigorous testing.
            </p>

            <div className="flex justify-end items-end w-full">
              <Link
                href="/waterfall"
                className="group/arrow flex items-center justify-center w-16 h-16 rounded-full border border-slate-200 hover:border-slate-900 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-slate-400 group-hover/arrow:text-slate-900"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <footer className="relative z-0 px-16 pt-12 py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-wide text-gray-500">
            © 2026 MUSEUM OF MODERN LAB
          </span>
          <span className="font-mono text-xs uppercase tracking-wide text-gray-500">
            NJIT IS117 ARCHIVE
          </span>
        </div>
      </footer>
    </main>
  );
}
