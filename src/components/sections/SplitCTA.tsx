"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/Reveal";

const LEGAL_LINKS = [
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/cookies", label: "Cookies" },
];

export function SplitCTA() {
  return (
    <section id="order" className="relative bg-paper px-4 pb-16 pt-4 md:px-8 md:pb-24">
      <FadeUp>
        <div className="grid overflow-hidden rounded-3xl bg-ink text-paper md:grid-cols-2">
          <div className="flex flex-col justify-center gap-6 px-8 py-16 md:px-14 md:py-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-orange">
              Sec. 05 — Order
            </p>
            <p className="font-display text-[clamp(2.25rem,4vw,3.25rem)] font-bold leading-[1.02] tracking-tight text-white">
              Own one thing.
              <br />
              Own it forever.
            </p>
            <p className="max-w-sm font-mono text-[13px] leading-relaxed text-paper/70">
              Four pieces, built once. No seasonal drops, no successors — just
              the object and the workshop behind it.
            </p>
            <Link href="/shop" className="group inline-block w-fit">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="liquid-glass inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3 font-mono text-[12px] uppercase tracking-[0.18em] text-white transition-colors group-hover:bg-white/20"
              >
                Shop the Collection
              </motion.span>
            </Link>
          </div>
          <div className="relative min-h-[320px] md:min-h-0">
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/images/material.png"
                alt="Full-grain leather hide detail in raking light"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent md:bg-gradient-to-l" />
          </div>
        </div>
      </FadeUp>

      <footer className="mx-auto mt-16 flex max-w-6xl flex-col items-center gap-4 border-t border-line px-2 py-8 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50 md:flex-row md:justify-between">
        <span>Harbor Goods — Est. Workshop</span>
        <nav className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/shop" className="transition-colors hover:text-ink">Shop</Link>
          <Link href="/blog" className="transition-colors hover:text-ink">Journal</Link>
          {LEGAL_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>
      </footer>
    </section>
  );
}
