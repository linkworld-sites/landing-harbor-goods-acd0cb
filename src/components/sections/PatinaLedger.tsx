"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { FadeUp } from "@/components/Reveal";

const STAGES = [
  {
    tick: "01",
    months: "01",
    label: "Month 01",
    note: "Fresh off the bench — the hide is even, matte, unmarked by a single hand.",
    swatch: "#8B5A3C",
    src: "/images/hero.png",
  },
  {
    tick: "06",
    months: "06",
    label: "Month 06",
    note: "The strap darkens where the hand rests. Edges begin to burnish on contact.",
    swatch: "#7A4C33",
    src: "/images/material.png",
  },
  {
    tick: "24",
    months: "24",
    label: "Year 02",
    note: "Creasing sets along the fold lines — the bag now remembers how it's carried.",
    swatch: "#69412C",
    src: "/images/detail.png",
  },
  {
    tick: "96",
    months: "96",
    label: "Year 08",
    note: "Full patina. Deep amber, glass-smooth at the grip — the record of one owner's years.",
    swatch: "#573323",
    src: "/images/process.png",
  },
];

export function PatinaLedger() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(STAGES.length - 1, Math.floor(v * STAGES.length));
    setIndex(next);
  });

  const active = STAGES[index];

  return (
    <section id="ledger" ref={ref} className="relative bg-[#FAFAF7]" style={{ height: reduced ? "auto" : "320vh" }}>
      <div className={reduced ? "px-6 py-24" : "sticky top-0 h-screen w-full overflow-hidden px-6 py-16 md:px-10"}>
        <FadeUp className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50">
            Sec. 01 — The Patina Ledger
          </p>
          <p className="mt-3 max-w-xl font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold leading-[1.05] tracking-tight text-ink">
            One bag. Eight years. Tracked.
          </p>
        </FadeUp>

        <div className="mx-auto mt-8 grid max-w-6xl gap-8 md:grid-cols-[1fr_320px] md:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink/5 md:aspect-[16/10]">
            {reduced ? (
              <div className="grid grid-cols-2 gap-2">
                {STAGES.map((s) => (
                  <div key={s.tick} className="relative aspect-square overflow-hidden">
                    <Image src={s.src} alt={s.note} fill sizes="50vw" className="object-cover" />
                  </div>
                ))}
              </div>
            ) : (
              STAGES.map((s, i) => (
                <motion.div
                  key={s.tick}
                  className="absolute inset-0"
                  animate={{ opacity: i === index ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "linear" }}
                >
                  <Image src={s.src} alt={s.note} fill sizes="60vw" className="object-cover" />
                </motion.div>
              ))
            )}
          </div>

          <div className="flex flex-col justify-center border-t border-line pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <span
              className="h-8 w-8 shrink-0 border border-ink/15"
              style={{ backgroundColor: active.swatch }}
            />
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-orange">
              {active.label}
            </p>
            <p className="mt-3 font-display text-lg font-medium leading-snug text-ink">
              {active.note}
            </p>
          </div>
        </div>

        {!reduced && (
          <div className="mx-auto mt-10 max-w-6xl">
            <div className="tick-rail relative h-6 w-full">
              <div className="absolute inset-x-0 top-0 h-px bg-ink/20" />
            </div>
            <div className="mt-2 flex justify-between font-mono text-[11px] tabular-nums text-ink/50">
              {STAGES.map((s, i) => (
                <span key={s.tick} className={i === index ? "text-orange" : ""}>
                  {s.tick} MO
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
