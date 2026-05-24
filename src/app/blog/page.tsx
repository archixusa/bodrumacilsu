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
    <section className="bg-sand/30 py-16 sm:py-20">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Blog</p>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-deep-blue sm:text-4xl lg:text-5xl">
            Bodrum&apos;da su, depo, hijyen ve daha fazlası
          </h1>
          <p className="mt-3 text-base text-deep-blue/70">
            Pratik rehberler, sezonluk öneriler ve sektör bilgileri.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-deep-blue/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-ocean/40 hover:shadow-elevated"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("tr-TR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </p>
                <h2 className="mt-3 font-display text-xl font-bold text-deep-blue">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-deep-blue/70">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-deep-blue/60">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {post.readingMinutes} dk okuma
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-ocean">
                    Devamı <ArrowRight className="h-3.5 w-3.5" />
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
