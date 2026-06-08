"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const links = [
  { label: "Product", href: "#demo" },
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Vision", href: "#vision" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-6 ${
          scrolled ? "glass-strong shadow-2xl shadow-black/40" : "border border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-glow shadow-lg shadow-accent/30">
            <span className="h-2.5 w-2.5 rounded-sm bg-white" />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            Ultra Text
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/55 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#cta"
            className="hidden text-sm text-white/70 transition-colors hover:text-white sm:block"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-[1.03] active:scale-95"
          >
            Get Started
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
