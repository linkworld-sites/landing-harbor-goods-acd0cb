"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0.6]);

  return (
    <section ref={ref} className="relative h-[92vh] w-full overflow-hidden bg-void">
      <motion.div
        className="absolute inset-0"
        style={
          reduced
            ? undefined
            : { scale, y, opacity }
        }
      >
        <Image
          src="/images/hero.png"
          alt="A full-grain leather tote resting on raw linen in natural window light"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-void/25 via-transparent to-transparent" />

      <motion.div
        className="absolute inset-x-0 bottom-8 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          animate={reduced ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-white/70" strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 md:left-10 lg:block">
        <p
          className="text-[11px] tracking-[0.22em] text-white/70"
          style={{ writingMode: "vertical-rl" }}
        >
          EST. ONE WORKSHOP — FORTY YEARS
        </p>
      </div>
    </section>
  );
}

export function HeroStatement() {
  return (
    <section className="relative bg-gallery px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.22em] text-ink/50">
          No. 00 — Entry
        </p>
        <p className="mt-6 font-display text-[clamp(2rem,5vw,3.25rem)] font-light italic leading-[1.15] text-ink">
          Made once. Carried for decades.
        </p>
        <Link
          href="#index"
          className="group mt-8 inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] text-saddle"
        >
          <span className="relative">
            Enter the collection
            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-saddle transition-transform duration-200 ease-linear group-hover:scale-x-100" />
          </span>
        </Link>
      </div>
    </section>
  );
}
