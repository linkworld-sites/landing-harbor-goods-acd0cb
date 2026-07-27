"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FadeUp } from "@/components/Reveal";

const STEPS = [
  { n: "01", title: "Select the hide", body: "Full-grain, vegetable-tanned. Every skin inspected by hand before it's cut." },
  { n: "02", title: "Cut and skive", body: "Panels cut to a fixed pattern, edges skived thin so a seam lies flat forever." },
  { n: "03", title: "Saddle-stitch", body: "Two needles, one waxed thread — a seam that can't unravel from a single break." },
  { n: "04", title: "Inspect and index", body: "Measured, weighed, numbered. Logged against the piece it will become." },
];

export function ProcessSteps() {
  const reduced = useReducedMotion();
  return (
    <section id="process" className="relative bg-term py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="mb-16 md:mb-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="text-green">❯</span> run ./process.sh --verbose
          </p>
          <p className="mt-3 max-w-lg font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold leading-[1.05] tracking-tight text-white">
            Four steps. No shortcuts.
          </p>
        </FadeUp>

        <div className="relative">
          {!reduced && (
            <svg className="pointer-events-none absolute left-0 top-6 hidden h-px w-full md:block" preserveAspectRatio="none">
              <motion.line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="#39ff9d"
                strokeOpacity="0.3"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>
          )}

          <div className="grid gap-12 md:grid-cols-4 md:gap-8">
            {STEPS.map((s, i) => (
              <FadeUp key={s.n} delay={i * 0.08} className="relative">
                <span
                  className="pointer-events-none absolute -top-6 left-0 select-none font-display text-[6rem] font-bold leading-none text-white/[0.06] md:text-[5rem]"
                  aria-hidden
                >
                  {s.n}
                </span>
                <div className="relative pt-16">
                  <p className="font-display text-lg font-semibold text-white">{s.title}</p>
                  <p className="mt-2 font-mono text-[13px] leading-relaxed text-muted">{s.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
