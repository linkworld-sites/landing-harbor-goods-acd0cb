import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { CartProvider } from "@/components/CartContext";
import ShopClient from "@/components/ShopClient";
import { getProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop the Collection",
  description:
    "Full-grain leather goods, indexed and built to be inherited. Browse the current catalog.",
  alternates: { canonical: "/shop" },
};

export default async function ShopPage() {
  const products = await getProducts();
  return (
    <main className="min-h-screen bg-paper pb-24 pt-32 text-ink md:pt-40">
      <Nav />
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50">
          Catalog
        </p>
        <h1 className="mt-3 max-w-lg font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight text-ink">
          The Collection
        </h1>
        <p className="mt-4 max-w-md font-mono text-[13px] leading-relaxed text-ink/60">
          Four pieces, built once. Every order ships from the workshop that
          made it.
        </p>

        <div className="mt-14">
          <CartProvider>
            <ShopClient products={products} />
          </CartProvider>
        </div>

        <p className="mt-20 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
          <Link href="/" className="hover:text-ink">← Back to Harbor Goods</Link>
        </p>
      </div>
    </main>
  );
}
