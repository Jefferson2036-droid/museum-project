import type { Metadata } from "next";

import ExhibitionCard from "@/components/exhibition/ExhibitionCard";

export const metadata: Metadata = {
  title: "Waterfall: The Linear SDLC",
  description:
    "A focused gallery on the Waterfall method: its phases, artifacts, and institutional setting.",
};

export default function WaterfallEraPage() {
  return (
    <main className="min-h-screen bg-white font-mono text-zinc-900">
      <div className="container px-0 pt-[140px]">
        <header>
          <h1 className="font-mono text-5xl font-black uppercase tracking-tight text-[#002366]">
            WATERFALL
          </h1>
          <p className="mt-6 max-w-3xl font-mono text-lg text-slate-700">
            A linear, sequential software development life cycle model where
            each phase is completed before the next begins. Emphasizes upfront
            specification, handed-off responsibilities, and milestone-driven
            reviews.
          </p>
        </header>

        <section className="mt-12 mb-12">
          <h2 className="font-mono text-2xl font-black uppercase mb-6">
            ERA RECORDS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <ExhibitionCard
                key={`waterfall-era-${i}`}
                category="[CATEGORY LABEL]"
                title="[HEADING]"
                summary="[DESCRIPTION TEXT]"
              />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-mono text-2xl font-black uppercase mb-6">
            STORY CARDS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <ExhibitionCard
                key={`waterfall-story-${i}`}
                category="[CATEGORY LABEL]"
                title="[HEADING]"
                summary="[DESCRIPTION TEXT]"
              />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-mono text-2xl font-black uppercase mb-6">
            INSTITUTIONAL PROFILES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <ExhibitionCard
                key={`waterfall-profile-${i}`}
                category="[CATEGORY LABEL]"
                title="[HEADING]"
                summary="[DESCRIPTION TEXT]"
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
