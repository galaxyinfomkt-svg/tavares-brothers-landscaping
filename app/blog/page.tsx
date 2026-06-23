import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { posts, business } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Landscaping Blog | Lawn & Garden Tips | Tavares Brothers Landscaping',
  description:
    'Honest, practical landscaping and lawn care advice for Massachusetts homeowners — from a family-owned team serving Hudson, Sudbury & Marlborough since 1994.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'The Tavares Brothers Blog',
    description:
      'Practical lawn care and landscaping advice for Massachusetts homeowners.',
    url: '/blog',
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...rest] = sorted;

  return (
    <>
      <Header />
      <main>
        {/* Page header */}
        <section className="bg-charcoal pt-32 pb-16 text-cream sm:pt-36 sm:pb-20">
          <div className="container-px max-w-3xl">
            <span className="eyebrow text-sage">The Tavares Brothers Blog</span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Lawn &amp; Garden Tips for Massachusetts Homeowners
            </h1>
            <p className="mt-5 text-lg text-cream/75">
              Honest, practical landscaping advice from a family-owned team that
              has cared for lawns and gardens across Hudson, Sudbury &amp;
              Marlborough since 1994.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="bg-cream bg-leaf-texture py-16 sm:py-20">
          <div className="container-px">
            {/* Featured post */}
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid overflow-hidden rounded-3xl bg-white shadow-xl shadow-forest/10 ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-forest/20 lg:grid-cols-2"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden lg:aspect-auto">
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt.replace(/-/g, ' ')}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide">
                    <span className="rounded-full bg-leaf/15 px-3 py-1 text-leaf">
                      {featured.category}
                    </span>
                    <span className="text-charcoal/50">
                      {formatDate(featured.date)} · {featured.readTime}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-bold text-charcoal sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-charcoal/70">
                    {featured.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-leaf">
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>

            {/* Grid of remaining posts */}
            <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, i) => (
                <Reveal key={post.slug} delay={0.05 * (i + 1)}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-forest/5 ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest/15"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.imageAlt.replace(/-/g, ' ')}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide">
                        <span className="rounded-full bg-leaf/15 px-3 py-1 text-leaf">
                          {post.category}
                        </span>
                        <span className="text-charcoal/45">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-xl font-bold leading-snug text-charcoal">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-charcoal/65">
                        {post.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-leaf">
                        Read more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-16 text-cream sm:py-20">
          <div className="container-px flex flex-col items-center gap-6 text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Ready to love your yard again?
            </h2>
            <p className="max-w-xl text-cream/75">
              Family-owned and trusted since 1994. Tell us about your project and
              get a free, no-obligation estimate.
            </p>
            <a href={business.phoneHref} className="btn-primary">
              <Phone className="h-4 w-4" />
              Call {business.phone}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
