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
  ShieldCheck,
  Star,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { business } from '@/lib/content';
import {
  STATE,
  STATE_ABBR,
  CITIES,
  SERVICES,
  getCityBySlug,
  getServiceBySlug,
  getNearbyCities,
  regionOf,
  generateAllParams,
  pickImage,
  pick,
} from '@/lib/locations';

const BASE_URL = 'https://www.tavareslandscape.com';

type Params = { params: { city: string; service: string } };

export function generateStaticParams() {
  return generateAllParams();
}

export function generateMetadata({ params }: Params): Metadata {
  const city = getCityBySlug(params.city);
  const service = getServiceBySlug(params.service);
  if (!city || !service) return { title: 'Not Found' };

  const title = `${service.shortName} in ${city.name}, ${STATE_ABBR} | Tavares Brothers Landscaping`;
  const description = `Professional ${service.name.toLowerCase()} in ${city.name}, ${STATE}. ${service.description} Family-owned since 1994. Free estimates — call ${business.phone}.`;
  const url = `${BASE_URL}/${city.slug}/${service.slug}`;
  const image = pickImage(service, city.slug);

  return {
    title,
    description,
    keywords: [
      `${service.shortName.toLowerCase()} ${city.name} ${STATE_ABBR}`,
      `${service.name.toLowerCase()} ${city.name}`,
      `${service.category} ${city.name} Massachusetts`,
      `landscaping ${city.name} MA`,
      `${service.shortName.toLowerCase()} near me`,
    ].join(', '),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
  };
}

