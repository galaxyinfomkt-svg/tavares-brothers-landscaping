import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { posts, business } from '@/lib/content';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Article Not Found' };
  return {
    title: `${post.title} | Tavares Brothers Landscaping`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: [post.image],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPostPage({ params }: Params) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.image,
    datePublished: post.date,
    author: { '@type': 'Organization', name: business.name },
    publisher: { '@type': 'Organization', name: business.name },
    articleSection: post.category,
    description: post.excerpt,
  };

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-end overflow-hidden pt-20">
          <div className="absolute inset-0">
            <Image
              src={post.image}
              alt={post.imageAlt.replace(/-/g, ' ')}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
          </div>

          <div className="container-px relative z-10 max-w-3xl py-14">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-cream/80 transition-colors hover:text-sage"
            >
              <ArrowLeft className="h-4 w-4" />
              All Articles
            </Link>
            <div className="mt-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide">
              <span className="rounded-full bg-leaf px-3 py-1 text-white">
                {post.category}
              </span>
              <span className="text-cream/80">
                {formatDate(post.date)} · {post.readTime}
              </span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
              {post.title}
            </h1>
          </div>
        </section>

        {/* Article body */}
        <section className="bg-cream bg-leaf-texture py-16 sm:py-20">
          <div className="container-px grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
            <article className="max-w-2xl">
              <p className="text-lg font-medium leading-relaxed text-charcoal/80">
                {post.excerpt}
              </p>
              <div className="mt-8 space-y-1">
                {post.content.map((block, i) => {
                  if (block.type === 'h2') {
                    return (
                      <h2
                        key={i}
                        className="!mt-10 font-display text-2xl font-bold text-charcoal"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === 'ul') {
                    return (
                      <ul key={i} className="!mt-5 space-y-2.5">
                        {block.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                            <span className="leading-relaxed text-charcoal/75">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p
                      key={i}
                      className="!mt-5 leading-relaxed text-charcoal/75"
                    >
                      {block.text}
                    </p>
                  );
                })}
              </div>

              <Link
                href="/blog"
                className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-leaf transition-colors hover:text-forest"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to all articles
              </Link>
            </article>

            {/* Sidebar CTA */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl bg-charcoal p-7 text-cream shadow-xl">
                <h3 className="font-display text-2xl font-bold">
                  Free, No-Obligation Estimate
                </h3>
                <p className="mt-2 text-cream/75">
                  Family-owned and trusted since 1994, serving Hudson, Sudbury
                  &amp; Marlborough. Tell us about your project and we&apos;ll
                  get back to you within 24 hours.
                </p>
                <a href={business.phoneHref} className="btn-primary mt-6 w-full">
                  <Phone className="h-4 w-4" />
                  Call {business.phone}
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* More articles */}
        <section className="bg-charcoal py-16 text-cream sm:py-20">
          <div className="container-px">
            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
              More From the Blog
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {more.map((m) => (
                <Link
                  key={m.slug}
                  href={`/blog/${m.slug}`}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-leaf hover:bg-white/[0.06]"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={m.image}
                      alt={m.imageAlt.replace(/-/g, ' ')}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wide text-sage">
                      {m.category}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
                      {m.title}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sage">
                      Read more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
