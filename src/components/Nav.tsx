"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "ledger", label: "Patina Ledger", n: "01" },
  { id: "proof", label: "Spec Compliance", n: "02" },
  { id: "numbers", label: "In Numbers", n: "03" },
  { id: "process", label: "The Process", n: "04" },
  { id: "order", label: "Order", n: "05" },
];

export function Nav() {
  return (
    <>
      <div
        className="fixed left-6 top-6 z-50 flex items-baseline gap-2 md:left-10 md:top-8"
        style={{ mixBlendMode: "difference" }}
      >
        <Link
          href="/"
          className="font-mono text-[13px] font-medium uppercase tracking-[0.1em] text-white"
        >
          Harbor Goods
        </Link>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
          Est. No. 004
        </span>
      </div>

      <div
        className="fixed right-6 top-6 z-50 flex items-center gap-6 md:right-10 md:top-8"
        style={{ mixBlendMode: "difference" }}
      >
        <Link
          href="/shop"
          className="group relative font-mono text-[11px] uppercase tracking-[0.22em] text-white/85"
        >
          Shop
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-200 group-hover:w-full" />
        </Link>
        <Link
          href="/blog"
          className="group relative font-mono text-[11px] uppercase tracking-[0.22em] text-white/85"
        >
          Journal
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-200 group-hover:w-full" />
        </Link>
      </div>

      <nav
        className="pointer-events-none fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 xl:flex"
        style={{ mixBlendMode: "difference" }}
        aria-label="Section index"
      >
        {SECTIONS.map((s, i) => (
          <motion.a
            key={s.id}
            href={`#${s.id}`}
            className="pointer-events-auto flex items-center gap-2 text-white/60 transition-colors hover:text-white"
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.03 }}
          >
            <span className="font-mono text-[10px] uppercase tracking-widest2">{s.label}</span>
            <span className="font-mono text-[10px] tabular-nums">{s.n}</span>
          </motion.a>
        ))}
      </nav>
    </>
  );
}
