"use client";

import { ReactNode } from "react";
import Reveal from "./Reveal";

/* ------- mini product mockups for the marquee feature rows ------- */

function SearchMock() {
  const results = [
    { c: "#EA4335", t: "Acme renewal — email", s: "Gmail · 2d ago" },
    { c: "#2D8CFF", t: "QBR call recording", s: "Zoom · 3d ago" },
    { c: "#635BFF", t: "Invoice #1042 paid", s: "Stripe · 4d ago" },
  ];
  return (
    <MockFrame>
      <div className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-2 text-[13px] text-white/45">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="m20 20-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        Acme Corp
      </div>
      <div className="mt-3 space-y-1.5">
        {results.map((r) => (
          <div
            key={r.t}
            className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 transition-colors hover:bg-white/[0.03]"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: r.c }} />
            <span className="text-[13px] text-white/75">{r.t}</span>
            <span className="ml-auto text-[11px] text-white/35">{r.s}</span>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}

function MemoryMock() {
  const items = [
    "Prefers async updates over meetings",
    "Q3 priority: enterprise onboarding",
    "Acme is the largest active account",
  ];
  return (
    <MockFrame>
      <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-white/30">
        Memory · persists across models
      </p>
      <div className="space-y-2.5">
        {items.map((t, i) => (
          <div key={t} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {i < items.length - 1 && <span className="my-0.5 w-px flex-1 bg-white/10" />}
            </div>
            <span className="pb-1 text-[13px] text-white/70">{t}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-1.5">
        {["GPT", "Claude", "Gemini"].map((m) => (
          <span
            key={m}
            className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-[10px] text-white/45"
          >
            {m}
          </span>
        ))}
      </div>
    </MockFrame>
  );
}

function BriefingMock() {
  const lines = [
    { t: "Revenue up 12% week over week", c: "bg-emerald-400/70" },
    { t: "2 deals moved to closing", c: "bg-accent" },
    { t: "1 project flagged as blocked", c: "bg-amber-400/70" },
  ];
  return (
    <MockFrame>
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-medium text-white/80">Morning briefing</p>
        <span className="text-[11px] text-white/35">Today · 8:00</span>
      </div>
      <div className="mt-3 space-y-2">
        {lines.map((l) => (
          <div
            key={l.t}
            className="flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2"
          >
            <span className={`h-1.5 w-1.5 rounded-full ${l.c}`} />
            <span className="text-[12.5px] text-white/70">{l.t}</span>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}

function MockFrame({ children }: { children: ReactNode }) {
  return (
    <div className="window-chrome w-full p-4 sm:p-5">
      <div className="mb-3 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      </div>
      {children}
    </div>
  );
}

const features = [
  {
    title: "Universal Search",
    desc: "Find anything across every connected system.",
    mock: <SearchMock />,
  },
  {
    title: "Persistent AI Memory",
    desc: "Context that follows you across models.",
    mock: <MemoryMock />,
  },
  {
    title: "Daily Briefings",
    desc: "Know what matters without searching.",
    mock: <BriefingMock />,
  },
];

const more = [
  { title: "Business Intelligence", desc: "Ask questions about your company." },
  {
    title: "Multi-Model Support",
    desc: "Works with GPT, Claude, Gemini, Grok, and local models.",
  },
  { title: "Custom Agents", desc: "Build agents that understand your business." },
];

export default function Capabilities() {
  return (
    <section className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/35">
            Capabilities
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-gradient sm:text-5xl">
            A complete context platform.
          </h2>
        </Reveal>

        {/* alternating feature rows */}
        <div className="mt-16 space-y-16 sm:space-y-24">
          {features.map((f, i) => (
            <Reveal key={f.title}>
              <div
                className={`grid items-center gap-8 sm:grid-cols-2 sm:gap-14 ${
                  i % 2 === 1 ? "sm:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent-soft/70">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {f.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-[17px] leading-relaxed text-white/50">
                    {f.desc}
                  </p>
                </div>
                <div>{f.mock}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* compact grid for the rest */}
        <div className="mt-20 grid grid-cols-1 divide-y divide-white/[0.06] border-y border-white/[0.06] sm:grid-cols-3 sm:divide-y-0">
          {more.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="group h-full p-8 transition-colors hover:bg-white/[0.02] sm:border-r sm:border-white/[0.06] sm:last:border-r-0">
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
