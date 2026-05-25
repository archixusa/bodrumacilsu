import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { posts, getPost } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import { FinalCTA } from "@/components/sections/final-cta";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const post = getPost(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}/`,
    type: "article",
  });
}

export default function BlogPost({ params }: PageProps) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white pt-24">
        <div
          className="pointer-events-none absolute -top-32 right-1/4 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl"
          aria-hidden
        />

        <div className="container-tight relative max-w-3xl py-16 sm:py-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> Blog
          </Link>
          <header className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("tr-TR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="ml-3 inline-flex items-center gap-1 text-ink-muted">
                <Clock className="h-3.5 w-3.5" aria-hidden />
                {post.readingMinutes} dk
              </span>
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              {post.excerpt}
            </p>
          </header>

          <div className="mt-10 space-y-5 text-base leading-relaxed text-ink">
            {post.body.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
            <p className="rounded-2xl border border-slate-200 bg-surface-tint p-4 text-sm italic text-ink-muted">
              Bu makalenin tam içeriği yakında yayında olacak.
            </p>
          </div>
        </div>
      </article>

      <section className="border-t border-slate-200 bg-surface-tint">
        <div className="container-wide py-12">
          <h2 className="font-display text-xl font-semibold text-ink">
            Bunları da okuyun
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/blog/${o.slug}`}
                  className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 text-sm transition-colors duration-200 hover:border-brand-300 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25"
                >
                  <span className="font-semibold text-ink">{o.title}</span>
                  <span className="mt-1 line-clamp-2 text-xs text-ink-muted">
                    {o.excerpt}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
