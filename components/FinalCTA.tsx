"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section id="cta" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="glass-strong relative overflow-hidden rounded-[2rem] px-8 py-20 text-center sm:px-16 sm:py-28">
          <div className="bg-field absolute inset-0 opacity-80" />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-40 -z-0 opacity-40"
            style={{
              background:
                "conic-gradient(from 0deg, transparent, rgba(124,140,255,0.25), transparent 40%)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative">
            <Reveal>
              <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-gradient sm:text-6xl">
                Stop giving AI partial information.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-white/55">
                Connect your business once. Power every AI forever.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[15px] font-medium text-black transition-transform hover:scale-[1.03] active:scale-95"
                >
                  Start Free
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
                <a
                  href="#"
                  className="group glass inline-flex items-center gap-2 rounded-full px-8 py-4 text-[15px] font-medium text-white/85 transition-colors hover:text-white"
                >
                  Book Demo
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
