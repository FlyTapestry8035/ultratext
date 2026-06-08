"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { inputs, outputs } from "./data";

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
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/35">
            Live context
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-gradient sm:text-5xl">
            Everything your business knows,
            <br className="hidden sm:block" /> in one understanding.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="window-chrome relative overflow-hidden">
            {/* title bar */}
            <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]/80" />
              </div>
              <span className="text-[12.5px] text-white/40">
                Context graph · live
              </span>
            </div>

            <div className="relative p-3 sm:p-6">
              <FlowGraph />

              {/* legend */}
              <div className="relative mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-2 pb-1 text-xs text-white/40 sm:mt-5">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/50" /> Sources
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" /> Ultra Text
                  context layer
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />{" "}
                  Destinations
                </span>
              </div>
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
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.32" />
        </linearGradient>
        <linearGradient id="lineOut" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8a96e8" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#8a96e8" stopOpacity="0.04" />
        </linearGradient>
        <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#cfcfd6" />
          <stop offset="100%" stopColor="#8e8e98" />
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
        <circle key={`id-${i}`} r={3} fill="#e4e4e8">
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
        <circle key={`od-${j}`} r={3.5} fill="#b3bbf0">
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
              fill="rgba(138,150,232,0.07)"
              stroke="rgba(138,150,232,0.28)"
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
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.25)"
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
        fill="#0a0a0a"
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
        fill="rgba(10,10,10,0.85)"
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
