"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "index", label: "The Object Index", n: "01" },
  { id: "craft", label: "Craft Rows", n: "02" },
  { id: "ledger", label: "The Patina Ledger", n: "03" },
  { id: "numbers", label: "In Numbers", n: "04" },
  { id: "voice", label: "Client Voice", n: "05" },
  { id: "heritage", label: "Heritage", n: "06" },
  { id: "visit", label: "Visit / Order", n: "07" },
];

export function Nav() {
  return (
    <>
      <div
        className="fixed left-6 top-6 z-50 md:left-10 md:top-8"
        style={{ mixBlendMode: "difference" }}
      >
        <Link
          href="/"
          className="font-display text-[15px] italic tracking-tight text-white"
        >
          Harbor Goods
        </Link>
      </div>

      <div
        className="fixed right-6 top-6 z-50 md:right-10 md:top-8"
        style={{ mixBlendMode: "difference" }}
      >
        <Link
          href="/blog"
          className="group relative text-[11px] uppercase tracking-[0.22em] text-white/85"
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
            <span className="text-[10px] tracking-widest2">{s.label}</span>
            <span className="text-[10px] tabular-nums">{s.n}</span>
          </motion.a>
        ))}
      </nav>
    </>
  );
}
