"use client";

import Reveal from "./Reveal";

const caps = [
  {
    title: "Universal Search",
    desc: "Find anything across every connected system.",
  },
  {
    title: "Persistent AI Memory",
    desc: "Context that follows you across models.",
  },
  {
    title: "Daily Briefings",
    desc: "Know what matters without searching.",
  },
  {
    title: "Business Intelligence",
    desc: "Ask questions about your company.",
  },
  {
    title: "Multi-Model Support",
    desc: "Works with GPT, Claude, Gemini, Grok, and local models.",
  },
  {
    title: "Custom Agents",
    desc: "Build agents that understand your business.",
  },
];

export default function Capabilities() {
  return (
    <section className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-accent-soft/70">
            Capabilities
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-gradient sm:text-5xl">
            A complete context platform.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 divide-y divide-white/[0.06] border-y border-white/[0.06] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-3">
          {caps.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.08}>
              <div className="group relative h-full p-8 transition-colors hover:bg-white/[0.02] sm:border-r sm:border-white/[0.06]">
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-accent-soft transition-colors group-hover:bg-accent/15">
                  <span className="text-sm font-semibold">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/45">
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
