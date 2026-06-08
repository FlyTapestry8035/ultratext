"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative flex min-h-[80svh] items-center justify-center overflow-hidden px-6 py-32 text-center"
    >
      <div className="bg-field absolute inset-0 -z-10" />
      <div className="grid-lines absolute inset-0 -z-10 opacity-60" />

      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2.5rem,8vw,6rem)] font-semibold leading-[0.98] tracking-tightest"
        >
          <span className="text-white/40">Models change.</span>
          <br />
          <span className="text-shimmer animate-shimmer">Context compounds.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto mt-10 max-w-2xl text-balance text-lg leading-relaxed text-white/50 sm:text-xl"
        >
          The future belongs to the systems that understand your business, not
          the models that process it.
        </motion.p>
      </div>
    </section>
  );
}
