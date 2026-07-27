import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { getPost, getPosts } from "@/lib/posts";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    description: post.description,
  };

  return (
    <main className="min-h-screen bg-paper pb-24 pt-32 text-ink md:pt-40">
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <Link href="/blog" className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40 hover:text-ink">
          ← All notes
        </Link>
        <h1 className="mt-8 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-ink">
          {post.title}
        </h1>
        {post.date && (
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">{post.date}</p>
        )}
        <article
          className="post-body mt-10 font-mono text-[15px] text-ink/85"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </main>
  );
}
