"use client";

import { Anvil, Gem, Ruler, Hammer, Layers, Scissors, ShieldCheck, Package } from "lucide-react";
import { FadeUp } from "@/components/Reveal";

const SPECS = [
  { icon: Anvil, label: "Full-Grain" },
  { icon: Gem, label: "Brass Hardware" },
  { icon: Scissors, label: "Saddle Stitch" },
  { icon: Ruler, label: "Hand-Measured" },
  { icon: Layers, label: "Vegetable-Tanned" },
  { icon: Hammer, label: "Bench-Made" },
  { icon: ShieldCheck, label: "Lifetime Repair" },
  { icon: Package, label: "Single Workshop" },
];

function Row({ items, direction }: { items: typeof SPECS; direction: "left" | "right" }) {
  const track = [...items, ...items];
  return (
    <div
      className="flex w-full overflow-hidden"
      style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
    >
      <div
        className={`flex shrink-0 gap-4 pr-4 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"} hover:[animation-play-state:paused]`}
      >
        {track.map((s, i) => (
          <div
            key={`${s.label}-${i}`}
            className="liquid-glass flex h-16 w-40 shrink-0 flex-col items-center justify-center gap-1.5 rounded-xl bg-surface text-fg"
          >
            <s.icon className="h-4 w-4 text-green" strokeWidth={1.5} />
            <span className="font-mono text-[10px] uppercase tracking-[0.14em]">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MarqueeStrip() {
  return (
    <section id="proof" className="relative bg-term py-20 md:py-28">
      <FadeUp className="mx-auto mb-10 max-w-6xl px-6">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          <span className="text-green">❯</span> ls --spec-compliance
        </p>
      </FadeUp>
      <div className="flex flex-col gap-4">
        <Row items={SPECS} direction="left" />
        <Row items={SPECS} direction="right" />
      </div>
    </section>
  );
}
