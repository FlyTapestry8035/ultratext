"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

const islands = [
  { label: "Emails", x: "8%", y: "14%", d: 0 },
  { label: "Meetings", x: "70%", y: "8%", d: 0.4 },
  { label: "Files", x: "40%", y: "30%", d: 0.8 },
  { label: "Revenue", x: "82%", y: "44%", d: 0.2 },
  { label: "Customers", x: "14%", y: "58%", d: 0.6 },
  { label: "Projects", x: "58%", y: "66%", d: 1.0 },
  { label: "Messages", x: "30%", y: "82%", d: 0.5 },
];

export default function Problem() {
  const reduce = useReducedMotion();

  return (
    <section id="problem" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-gradient sm:text-6xl">
            Your AI only sees fragments.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-white/45">
            Information is trapped across dozens of disconnected systems. So
            every answer is a guess built on missing context.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-14 h-[420px] w-full overflow-hidden rounded-3xl border border-white/5 bg-ink-900/40 sm:h-[460px]">
            <div className="grid-lines absolute inset-0 opacity-50" />

            {/* lonely AI in the middle, unable to connect */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-strong flex flex-col items-center gap-1 rounded-2xl px-6 py-4 text-center"
              >
                <span className="text-xs uppercase tracking-widest text-white/40">
                  AI
                </span>
                <span className="text-sm text-white/70">
                  &ldquo;I don&rsquo;t have enough
                  <br />
                  context to answer.&rdquo;
                </span>
              </motion.div>
            </div>

            {/* scattered islands */}
            {islands.map((it) => (
              <motion.div
                key={it.label}
                style={{ left: it.x, top: it.y }}
                className="absolute"
                animate={
                  reduce
                    ? undefined
                    : { y: [0, -8, 0], x: [0, 4, 0] }
                }
                transition={{
                  duration: 6 + it.d * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: it.d,
                }}
              >
                <div className="glass flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm text-white/55">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
                  {it.label}
                </div>
              </motion.div>
            ))}

            {/* fading "broken" dashed connectors */}
            <svg className="absolute inset-0 h-full w-full" aria-hidden>
              <line
                x1="20%"
                y1="22%"
                x2="48%"
                y2="48%"
                stroke="rgba(248,113,113,0.18)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />
              <line
                x1="62%"
                y1="64%"
                x2="52%"
                y2="52%"
                stroke="rgba(248,113,113,0.18)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />
              <line
                x1="78%"
                y1="44%"
                x2="54%"
                y2="50%"
                stroke="rgba(248,113,113,0.18)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
