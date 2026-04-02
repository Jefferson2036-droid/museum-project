import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-full overflow-x-hidden font-mono">
      <div className="relative z-0 flex min-h-screen w-full max-w-full flex-col bg-[#FFFFFF] pt-[100px]">
        <section className="relative z-0 flex max-w-full flex-1">
          <div className="h-screen w-full flex items-center justify-center overflow-hidden px-16 pt-20 pb-10">
            <div className="grid grid-cols-[1.4fr_1fr] gap-12 items-center w-full max-w-7xl">
              <div>
                <div className="mb-6 text-[14px] font-mono tracking-[0.3em] text-slate-400">
                  <span className="block">CATALOG NO: IS117-2026</span>
                  <span className="block mt-2">EST. 2026 // NEWARK, NJ</span>
                </div>

                <h1 className="mb-8 break-words bg-gradient-to-r from-[#0047AB] via-[#9D4EDD] to-[#0047AB] bg-[length:200%_auto] bg-clip-text font-mono text-[5.5rem] font-black uppercase leading-[0.85] tracking-[-0.04em] text-transparent animate-[colorShift_10s_ease_infinite]">
                  THE AI HISTORY ARCHIVE: MUSEUM OF MODERN LAB
                </h1>

                <p className="mb-10 max-w-2xl text-[1.2rem] font-mono leading-relaxed text-black opacity-90">
                  This exhibit traces the evolution of artificial intelligence
                  through decisive paradigm shifts, technical milestones, and
                  institutional turning points. Narrative modules, system
                  diagrams, and archival references will be mapped into a
                  unified modern lab interface across upcoming sprints.
                </p>

                <div className="mt-8 flex w-full justify-start">
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

        <footer className="relative z-0 border-t-2 border-gray-100 px-16 py-8">
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
    </div>
  );
}
