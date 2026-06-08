"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const inputs = [
  { name: "Gmail", color: "#EA4335" },
  { name: "Slack", color: "#E01E5A" },
  { name: "Google Drive", color: "#1FA463" },
  { name: "Google Workspace", color: "#4285F4" },
  { name: "Microsoft 365", color: "#D83B01" },
  { name: "Calendar", color: "#34A853" },
  { name: "Zoom", color: "#2D8CFF" },
  { name: "QuickBooks", color: "#2CA01C" },
  { name: "Stripe", color: "#635BFF" },
  { name: "Notion", color: "#E6E6E6" },
  { name: "HubSpot", color: "#FF7A59" },
  { name: "ChatGPT", color: "#10A37F" },
  { name: "Claude", color: "#D97757" },
  { name: "Gemini", color: "#8E7BEF" },
];

const outputs = [
  "AI Agents",
  "Chatbots",
  "Automations",
  "Workflows",
  "Executives",
  "Teams",
];

const W = 1200;
const H = 780;
const CENTER = { x: 600, y: 390 };

const leftTop = 30;
const leftBottom = 750;
const inStep = (leftBottom - leftTop) / (inputs.length - 1);

const rightTop = 90;
const rightBottom = 690;
const outStep = (rightBottom - rightTop) / (outputs.length - 1);

const inputY = (i: number) => leftTop + i * inStep;
const outputY = (j: number) => rightTop + j * outStep;

const inputPath = (i: number) => {
  const y = inputY(i);
  return `M250,${y} C 372,${y} 408,${CENTER.y} 510,${CENTER.y}`;
};

const outputPath = (j: number) => {
  const y = outputY(j);
  return `M690,${CENTER.y} C 802,${CENTER.y} 838,${y} 950,${y}`;
};

export default function ProductDemo() {
  return (
    <section id="demo" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 text-center sm:mb-14">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-soft/70">
            Live context
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-gradient sm:text-5xl">
            Everything your business knows,
            <br className="hidden sm:block" /> in one understanding.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-strong relative overflow-hidden rounded-3xl p-3 shadow-2xl shadow-black/50 sm:p-6">
            <div className="bg-field pointer-events-none absolute inset-0 opacity-60" />
            <div className="relative">
              <FlowGraph />
            </div>

            {/* legend */}
            <div className="relative mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-2 pb-1 text-xs text-white/40 sm:mt-5">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Sources
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" /> Ultra Text
                context layer
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />{" "}
                Destinations
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-8 max-w-xl text-center">
          <p className="text-white/45">
            Fourteen systems. One living context layer. Understood by every model.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function FlowGraph() {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full"
      role="img"
      aria-label="Data from Gmail, Slack, Google Drive, Microsoft 365, Stripe, QuickBooks, Notion, HubSpot, ChatGPT, Claude and more flowing into Ultra Text and out to AI agents, chatbots, automations, workflows, executives and teams."
    >
      <defs>
        <linearGradient id="lineIn" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7c8cff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#7c8cff" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="lineOut" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0.05" />
        </linearGradient>
        <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#9aa6ff" />
          <stop offset="60%" stopColor="#5b6cff" />
          <stop offset="100%" stopColor="#3a47d6" />
        </radialGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* input connections */}
      {inputs.map((_, i) => (
        <path
          key={`ip-${i}`}
          id={`ipath-${i}`}
          d={inputPath(i)}
          fill="none"
          stroke="url(#lineIn)"
          strokeWidth={1.25}
        />
      ))}

      {/* output connections */}
      {outputs.map((_, j) => (
        <path
          key={`op-${j}`}
          id={`opath-${j}`}
          d={outputPath(j)}
          fill="none"
          stroke="url(#lineOut)"
          strokeWidth={1.5}
        />
      ))}

      {/* traveling particles (inputs -> core) */}
      {inputs.map((src, i) => (
        <circle key={`id-${i}`} r={3} fill="#a5b0ff">
          <animateMotion
            dur={`${2.6 + (i % 4) * 0.35}s`}
            begin={`${(i * 0.22).toFixed(2)}s`}
            repeatCount="indefinite"
          >
            <mpath href={`#ipath-${i}`} />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.1;0.85;1"
            dur={`${2.6 + (i % 4) * 0.35}s`}
            begin={`${(i * 0.22).toFixed(2)}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* traveling particles (core -> outputs) */}
      {outputs.map((_, j) => (
        <circle key={`od-${j}`} r={3.5} fill="#5eead4">
          <animateMotion
            dur={`${2.2 + (j % 3) * 0.4}s`}
            begin={`${(j * 0.3 + 0.4).toFixed(2)}s`}
            repeatCount="indefinite"
          >
            <mpath href={`#opath-${j}`} />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.1;0.85;1"
            dur={`${2.2 + (j % 3) * 0.4}s`}
            begin={`${(j * 0.3 + 0.4).toFixed(2)}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* input pills */}
      {inputs.map((src, i) => {
        const y = inputY(i);
        return (
          <g key={`in-${i}`}>
            <rect
              x={40}
              y={y - 17}
              width={210}
              height={34}
              rx={17}
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth={1}
            />
            <circle cx={66} cy={y} r={5} fill={src.color} />
            <text
              x={84}
              y={y + 4.5}
              fill="rgba(255,255,255,0.78)"
              fontSize={14}
              fontWeight={500}
              fontFamily="var(--font-inter), sans-serif"
            >
              {src.name}
            </text>
          </g>
        );
      })}

      {/* output pills */}
      {outputs.map((name, j) => {
        const y = outputY(j);
        return (
          <g key={`out-${j}`}>
            <rect
              x={950}
              y={y - 19}
              width={210}
              height={38}
              rx={19}
              fill="rgba(52,211,153,0.06)"
              stroke="rgba(52,211,153,0.22)"
              strokeWidth={1}
            />
            <text
              x={1055}
              y={y + 5}
              textAnchor="middle"
              fill="rgba(255,255,255,0.9)"
              fontSize={15}
              fontWeight={500}
              fontFamily="var(--font-inter), sans-serif"
            >
              {name}
            </text>
          </g>
        );
      })}

      {/* core node */}
      <g filter="url(#glow)">
        <motion.circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={92}
          fill="rgba(124,140,255,0.06)"
          stroke="rgba(124,140,255,0.3)"
          strokeWidth={1}
          animate={{ r: [92, 100, 92], opacity: [0.6, 0.25, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </g>
      <circle
        cx={CENTER.x}
        cy={CENTER.y}
        r={70}
        fill="url(#coreGrad)"
        opacity={0.95}
      />
      <circle
        cx={CENTER.x}
        cy={CENTER.y}
        r={70}
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth={1}
      />
      <text
        x={CENTER.x}
        y={CENTER.y - 4}
        textAnchor="middle"
        fill="#fff"
        fontSize={22}
        fontWeight={700}
        letterSpacing="-0.5"
        fontFamily="var(--font-inter), sans-serif"
      >
        ULTRA
      </text>
      <text
        x={CENTER.x}
        y={CENTER.y + 22}
        textAnchor="middle"
        fill="rgba(255,255,255,0.9)"
        fontSize={22}
        fontWeight={700}
        letterSpacing="-0.5"
        fontFamily="var(--font-inter), sans-serif"
      >
        TEXT
      </text>
    </svg>
  );
}
