"use client";

import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20 text-center"
    >
      <div className="bg-field absolute inset-0 -z-10" />
      <div className="grid-lines absolute inset-0 -z-10" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-5xl flex-col items-center"
      >
        <motion.div variants={item}>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/70">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            The context layer for every AI
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 text-[clamp(2.75rem,9vw,7rem)] font-semibold leading-[0.95] tracking-tightest text-gradient"
        >
          The Context Engine
          <br />
          for AI
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-white/55 sm:text-xl"
        >
          Ultra Text connects your emails, documents, meetings, chats, financial
          systems, and business tools into a living context layer that every AI
          can understand.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#cta"
            className="group relative inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-black transition-transform hover:scale-[1.03] active:scale-95"
          >
            Get Started
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="#demo"
            className="glass inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[15px] font-medium text-white/85 transition-colors hover:text-white"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
              <span className="ml-0.5 h-0 w-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-white" />
            </span>
            Watch Demo
          </a>
        </motion.div>
      </motion.div>

      {/* scroll hint */}
      {!reduce && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1.5">
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1 rounded-full bg-white/50"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
