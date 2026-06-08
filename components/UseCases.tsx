"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const cases = [
  { role: "Founder", q: "What changed in the business this week?" },
  { role: "Sales", q: "Summarize every conversation with Acme Corp." },
  { role: "Finance", q: "Explain revenue changes this month." },
  { role: "Operations", q: "What projects are blocked?" },
  { role: "Support", q: "What issues are customers reporting?" },
  { role: "Agent Builder", q: "Give my agent everything it needs to know." },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gradient sm:text-5xl">
            One question away from everything.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.role} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group glass relative h-full overflow-hidden rounded-2xl p-6 transition-colors hover:border-white/15 hover:bg-white/[0.04]"
              >
                <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                    {c.role}
                  </span>
                  <p className="mt-6 text-balance text-xl font-medium leading-snug text-white/90">
                    &ldquo;{c.q}&rdquo;
                  </p>
                  <div className="mt-auto flex items-center gap-2 pt-8 text-sm text-accent-soft/0 transition-colors duration-300 group-hover:text-accent-soft">
                    Ask Ultra Text
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
