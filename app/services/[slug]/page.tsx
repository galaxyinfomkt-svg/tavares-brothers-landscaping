import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, Phone, ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { services, business } from '@/lib/content';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.title} in Hudson, MA | Tavares Brothers Landscaping`,
    description: service.tagline,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Tavares Brothers Landscaping`,
      description: service.tagline,
      images: [service.image],
    },
  };
}

export default function ServicePage({ params }: Params) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const Icon = service.icon;

  return (
    <>
      <Header />
      <main>
        {/* Hero banner */}
        <section className="relative flex min-h-[60vh] items-center overflow-hidden pt-20">
          <div className="absolute inset-0">
            <Image
              src={service.image}
              alt={service.imageAlt.replace(/-/g, ' ')}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: service.imagePosition }}
            />
            {/* Black overlay — photo still visible */}
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
          </div>

          <div className="container-px relative z-10 py-16">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm font-medium text-cream/80 transition-colors hover:text-sage"
            >
              <ArrowLeft className="h-4 w-4" />
              All Services
            </Link>
            <div className="mt-5 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-leaf text-white">
                <Icon className="h-6 w-6" />
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
                Hudson, MA &amp; surrounding areas
              </span>
            </div>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-cream/90">
              {service.tagline}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={business.phoneHref} className="btn-primary">
                <Phone className="h-4 w-4" />
                Get a Free Estimate
              </a>
              <Link href="/#contact" className="btn-ghost">
                Request Online
              </Link>
            </div>
          </div>
        </section>

        {/* Detail */}
        <section className="bg-cream bg-leaf-texture py-20 sm:py-28">
          <div className="container-px grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <span className="eyebrow">What We Offer</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-charcoal sm:text-4xl">
                Professional {service.title} You Can Count On
              </h2>
              {service.intro.map((p) => (
                <p key={p} className="mt-5 leading-relaxed text-charcoal/75">
                  {p}
                </p>
              ))}

              <h3 className="mt-10 font-display text-xl font-semibold text-charcoal">
                What&apos;s Included
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-leaf" />
                    <span className="font-medium text-charcoal/85">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Side image + CTA card */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl shadow-forest/20">
                <Image
                  src={service.image}
                  alt={service.imageAlt.replace(/-/g, ' ')}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 rounded-3xl bg-charcoal p-7 text-cream shadow-xl">
                <h3 className="font-display text-2xl font-bold">
                  Free, No-Obligation Estimate
                </h3>
                <p className="mt-2 text-cream/75">
                  Family-owned and trusted since 1994. Tell us about your
                  project and we&apos;ll get back to you within 24 hours.
                </p>
                <a
                  href={business.phoneHref}
                  className="btn-primary mt-6 w-full"
                >
                  <Phone className="h-4 w-4" />
                  Call {business.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="bg-charcoal py-20 text-cream sm:py-24">
          <div className="container-px">
            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
              Explore Our Other Services
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {others.map((o) => {
                const OIcon = o.icon;
                return (
                  <Link
                    key={o.slug}
                    href={`/services/${o.slug}`}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-leaf hover:bg-white/[0.06]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-leaf/15 text-sage transition-colors group-hover:bg-leaf group-hover:text-white">
                      <OIcon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold">
                      {o.title}
                    </h3>
                    <p className="mt-2 text-sm text-cream/65">{o.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sage">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
