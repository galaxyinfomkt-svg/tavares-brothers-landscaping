import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  CheckCircle2,
  Phone,
  ArrowRight,
  ArrowLeft,
  MapPin,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { business } from '@/lib/content';
import {
  STATE,
  STATE_ABBR,
  CITIES,
  SERVICES,
  getServiceBySlug,
} from '@/lib/locations';

const BASE_URL = 'https://www.tavareslandscape.com';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: 'Service Not Found' };

  const title = `${service.name} in ${STATE} | Tavares Brothers Landscaping`;
  const description = `${service.description} Professional ${service.category} across 100+ ${STATE} cities. Family-owned since 1994. Free estimates — ${business.phone}.`;
  const url = `${BASE_URL}/services/${service.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      type: 'website',
      images: [{ url: service.images[0], width: 1200, height: 630, alt: title }],
    },
  };
}

export default function ServicePage({ params }: Params) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const others = SERVICES.filter((s) => s.slug !== service.slug);
  // Show a generous spread of cities for internal linking.
  const featuredCities = CITIES.slice(0, 36);

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} in ${STATE}`,
    serviceType: service.name,
    description: service.description,
    areaServed: { '@type': 'State', name: STATE },
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: business.name,
      telephone: '+1-978-562-1048',
      foundingDate: '1994',
    },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />

        {/* Hero */}
        <section className="relative flex min-h-[58vh] items-center overflow-hidden pt-20">
          <div className="absolute inset-0">
            <Image
              src={service.images[0]}
              alt={`${service.name} by Tavares Brothers Landscaping in ${STATE}`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />
          </div>
          <div className="container-px relative z-10 py-16">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-cream/80 transition-colors hover:text-sage"
            >
              <ArrowLeft className="h-4 w-4" />
              All Services
            </Link>
            <div className="mt-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-sage">
              <MapPin className="h-4 w-4" />
              Serving 100+ cities across {STATE}
            </div>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              {service.name} in {STATE}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-cream/90">
              {service.description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={business.phoneHref} className="btn-primary">
                <Phone className="h-4 w-4" />
                Free Estimate: {business.phone}
              </a>
              <Link href="/#contact" className="btn-ghost">
                Request Online
              </Link>
            </div>
          </div>
        </section>

        {/* Overview: benefits + offerings */}
        <section className="bg-cream bg-leaf-texture py-16 sm:py-20">
          <div className="container-px grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="eyebrow">What We Offer</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-charcoal sm:text-4xl">
                Professional {service.shortName} You Can Count On
              </h2>
              <p className="mt-5 leading-relaxed text-charcoal/75">
                Ideal for {service.idealFor}. With 25+ years serving{' '}
                {STATE} homeowners and businesses, Tavares Brothers delivers{' '}
                {service.category} that holds up and looks sharp.
              </p>
              <ul className="mt-6 grid gap-3">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-leaf" />
                    <span className="font-medium text-charcoal/85">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={service.images[1] ?? service.images[0]}
                  alt={`${service.shortName} project by Tavares Brothers`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {service.offerings.map((o) => (
                  <div
                    key={o}
                    className="rounded-xl bg-white p-4 text-sm font-semibold text-charcoal ring-1 ring-charcoal/5"
                  >
                    {o}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white py-16 sm:py-20">
          <div className="container-px">
            <h2 className="text-center font-display text-2xl font-bold text-charcoal sm:text-3xl">
              Our {service.shortName} Process
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.processSteps.map((step, i) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-charcoal/10 bg-cream p-6"
                >
                  <span className="font-display text-3xl font-bold text-leaf">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/65">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cities */}
        <section className="bg-cream bg-leaf-texture py-16 sm:py-20">
          <div className="container-px">
            <h2 className="font-display text-2xl font-bold text-charcoal sm:text-3xl">
              {service.shortName} Across {STATE}
            </h2>
            <p className="mt-2 text-charcoal/60">
              Pick your town for local {service.name.toLowerCase()}:
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {featuredCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}/${service.slug}`}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-charcoal ring-1 ring-charcoal/10 transition hover:bg-leaf hover:text-white"
                >
                  {service.shortName} in {c.name}
                </Link>
              ))}
            </div>
            <Link
              href="/service-areas"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-leaf hover:text-forest"
            >
              View all service areas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16 sm:py-20">
          <div className="container-px max-w-3xl">
            <h2 className="text-center font-display text-2xl font-bold text-charcoal sm:text-3xl">
              {service.shortName} — FAQs
            </h2>
            <div className="mt-10 space-y-4">
              {service.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl bg-cream p-5 shadow-sm ring-1 ring-charcoal/5"
                >
                  <summary className="flex cursor-pointer items-center justify-between font-semibold text-charcoal">
                    {f.q}
                    <ArrowRight className="h-4 w-4 shrink-0 text-leaf transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 leading-relaxed text-charcoal/70">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="bg-charcoal py-16 text-cream sm:py-20">
          <div className="container-px">
            <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">
              Explore Our Other Services
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/services/${o.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-leaf hover:bg-white/[0.06]"
                >
                  <h3 className="font-display text-lg font-semibold">
                    {o.shortName}
                  </h3>
                  <p className="mt-2 text-sm text-cream/65">{o.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sage">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
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
