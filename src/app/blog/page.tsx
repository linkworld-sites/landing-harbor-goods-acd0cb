import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes from the Harbor Goods workshop — material, process, and care.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = getPosts();
  return (
    <main className="min-h-screen bg-paper pb-24 pt-32 text-ink md:pt-40">
      <Nav />
      <div className="mx-auto max-w-3xl px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50">Journal</p>
        <h1 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-ink">
          Notes from the Bench
        </h1>
        {posts.length === 0 ? (
          <p className="mt-10 font-mono text-sm text-ink/60">New notes are on the way — check back soon.</p>
        ) : (
          <ul className="mt-14 divide-y divide-line">
            {posts.map((p) => (
              <li key={p.slug} className="py-8 first:pt-0">
                <Link href={`/blog/${p.slug}`} className="group block">
                  {p.date && (
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">{p.date}</p>
                  )}
                  <h2 className="mt-2 font-display text-2xl font-semibold text-ink group-hover:text-orange">
                    {p.title}
                  </h2>
                  {p.description && <p className="mt-2 font-mono text-sm text-ink/60">{p.description}</p>}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-16 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
          <Link href="/" className="hover:text-ink">← Home</Link>
        </p>
      </div>
    </main>
  );
}
