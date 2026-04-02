import Link from "next/link";

export default function Home() {
  return (
    <div className="relative z-0 flex min-h-screen w-full flex-col bg-[#FFFFFF] pt-[100px]">
      <section className="relative z-0 flex flex-1 px-16 py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center">
          <h1 className="bg-gradient-to-r from-[#002366] to-[#9D4EDD] bg-clip-text font-mono text-6xl font-black uppercase tracking-tighter text-transparent">
            THE AI HISTORY ARCHIVE: MUSEUM OF MODERN LAB
          </h1>

          <p className="mt-8 max-w-3xl font-mono text-xl text-[#334155]">
            Tracing the evolution of intelligence from Waterfall to the Future
            of AI.
          </p>

          <div className="mt-20 flex justify-end">
            <Link
              href="/eras/precursors-to-machine-intelligence"
              className="rounded-none bg-[#002366] px-12 py-6 font-mono text-lg font-bold uppercase tracking-wider text-white"
            >
              EXPLORE MORE
            </Link>
          </div>
        </div>
      </section>

      <footer className="relative z-0 flex items-center justify-between border-t-2 border-gray-100 px-16 py-8">
        <span className="font-mono text-xs uppercase tracking-wide text-gray-500">
          © 2026 MUSEUM OF MODERN LAB
        </span>
        <span className="font-mono text-xs uppercase tracking-wide text-gray-500">
          NJIT IS117 ARCHIVE
        </span>
      </footer>
    </div>
  );
}
