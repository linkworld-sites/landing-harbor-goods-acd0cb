"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { WordStagger } from "@/components/Reveal";

const LEGAL_LINKS = [
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/cookies", label: "Cookies" },
];

export function SplitCTA() {
  return (
    <section id="order" className="relative overflow-hidden bg-term px-6 pb-16 pt-28 md:px-10 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 select-none whitespace-nowrap font-display text-[14vw] font-bold leading-none text-white/[0.05]"
      >
        <span className="inline-block shrink-0 animate-marquee-left" style={{ animationDuration: "38s" }}>
          HARBOR GOODS · HARBOR GOODS ·{" "}
        </span>
        <span className="inline-block shrink-0 animate-marquee-left" style={{ animationDuration: "38s" }}>
          HARBOR GOODS · HARBOR GOODS ·{" "}
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-green">
          <span aria-hidden>❯ </span>order --confirm
        </p>
        <div className="mt-6">
          <WordStagger
            text="Own one thing. Own it forever."
            className="justify-center font-display text-[clamp(2.25rem,6vw,4rem)] font-bold leading-[1.02] tracking-tight text-white"
          />
        </div>
        <p className="mx-auto mt-6 max-w-md font-mono text-[13px] leading-relaxed text-white/60">
          Four pieces, built once. No seasonal drops, no successors — just the
          object and the workshop behind it.
        </p>

        <div className="mt-10">
          <Link href="/shop" className="group inline-flex items-center gap-2">
            <motion.span
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="border-b border-amber pb-1 font-mono text-[15px] uppercase tracking-[0.1em] text-amber"
            >
              Shop the collection
            </motion.span>
            <motion.span whileHover={{ x: 6 }} transition={{ duration: 0.2 }} className="text-amber">
              →
            </motion.span>
          </Link>
        </div>
      </div>

      <footer className="relative z-10 mx-auto mt-32 flex max-w-6xl flex-col items-center gap-4 border-t border-line px-2 py-8 font-mono text-[11px] uppercase tracking-[0.14em] text-muted md:flex-row md:justify-between">
        <span>Harbor Goods — Est. Workshop</span>
        <nav className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/shop" className="transition-colors hover:text-green">Shop</Link>
          <Link href="/blog" className="transition-colors hover:text-green">Journal</Link>
          {LEGAL_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-green">
              {l.label}
            </Link>
          ))}
        </nav>
      </footer>
    </section>
  );
}
