"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const W = 1000;
const H = 560;

// entity nodes arranged in a graph around a center hub
const nodes = [
  { id: "core", label: "Ultra Text", x: 500, y: 280, r: 58, core: true },
  { id: "people", label: "People", x: 200, y: 110, r: 40 },
  { id: "customers", label: "Customers", x: 770, y: 120, r: 44 },
  { id: "projects", label: "Projects", x: 850, y: 320, r: 42 },
  { id: "revenue", label: "Revenue", x: 700, y: 470, r: 42 },
  { id: "documents", label: "Documents", x: 300, y: 470, r: 46 },
  { id: "meetings", label: "Meetings", x: 130, y: 320, r: 42 },
  { id: "decisions", label: "Decisions", x: 480, y: 90, r: 42 },
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

const edges: [string, string][] = [
  ["core", "people"],
  ["core", "customers"],
  ["core", "projects"],
  ["core", "revenue"],
  ["core", "documents"],
  ["core", "meetings"],
  ["core", "decisions"],
  // cross links to form a real graph
  ["people", "meetings"],
  ["people", "decisions"],
  ["customers", "revenue"],
  ["customers", "projects"],
  ["projects", "revenue"],
  ["documents", "meetings"],
  ["decisions", "customers"],
];

export default function Solution() {
  return (
    <section id="solution" className="relative px-6 py-28 sm:py-36">
      <div className="bg-field absolute inset-0 -z-10 opacity-50" />
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-gradient sm:text-6xl">
            Give AI complete context.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-white/45">
            Ultra Text weaves every system into a single, living understanding
            of your business — people, customers, projects, revenue, and the
            decisions that connect them.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="window-chrome relative mt-14 overflow-hidden p-2 sm:p-6">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="h-auto w-full"
              role="img"
              aria-label="Knowledge graph connecting People, Customers, Projects, Revenue, Documents, Meetings and Decisions through Ultra Text."
            >
              <defs>
                <radialGradient id="kgCore" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#b3bbf0" />
                  <stop offset="100%" stopColor="#6b78d6" />
                </radialGradient>
                <filter id="kgGlow" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="5" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* edges */}
              {edges.map(([a, b], i) => {
                const na = byId[a];
                const nb = byId[b];
                return (
                  <motion.line
                    key={`e-${i}`}
                    x1={na.x}
                    y1={na.y}
                    x2={nb.x}
                    y2={nb.y}
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth={1.25}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.06 }}
                  />
                );
              })}

              {/* pulse particles along the core edges */}
              {edges
                .filter(([a]) => a === "core")
                .map(([, b], i) => {
                  const nb = byId[b];
                  return (
                    <motion.circle
                      key={`p-${i}`}
                      r={3}
                      fill="#e4e4e8"
                      initial={{ cx: 500, cy: 280, opacity: 0 }}
                      whileInView={{
                        cx: [500, nb.x],
                        cy: [280, nb.y],
                        opacity: [0, 1, 0],
                      }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 2.4,
                        delay: i * 0.3,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut",
                      }}
                    />
                  );
                })}

              {/* nodes */}
              {nodes.map((n, i) => (
                <motion.g
                  key={n.id}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: n.core ? 0 : 0.3 + i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                >
                  {n.core ? (
                    <>
                      <circle
                        cx={n.x}
                        cy={n.y}
                        r={n.r}
                        fill="url(#kgCore)"
                        filter="url(#kgGlow)"
                      />
                      <circle
                        cx={n.x}
                        cy={n.y}
                        r={n.r}
                        fill="none"
                        stroke="rgba(255,255,255,0.35)"
                      />
                    </>
                  ) : (
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={n.r}
                      fill="rgba(255,255,255,0.04)"
                      stroke="rgba(255,255,255,0.14)"
                    />
                  )}
                  <text
                    x={n.x}
                    y={n.y + 4.5}
                    textAnchor="middle"
                    fill={n.core ? "#fff" : "rgba(255,255,255,0.82)"}
                    fontSize={n.core ? 17 : 13.5}
                    fontWeight={n.core ? 700 : 500}
                    fontFamily="var(--font-inter), sans-serif"
                  >
                    {n.label}
                  </text>
                </motion.g>
              ))}
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
