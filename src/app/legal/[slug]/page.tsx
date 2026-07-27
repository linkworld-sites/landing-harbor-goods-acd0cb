import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { getLegalPage, getLegalSlugs } from "@/lib/legal";

export function generateStaticParams() {
  return getLegalSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) return {};
  return { title: page.title || slug, alternates: { canonical: `/legal/${slug}` } };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) notFound();
  return (
    <main className="min-h-screen bg-paper pb-24 pt-32 text-ink md:pt-40">
      <Nav />
      <article
        className="post-body mx-auto max-w-3xl px-6 font-mono text-[15px] text-ink/85"
        dangerouslySetInnerHTML={{ __html: page.html }}
      />
    </main>
  );
}
