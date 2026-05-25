import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { posts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog · Bodrum Acil Su",
  description:
    "Su tankeri, su deposu temizliği, kireç sorunu ve Bodrum-Milas su altyapısı hakkında pratik rehberler.",
  path: "/blog/",
});

export default function BlogIndex() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white pt-24">
      <div
        className="pointer-events-none absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-brand-200/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-accent2-200/30 blur-3xl"
        aria-hidden
      />

      <div className="container-wide relative py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Blog</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            <span className="gradient-text">Bodrum&apos;da su</span>, depo, hijyen ve daha fazlası.
          </h1>
          <p className="mt-4 text-base text-ink-muted sm:text-lg">
            Pratik rehberler, sezonluk öneriler ve sektör bilgileri.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-shadow duration-200 hover:border-brand-200 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("tr-TR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </p>
                <h2 className="mt-3 font-display text-xl font-semibold text-ink">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-ink-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" aria-hidden />
                    {post.readingMinutes} dk okuma
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-brand-700">
                    Devamı{" "}
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
