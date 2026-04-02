import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-full overflow-x-hidden">
      <div className="relative z-0 flex min-h-screen w-full max-w-full flex-col bg-[#FFFFFF] pt-[100px]">
        <section className="relative z-0 flex max-w-full flex-1">
          <div className="relative mx-auto w-full max-w-[100vw] px-6 pt-40 pb-20 md:px-12">
            <span className="absolute right-6 top-8 text-[10px] font-mono tracking-[0.5em] text-slate-400 md:right-12">
              CATALOG NO: IS117-2026
            </span>

            <span className="absolute bottom-6 left-6 text-[10px] font-mono tracking-[0.5em] text-slate-400 md:left-12">
              EST. 2026 // NEWARK, NJ
            </span>

            <div className="flex min-h-[60vh] flex-col">
              <h1 className="break-words bg-gradient-to-r from-[#0047AB] via-[#9D4EDD] to-[#0047AB] bg-[length:200%_auto] bg-clip-text font-mono text-[10vw] font-black uppercase leading-[0.8] tracking-tighter text-transparent animate-[colorShift_10s_ease_infinite] md:text-[8vw] lg:text-[6.5vw]">
                THE AI HISTORY ARCHIVE: MUSEUM OF MODERN LAB
              </h1>

              <p className="mt-12 max-w-4xl text-lg font-mono leading-relaxed text-black">
                This exhibit traces the evolution of artificial intelligence
                through decisive paradigm shifts, technical milestones, and
                institutional turning points. Narrative modules, system
                diagrams, and archival references will be mapped into a unified
                modern lab interface across upcoming sprints.
              </p>

              <div className="mt-20 flex w-full justify-end">
                <Link
                  href="/eras/precursors-to-machine-intelligence"
                  className="rounded-none border-2 border-[#0047AB] px-10 py-4 font-mono font-bold uppercase tracking-widest text-[#0047AB] transition-all hover:bg-[#0047AB] hover:text-white"
                >
                  EXPLORE MORE
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="relative z-0 flex flex-wrap items-center justify-between gap-4 border-t-2 border-gray-100 px-6 py-8 md:px-12">
          <span className="font-mono text-xs uppercase tracking-wide text-gray-500">
            © 2026 MUSEUM OF MODERN LAB
          </span>
          <span className="font-mono text-xs uppercase tracking-wide text-gray-500">
            NJIT IS117 ARCHIVE
          </span>
        </footer>
      </div>
    </div>
  );
}
