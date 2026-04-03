"use client";

import { KeyboardEvent, useEffect, useRef, useState } from "react";

import { TypewriterText } from "@/components/content/typewriter-text";

export default function WaterfallPage() {
  const phases = [
    {
      id: "reqs",
      label: "01_REQS",
    },
    {
      id: "analysis",
      label: "02_ANALYSIS",
    },
    {
      id: "design",
      label: "03_DESIGN",
    },
    {
      id: "impl",
      label: "04_IMPLEMENTATION",
    },
    {
      id: "test",
      label: "05_TESTING",
    },
    {
      id: "dep",
      label: "06_DEPLOYMENT",
    },
    {
      id: "maint",
      label: "07_MAINTENANCE",
    },
  ];

  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "> INITIALIZING TURING_TEST_PROMPT...",
  ]);
  const terminalOutputRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (terminalOutputRef.current) {
      terminalOutputRef.current.scrollTop =
        terminalOutputRef.current.scrollHeight;
    }
  }, [terminalLines]);

  const handleTerminalSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") {
      return;
    }

    const submittedText = terminalInput.trim();

    if (!submittedText) {
      return;
    }

    setTerminalLines((previous) => [...previous, `> USER: ${submittedText}`]);
    setTerminalInput("");

    window.setTimeout(() => {
      setTerminalLines((previous) => [
        ...previous,
        "> ANALYZING... VERDICT: UNKNOWN. HUMANITY PROBABILITY: 48%.",
      ]);
    }, 850);
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-white font-mono text-zinc-900">
      <section className="grid h-screen w-full grid-cols-[1.2fr_1.5fr_0.8fr] gap-12 overflow-hidden px-12 pt-24">
        <div className="flex h-[85vh] flex-col justify-between">
          <div>
            <h1 className="text-wave mb-6 text-[clamp(2.2rem,5.2vh,4.2rem)] font-mono font-black uppercase leading-tight">
              <TypewriterText text="WHAT IS THE WATERFALL METHOD?" />
            </h1>
          </div>

          <p className="max-w-md font-mono text-[clamp(0.9rem,1.6vh,1.1rem)] leading-relaxed text-zinc-600">
            A linear, sequential software development life cycle model where
            each phase must be completed before the next begins. Data flows
            downhill in a logical progression from initial requirements to
            long-term maintenance.
          </p>
        </div>

        <div className="flex h-full flex-col justify-center">
          <p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.26em] text-zinc-700">
            EXHIBIT ARTIFACT_01: TURING_TEST_SIMULATOR
          </p>

          <div className="turing-terminal relative flex h-[50vh] max-h-[75vh] flex-col overflow-hidden rounded-lg border-4 border-zinc-300 bg-zinc-950 p-6 font-mono text-[11px] text-emerald-400 shadow-2xl after:pointer-events-none after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/5 after:to-transparent after:content-['']">
            <div className="mb-3 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            </div>

            <p className="mb-3 border-b border-emerald-300/30 pb-3 text-[10px] tracking-wide text-emerald-300">
              OFFICIAL ALAN TURING ARCHIVE INTERFACE - UNIT 01
            </p>

            <div
              ref={terminalOutputRef}
              className="flicker-text mb-3 flex-1 overflow-y-auto pr-1 font-mono text-[11px] leading-relaxed text-emerald-400"
            >
              {terminalLines.map((line, index) => (
                <p key={`${line}-${index}`}>{line}</p>
              ))}
            </div>

            <div className="flicker-text mt-auto flex items-center text-emerald-400">
              <span className="mr-2 shrink-0 text-sm">&gt;</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(event) => setTerminalInput(event.target.value)}
                onKeyDown={handleTerminalSubmit}
                className="w-full border-none bg-transparent font-mono text-[11px] text-emerald-400 caret-emerald-400 outline-none"
                aria-label="Enter a prompt for the Turing Test artifact"
                placeholder="Enter response..."
              />
            </div>

            <div
              className="terminal-scan-overlay pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>

        <div
          className="flex flex-col h-[85vh] w-full items-end justify-center py-10 pr-10"
          style={{
            background:
              "linear-gradient(to bottom, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)",
          }}
        >
          <div className="grid h-full w-full grid-rows-7 justify-items-end">
            {phases.map((phase) => {
              return (
                <div
                  key={phase.id}
                  className="bg-transparent h-full w-[45vw] flex items-center justify-start px-10 border-b border-white/5"
                >
                  <span className="font-mono text-white text-[14px] font-black tracking-widest drop-shadow-md">
                    {phase.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
