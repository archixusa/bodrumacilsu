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
      <article className="bg-white py-16 sm:py-20">
        <div className="container-tight max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ocean hover:text-deep-blue"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Blog
          </Link>
          <header className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("tr-TR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="ml-3 inline-flex items-center gap-1 text-deep-blue/60">
                <Clock className="h-3.5 w-3.5" /> {post.readingMinutes} dk
              </span>
            </p>
            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-deep-blue sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-deep-blue/75">
              {post.excerpt}
            </p>
          </header>

          <div className="prose-bodrum mt-10 space-y-5 text-base leading-relaxed text-deep-blue/85">
            {post.body.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
            <p className="text-sm italic text-deep-blue/60">
              Bu makalenin tam içeriği yakında yayında olacak.
            </p>
          </div>
        </div>
      </article>

      <section className="border-t border-deep-blue/5 bg-sand/30">
        <div className="container-wide py-12">
          <h2 className="font-display text-xl font-bold text-deep-blue">
            Bunları da okuyun
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/blog/${o.slug}`}
                  className="flex flex-col rounded-xl border border-deep-blue/10 bg-white p-4 text-sm transition hover:border-ocean/40"
                >
                  <span className="font-semibold text-deep-blue">{o.title}</span>
                  <span className="mt-1 line-clamp-2 text-xs text-deep-blue/60">
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
