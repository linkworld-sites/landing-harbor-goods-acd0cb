"use client";

// Signature element: the dimension line is drawn stroke-by-stroke on load,
// like a fitter annotating a spec sheet in real time over the product photo —
// no competitor's leather-goods site frames its hero as a measured drawing.
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

function DimensionLine() {
  return (
    <svg
      viewBox="0 0 220 420"
      className="pointer-events-none absolute right-[8%] top-[14%] hidden h-[62%] w-auto md:block"
      fill="none"
    >
      <motion.path
        d="M180 8 L180 412 M180 8 L166 8 M180 412 L166 412"
        stroke="#D9531E"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.6 }}
      />
      <motion.circle
        cx="180"
        cy="210"
        r="2.5"
        fill="#D9531E"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.8 }}
      />
      <motion.text
        x="188"
        y="214"
        fontFamily="var(--font-plex-mono)"
        fontSize="11"
        fill="#F4F1EA"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        style={{ writingMode: "vertical-rl" }}
      >
        H 460MM
      </motion.text>
    </svg>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative flex h-screen w-full flex-col justify-center overflow-hidden bg-ink">
      <motion.div
        className="absolute inset-0"
        style={reduced ? undefined : { scale, y }}
      >
        <Image
          src="/images/hero.png"
          alt="A full-grain leather weekender bag on a neutral surface in raking window light"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

      <DimensionLine />

      <motion.div
        className="relative z-10 max-w-[720px] px-6 md:px-10"
        style={reduced ? undefined : { y: copyY, opacity: copyOpacity }}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-orange">
          Spec Sheet — No. JM-001
        </p>
        <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5rem)] font-bold leading-[0.98] tracking-tight text-white">
          Built.
          <br />
          Measured.
          <br />
          Made to last.
        </h1>
        <p className="mt-6 max-w-md font-mono text-[13px] leading-relaxed text-white/85">
          Full-grain hides, brass hardware, saddle-stitched by hand. Every
          piece indexed like a tool — because it is one.
        </p>
      </motion.div>

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

      <div className="pointer-events-none absolute bottom-8 right-6 hidden font-mono text-[10px] uppercase tracking-[0.22em] text-white/50 md:right-10 lg:block">
        Est. Workshop — Forty Years
      </div>
    </section>
  );
}
