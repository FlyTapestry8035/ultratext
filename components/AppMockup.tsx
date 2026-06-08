"use client";

import { motion, useReducedMotion } from "framer-motion";
import { inputs } from "./data";

const sidebarSources = inputs.slice(0, 8);

// Inline context citations the answer pulls from.
const citations = [
  { label: "Email · Acme renewal", color: "#EA4335" },
  { label: "Zoom · QBR call", color: "#2D8CFF" },
  { label: "Stripe · $48k invoice", color: "#635BFF" },
];

const answerLines = [
  "Acme Corp expanded their plan — three signals this week:",
  "• Renewal confirmed by email Tuesday, up 40% in seats.",
  "• On the QBR call they flagged onboarding as the priority.",
  "• Stripe shows a $48,000 invoice paid Thursday.",
];

export default function AppMockup() {
  const reduce = useReducedMotion();

  return (
    <div className="window-chrome relative mx-auto w-full max-w-5xl overflow-hidden text-left">
      {/* title bar */}
      <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]/80" />
        </div>
        <div className="mx-auto flex w-full max-w-md items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-[13px] text-white/45">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="m20 20-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Ask Ultra Text…
        </div>
        <div className="hidden h-6 w-6 items-center justify-center rounded-md bg-white/5 text-[11px] text-white/40 sm:flex">
          ⌘K
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr]">
        {/* left rail: connected sources */}
        <aside className="hidden border-r border-white/[0.06] p-3 sm:block">
          <p className="px-2 pb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/30">
            Connected
          </p>
          <ul className="space-y-0.5">
            {sidebarSources.map((s, i) => (
              <motion.li
                key={s.name}
                initial={reduce ? false : { opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[12.5px] text-white/55 transition-colors hover:bg-white/[0.03]"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: s.color }}
                />
                <span className="truncate">{s.name}</span>
                <span className="ml-auto h-1 w-1 rounded-full bg-emerald-400/70" />
              </motion.li>
            ))}
          </ul>
        </aside>

        {/* main answer panel */}
        <div className="min-h-[300px] p-4 sm:p-6">
          {/* user query */}
          <div className="mb-5 flex justify-end">
            <div className="rounded-2xl rounded-br-sm bg-white/[0.06] px-4 py-2.5 text-[13.5px] text-white/85">
              What changed with Acme Corp this week?
            </div>
          </div>

          {/* assistant answer */}
          <div className="flex gap-3">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-glow">
              <span className="h-2 w-2 rounded-sm bg-white" />
            </div>
            <div className="flex-1">
              {/* citation chips */}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mb-3 flex flex-wrap gap-1.5"
              >
                {citations.map((c) => (
                  <span
                    key={c.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/60"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: c.color }}
                    />
                    {c.label}
                  </span>
                ))}
              </motion.div>

              <div className="space-y-1.5">
                {answerLines.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={reduce ? false : { opacity: 0, y: 4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.18, duration: 0.45 }}
                    className="text-[13.5px] leading-relaxed text-white/70"
                  >
                    {line}
                  </motion.p>
                ))}
                {!reduce && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 1, 0] }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + answerLines.length * 0.18,
                      duration: 1,
                      repeat: 2,
                    }}
                    className="inline-block h-4 w-[2px] translate-y-0.5 bg-white/70"
                  />
                )}
              </div>

              {/* synthesised footer */}
              <motion.div
                initial={reduce ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="mt-5 flex items-center gap-2 border-t border-white/[0.06] pt-3 text-[11px] text-white/35"
              >
                <span className="flex h-1.5 w-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                Synthesised from 3 sources · 0.4s
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
