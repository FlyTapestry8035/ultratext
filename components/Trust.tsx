"use client";

import Reveal from "./Reveal";

const logos = [
  "Northwind",
  "Acme Corp",
  "Lumen",
  "Vertex",
  "Quanta",
  "Foundry",
  "Helio",
  "Cobalt",
];

export default function Trust() {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-white/35">
            Trusted by teams building with AI
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-4">
            {logos.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center text-lg font-semibold tracking-tight text-white/30 grayscale transition-all duration-300 hover:text-white/60"
              >
                {name}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
