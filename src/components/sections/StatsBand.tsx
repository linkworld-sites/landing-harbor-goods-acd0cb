"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { FadeUp } from "@/components/Reveal";

const STATS = [
  { value: 40, suffix: "", label: "Years, One Workshop" },
  { value: 12, suffix: "", label: "Hours Per Piece" },
  { value: 8, suffix: "", label: "Stitches Per Inch" },
  { value: 100, suffix: "%", label: "Repaired, Not Replaced" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(value * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, value]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function StatsBand() {
  return (
    <section id="numbers" className="relative -mt-16 rounded-t-[2.5rem] bg-blueprint pb-24 pt-24 text-paper md:pt-28">
      <div className="mx-auto max-w-5xl px-6">
        <FadeUp className="mb-14 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50">
            Sec. 03 — In Numbers
          </p>
          <p className="mx-auto mt-3 max-w-md font-display text-lg text-paper/85">
            Every figure below is a build tolerance, not a marketing round-up.
          </p>
        </FadeUp>
        <div className="grid grid-cols-2 divide-y divide-line-dark md:grid-cols-4 md:divide-x md:divide-y-0">
          {STATS.map((s) => (
            <FadeUp key={s.label} className="flex flex-col items-center px-4 py-6 text-center">
              <span className="text-[clamp(2.75rem,6vw,4.5rem)] font-light leading-none text-paper">
                <CountUp value={s.value} suffix={s.suffix} />
              </span>
              <span className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/60">
                {s.label}
              </span>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
