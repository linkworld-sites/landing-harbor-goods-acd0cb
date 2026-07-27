"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Word-by-word stagger reveal for headlines. Wrap the exact text to split. */
export function WordStagger({
  text,
  className,
  delayStart = 0.15,
  as = "span",
}: {
  text: string;
  className?: string;
  delayStart?: number;
  as?: "span" | "div";
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  const Wrap = as === "div" ? motion.div : motion.span;
  return (
    <Wrap className={`flex flex-wrap gap-x-[0.25em] ${className ?? ""}`}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          initial={reduced ? undefined : { opacity: 0, y: 32 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: EASE,
            delay: delayStart + i * 0.08,
          }}
        >
          {word}
        </motion.span>
      ))}
    </Wrap>
  );
}

/** Simple fade-up on scroll-into-view. The workhorse reveal used site-wide. */
export function FadeUp({
  children,
  delay = 0,
  y = 24,
  className,
  amount = 0.2,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  amount?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? undefined : { opacity: 0, y }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Per-line reveal: each line slides up out of an overflow-hidden mask. */
export function LineReveal({
  lines,
  className,
  lineClassName,
  delayStart = 0,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delayStart?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div key={`${line}-${i}`} className="overflow-hidden">
          <motion.div
            className={lineClassName}
            initial={reduced ? undefined : { y: "112%" }}
            whileInView={reduced ? undefined : { y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
              delay: delayStart + i * 0.12,
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

/** Bottom-up mask-wipe reveal (clip-path), used for editorial rows. */
export function MaskWipe({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? undefined : { clipPath: "inset(100% 0 0 0)", opacity: 0 }}
      whileInView={reduced ? undefined : { clipPath: "inset(0% 0 0 0)", opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/** Scale-down-to-1 + fade reveal, used for the Object Index plates. */
export function ScaleFade({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? undefined : { opacity: 0, scale: 0.9 }}
      whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
