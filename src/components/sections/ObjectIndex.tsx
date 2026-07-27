"use client";

import Image from "next/image";
import { ScaleFade, FadeUp } from "@/components/Reveal";

const OBJECTS = [
  {
    n: "01",
    name: "The Weekender",
    material: "Full-grain vachetta, brass turn-lock",
    origin: "Cut and stitched, single workshop",
    src: "/images/hero.png",
  },
  {
    n: "02",
    name: "The Field Satchel",
    material: "Waxed nubuck trim, saddle-stitched gusset",
    origin: "Hardware cast in-house",
    src: "/images/material.png",
  },
  {
    n: "03",
    name: "The Ledger Briefcase",
    material: "Oak-bark tanned hide, brass toggle",
    origin: "Structured frame, hand-skived edges",
    src: "/images/detail.png",
  },
  {
    n: "04",
    name: "The Companion Wallet",
    material: "Full-grain offcut, burnished by hand",
    origin: "Six-card, one bill fold",
    src: "/images/process.png",
  },
];

export function ObjectIndex() {
  return (
    <section id="index" className="relative bg-gallery px-6 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <FadeUp className="mb-16 md:mb-24">
          <p className="text-[11px] uppercase tracking-[0.22em] text-ink/50">
            The Object Index
          </p>
          <p className="mt-4 max-w-lg font-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-light leading-[1.2] text-ink">
            Four pieces. No seasons, no successors — each one designed to be
            the last of its kind you buy.
          </p>
        </FadeUp>

        <div className="grid gap-y-24 md:grid-cols-2 md:gap-x-24 md:gap-y-32">
          {OBJECTS.map((o, i) => (
            <ScaleFade key={o.n} delay={(i % 2) * 0.08}>
              <div className="group">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={o.src}
                    alt={`${o.name} — ${o.material}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-hairline pt-3">
                  <div>
                    <p className="font-display text-lg italic text-ink">{o.name}</p>
                    <p className="mt-1 font-mono text-[11px] tracking-wide text-ink/55">
                      {o.material}
                    </p>
                    <p className="font-mono text-[11px] tracking-wide text-ink/55">
                      {o.origin}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-[11px] text-ink/40">
                    {o.n}
                  </span>
                </div>
              </div>
            </ScaleFade>
          ))}
        </div>
      </div>
    </section>
  );
}
