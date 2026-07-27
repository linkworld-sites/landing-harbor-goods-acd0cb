"use client";

// The one element no competitor could ship: the hero reads as a live
// terminal session inspecting the product itself — `cat README.md` typing
// out in real time, cursor and all, rather than a static tagline over a photo.
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;
const LINES = ["Built.", "Measured.", "Made to last."];

function TypedLines({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();
  const [lineIdx, setLineIdx] = useState(reduced ? LINES.length : 0);
  const [charIdx, setCharIdx] = useState(reduced ? LINES[LINES.length - 1].length : 0);
  const done = lineIdx >= LINES.length;

  useEffect(() => {
    if (reduced || done) {
      if (done) onDone();
      return;
    }
    const current = LINES[lineIdx];
    if (charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 42);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIdx((l) => l + 1);
      setCharIdx(0);
    }, 260);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIdx, lineIdx, reduced, done]);

  useEffect(() => {
    if (reduced) onDone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <h1 className="font-display text-[clamp(2.75rem,7vw,5rem)] font-bold leading-[0.98] tracking-tight text-white">
      {LINES.map((line, i) => (
        <span key={line} className="block">
          {i < lineIdx ? line : i === lineIdx ? line.slice(0, charIdx) : " "}
          {i === lineIdx && !done && !reduced && (
            <span className="ml-1 inline-block h-[0.85em] w-[0.5ch] translate-y-[0.08em] animate-blink bg-green align-middle" />
          )}
        </span>
      ))}
    </h1>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [subtextReady, setSubtextReady] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const copyY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  return (
    <section
      ref={ref}
      className="scanlines relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-term px-6 pb-16 pt-32 md:px-10 md:pb-0 md:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(57,255,157,0.08),transparent_55%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1fr_0.85fr] md:gap-10">
        <motion.div
          className="max-w-[560px]"
          style={reduced ? undefined : { y: copyY, opacity: copyOpacity }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-green">
            <span aria-hidden>❯ </span>cat README.md — spec no. JM-001
          </p>
          <div className="mt-6">
            <TypedLines onDone={() => setSubtextReady(true)} />
          </div>
          <motion.p
            className="mt-6 max-w-md font-mono text-[13px] leading-relaxed text-white/85"
            initial={reduced ? undefined : { opacity: 0, y: 12 }}
            animate={reduced || subtextReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            Full-grain hides, brass hardware, saddle-stitched by hand.{" "}
            <span className="text-cyan">// every piece indexed like a tool</span> — because it is one.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={reduced ? undefined : { opacity: 0, y: 12 }}
            animate={reduced || subtextReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
          >
            <Link href="/shop" className="group inline-block">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="liquid-glass inline-flex items-center gap-2 rounded-md bg-green/10 px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.14em] text-green transition-colors group-hover:bg-green/20"
              >
                <kbd className="rounded border border-green/40 px-1.5 py-0.5 text-[10px]">⏎</kbd>
                shop
              </motion.span>
            </Link>
            <a href="#ledger" className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-amber">
              <kbd className="rounded border border-white/20 px-1.5 py-0.5 text-[10px] group-hover:border-amber/50">↓</kbd>
              scroll the ledger
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden md:block"
          style={reduced ? undefined : { scale: imgScale }}
          initial={reduced ? undefined : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
        >
          <div className="liquid-glass overflow-hidden rounded-lg border border-line">
            <div className="flex items-center gap-1.5 border-b border-line bg-surface px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-magenta/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green/70" />
              <span className="ml-2 font-mono text-[10px] text-muted">weekender.jpg</span>
            </div>
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/hero.png"
                alt="A full-grain leather weekender bag on a neutral surface in raking window light"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-term/70 via-cyan/[0.06] to-transparent mix-blend-multiply" />
            </div>
            <div className="border-t border-line bg-surface px-3 py-2 font-mono text-[10px] text-muted">
              <span className="text-cyan">1600×2000</span> · full-grain vachetta · raking window light
            </div>
          </div>
        </motion.div>
      </div>

      {!reduced && (
        <motion.div
          className="absolute inset-x-0 bottom-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="font-mono text-[11px] text-white/40"
          >
            ❯ _
          </motion.span>
        </motion.div>
      )}
    </section>
  );
}