export default function CityServicePage({ params }: Params) {
  const city = getCityBySlug(params.city);
  const service = getServiceBySlug(params.service);
  if (!city || !service) notFound();

  const region = regionOf(city);
  const nearby = getNearbyCities(city, 6);
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 6);
  const heroImage = pickImage(service, city.slug);
  const seed = `${city.slug}:${service.slug}`;

  // Seeded copy variants so no two city/service pages read identically.
  const intro = pick(
    [
      `When ${city.name} homeowners want dependable ${service.name.toLowerCase()}, they call Tavares Brothers Landscaping. Set in the ${city.region} region of ${STATE}, ${city.name} sees ${region.climate} — conditions that make professional ${service.category} well worth getting right.`,
      `${service.shortName} in ${city.name} isn’t one-size-fits-all. With ${region.landscape}, properties here have their own needs — and Tavares Brothers has handled them across the ${city.region} region since 1994.`,
      `For over 25 years, Tavares Brothers has delivered ${service.name.toLowerCase()} to ${city.name} and the surrounding ${city.region} area. Local ${city.name} yards face ${region.climate}, so our crews tailor every job to the conditions right outside your door.`,
    ],
    seed
  );

  const solution = pick(
    [
      `Our ${city.name} crews specialize in ${service.category} built for ${region.landscape}. The result is work that holds up, looks sharp, and saves you the hassle — backed by a perfect 5.0 local rating.`,
      `We bring the right equipment, materials and know-how to every ${city.name} property, so your ${service.shortName.toLowerCase()} is done right the first time. Ariadna answers every call and request without the run-around.`,
      `From the first walkthrough to the final blow-off, ${city.name} homeowners get reliable, licensed and insured service — the same care we’d give our own property.`,
    ],
    seed + 's'
  );

  const allFaqs = [
    ...service.faqs,
    {
      q: `Why choose Tavares Brothers for ${service.shortName.toLowerCase()} in ${city.name}?`,
      a: `We’ve served ${city.name} and the ${city.region} region since 1994. We know how ${region.climate} affects local properties and tailor every ${service.category} job to ${city.name} — fully licensed, insured and trusted by your neighbors.`,
    },
  ];

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} in ${city.name}, ${STATE_ABBR}`,
    serviceType: service.name,
    description: service.description,
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: { '@type': 'State', name: STATE },
    },
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: business.name,
      telephone: '+1-978-562-1048',
      areaServed: `${city.name}, ${STATE_ABBR}`,
      foundingDate: '1994',
    },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: city.name,
        item: `${BASE_URL}/${city.slug}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.shortName,
        item: `${BASE_URL}/${city.slug}/${service.slug}`,
      },
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />

        {/* Hero */}
        <section className="relative flex min-h-[62vh] items-center overflow-hidden pt-20">
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={`${service.shortName} in ${city.name}, ${STATE_ABBR} by Tavares Brothers Landscaping`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: 'center 35%' }}
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />
          </div>

          <div className="container-px relative z-10 py-16">
            <nav className="flex items-center gap-2 text-sm text-cream/75">
              <Link href={`/${city.slug}`} className="hover:text-sage">
                {city.name}
              </Link>
              <span>/</span>
              <span className="text-sage">{service.shortName}</span>
            </nav>

            <div className="mt-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-sage">
              <MapPin className="h-4 w-4" />
              {city.name}, {STATE_ABBR} · {city.region}
            </div>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              {service.shortName} in {city.name}, {STATE_ABBR}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-cream/90">
              {service.description}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-cream/85">
              <span className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 fill-sage text-sage" /> 5.0 rated
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-sage" /> Licensed &amp; insured
              </span>
              <span className="inline-flex items-center gap-2">
                Family-owned since 1994
              </span>
            </div>
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

        {/* Intro + solution */}
        <section className="bg-cream bg-leaf-texture py-16 sm:py-20">
          <div className="container-px grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <span className="eyebrow">
                {service.shortName} · {city.name}, {STATE_ABBR}
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-charcoal sm:text-4xl">
                Trusted {service.shortName} for {city.name} Homeowners
              </h2>
              <p className="mt-5 leading-relaxed text-charcoal/75">{intro}</p>
              <p className="mt-4 leading-relaxed text-charcoal/75">{solution}</p>

              {/* Pain points → solution */}
              <h3 className="mt-10 font-display text-xl font-semibold text-charcoal">
                Common {service.shortName} Challenges in {city.name}
              </h3>
              <ul className="mt-5 space-y-3">
                {service.painPoints.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-charcoal/5"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span className="text-charcoal/80">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 rounded-xl bg-leaf/10 p-5 ring-1 ring-leaf/20">
                <p className="text-charcoal/80">
                  <strong className="text-forest">The Tavares solution:</strong>{' '}
                  We handle all of this with professional {service.category}{' '}
                  tailored to {city.name}&apos;s conditions — done right, on
                  schedule, the first time.
                </p>
              </div>
            </div>

            {/* Sticky CTA card */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl bg-charcoal p-7 text-cream shadow-xl">
                <h3 className="font-display text-2xl font-bold">
                  Free {service.shortName} Estimate
                </h3>
                <p className="mt-2 text-cream/75">
                  Serving {city.name} and the {city.region} area since 1994. Tell
                  us about your property and we&apos;ll get back to you within 24
                  hours.
                </p>
                <a href={business.phoneHref} className="btn-primary mt-6 w-full">
                  <Phone className="h-4 w-4" />
                  Call {business.phone}
                </a>
                <Link href="/#contact" className="btn-ghost mt-3 w-full">
                  Request Online
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits + offerings */}
        <section className="bg-white py-16 sm:py-20">
          <div className="container-px grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal sm:text-3xl">
                What You Get with {city.name} {service.shortName}
              </h2>
              <ul className="mt-6 grid gap-3">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-leaf" />
                    <span className="font-medium text-charcoal/85">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal sm:text-3xl">
                Our {service.shortName} Services
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.offerings.map((o) => (
                  <div
                    key={o}
                    className="rounded-xl bg-cream p-4 text-sm font-semibold text-charcoal ring-1 ring-charcoal/5"
                  >
                    {o}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-charcoal py-16 text-cream sm:py-20">
          <div className="container-px">
            <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">
              How We Handle {service.shortName} in {city.name}
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.processSteps.map((step, i) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <span className="font-display text-3xl font-bold text-sage">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-cream/65">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream bg-leaf-texture py-16 sm:py-20">
          <div className="container-px max-w-3xl">
            <h2 className="text-center font-display text-2xl font-bold text-charcoal sm:text-3xl">
              {service.shortName} in {city.name} — FAQs
            </h2>
            <div className="mt-10 space-y-4">
              {allFaqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-charcoal/5"
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

        {/* Nearby cities + other services */}
        <section className="bg-white py-16 sm:py-20">
          <div className="container-px">
            <h2 className="font-display text-2xl font-bold text-charcoal sm:text-3xl">
              {service.shortName} Near {city.name}
            </h2>
            <p className="mt-2 text-charcoal/60">
              We also provide {service.name.toLowerCase()} across the{' '}
              {city.region} region:
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  href={`/${n.slug}/${service.slug}`}
                  className="rounded-full bg-cream px-4 py-2 text-sm font-medium text-charcoal ring-1 ring-charcoal/10 transition hover:bg-leaf hover:text-white"
                >
                  {service.shortName} in {n.name}
                </Link>
              ))}
            </div>

            <h2 className="mt-14 font-display text-2xl font-bold text-charcoal sm:text-3xl">
              Other Services in {city.name}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/${city.slug}/${o.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-charcoal/10 bg-cream p-5 transition hover:border-leaf hover:bg-leaf/5"
                >
                  <span className="font-semibold text-charcoal">
                    {o.shortName}
                  </span>
                  <ArrowRight className="h-4 w-4 text-leaf transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-charcoal py-16 text-cream sm:py-20">
          <div className="container-px flex flex-col items-center gap-6 text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              {service.shortName} in {city.name}? Let&apos;s Talk.
            </h2>
            <p className="max-w-xl text-cream/75">
              Free, no-obligation estimate. Family-owned and trusted across the{' '}
              {city.region} region since 1994.
            </p>
            <a href={business.phoneHref} className="btn-primary">
              <Phone className="h-4 w-4" />
              Call {business.phone}
            </a>
            <Link
              href={`/${city.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-sage hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              All services in {city.name}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
