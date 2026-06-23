import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, ArrowRight, MapPin, ShieldCheck, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { business } from '@/lib/content';
import {
  STATE,
  STATE_ABBR,
  CITIES,
  SERVICES,
  getCityBySlug,
  getNearbyCities,
  regionOf,
  pick,
} from '@/lib/locations';

const BASE_URL = 'https://www.tavareslandscape.com';

type Params = { params: { city: string } };

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const city = getCityBySlug(params.city);
  if (!city) return { title: 'Not Found' };

  const title = `Landscaping in ${city.name}, ${STATE_ABBR} | Lawn Care & More | Tavares Brothers`;
  const description = `Professional landscaping in ${city.name}, ${STATE}. Lawn care, gardening, mulching, cleanups & commercial landscaping. Family-owned since 1994. Free estimates — ${business.phone}.`;
  const url = `${BASE_URL}/${city.slug}`;

  return {
    title,
    description,
    keywords: [
      `landscaping ${city.name} ${STATE_ABBR}`,
      `lawn care ${city.name}`,
      `lawn maintenance ${city.name} Massachusetts`,
      `landscaper ${city.name} MA`,
      `landscaping near me`,
    ].join(', '),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      type: 'website',
    },
  };
}

export default function CityPage({ params }: Params) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  const region = regionOf(city);
  const nearby = getNearbyCities(city, 8);
  const heroImage = SERVICES[0].images[0];
  const seed = city.slug;

  const intro = pick(
    [
      `${city.name} homeowners trust Tavares Brothers Landscaping to keep their properties looking their best. In the ${city.region} region of ${STATE}, yards here contend with ${region.climate}, so dependable, professional care makes all the difference.`,
      `Set among ${region.landscape}, ${city.name} is exactly the kind of community Tavares Brothers has served since 1994. From weekly lawn care to full landscaping, we tailor our work to local conditions.`,
      `For more than 25 years, Tavares Brothers has cared for lawns and gardens across ${city.name} and the wider ${city.region} area — bringing reliable crews, fair pricing and a perfect 5.0 rating to every property.`,
    ],
    seed
  );

  const intro2 = pick(
    [
      `Because ${city.name} sees ${region.climate}, we adapt mowing heights, planting times and cleanups to the season — so your property thrives all year.`,
      `Whether you have a compact in-town lot or acres to manage, our ${city.name} crews bring the right equipment and know-how, with Ariadna answering every call without the run-around.`,
      `One reliable team handles your lawn, gardens, mulch and cleanups in ${city.name} — no juggling multiple contractors, no chasing anyone down.`,
    ],
    seed + '2'
  );

  const cityFaqs = [
    {
      q: `Does Tavares Brothers serve ${city.name}, ${STATE_ABBR}?`,
      a: `Yes — we serve ${city.name} and the surrounding ${city.region} region with full landscaping, lawn care and seasonal services. We've worked in the area since 1994.`,
    },
    {
      q: `What landscaping services do you offer in ${city.name}?`,
      a: `In ${city.name} we offer lawn maintenance, lawn mowing, gardening & flowers, residential and commercial landscaping, spring & fall cleanups, and mulching & edging.`,
    },
    {
      q: `Do you offer free estimates in ${city.name}?`,
      a: `Absolutely. Every ${city.name} project starts with a free, no-obligation written estimate. Call ${business.phone} to get started.`,
    },
    {
      q: `Are your crews licensed and insured?`,
      a: `Yes, every Tavares Brothers crew working in ${city.name} is fully licensed and insured.`,
    },
  ];

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cityFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const bizLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: business.name,
    image: business.logo,
    telephone: '+1-978-562-1048',
    foundingDate: '1994',
    areaServed: { '@type': 'City', name: city.name, containedInPlace: { '@type': 'State', name: STATE } },
    url: `${BASE_URL}/${city.slug}`,
  };

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bizLd) }}
        />

        {/* Hero */}
        <section className="relative flex min-h-[60vh] items-center overflow-hidden pt-20">
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={`Landscaping in ${city.name}, ${STATE_ABBR} by Tavares Brothers`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />
          </div>
          <div className="container-px relative z-10 py-16">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-sage">
              <MapPin className="h-4 w-4" />
              {city.name}, {STATE_ABBR} · {city.region}
            </div>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Landscaping &amp; Lawn Care in {city.name}, {STATE_ABBR}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-cream/90">
              Family-owned landscaping for {city.name} homes and businesses since
              1994 — lawn care, gardens, mulching, cleanups and more.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-cream/85">
              <span className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 fill-sage text-sage" /> 5.0 rated
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-sage" /> Licensed &amp; insured
              </span>
              <span>Since 1994</span>
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

        {/* Intro */}
        <section className="bg-cream bg-leaf-texture py-16 sm:py-20">
          <div className="container-px max-w-3xl">
            <span className="eyebrow">
              Landscaping in {city.name}, {STATE_ABBR}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal sm:text-4xl">
              Your Local {city.name} Landscaping Team
            </h2>
            <p className="mt-5 leading-relaxed text-charcoal/75">{intro}</p>
            <p className="mt-4 leading-relaxed text-charcoal/75">{intro2}</p>
          </div>
        </section>

        {/* Services in this city */}
        <section className="bg-white py-16 sm:py-20">
          <div className="container-px">
            <h2 className="font-display text-2xl font-bold text-charcoal sm:text-3xl">
              Our Services in {city.name}
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${city.slug}/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-charcoal/10 bg-cream p-6 transition hover:-translate-y-1 hover:border-leaf hover:shadow-lg"
                >
                  <h3 className="font-display text-lg font-semibold text-charcoal">
                    {s.shortName} in {city.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-charcoal/65">
                    {s.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-leaf">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream bg-leaf-texture py-16 sm:py-20">
          <div className="container-px max-w-3xl">
            <h2 className="text-center font-display text-2xl font-bold text-charcoal sm:text-3xl">
              Landscaping in {city.name} — FAQs
            </h2>
            <div className="mt-10 space-y-4">
              {cityFaqs.map((f) => (
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

        {/* Nearby cities */}
        <section className="bg-white py-16 sm:py-20">
          <div className="container-px">
            <h2 className="font-display text-2xl font-bold text-charcoal sm:text-3xl">
              We Also Serve Near {city.name}
            </h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  href={`/${n.slug}`}
                  className="rounded-full bg-cream px-4 py-2 text-sm font-medium text-charcoal ring-1 ring-charcoal/10 transition hover:bg-leaf hover:text-white"
                >
                  {n.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-16 text-cream sm:py-20">
          <div className="container-px flex flex-col items-center gap-6 text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Ready to love your {city.name} yard?
            </h2>
            <p className="max-w-xl text-cream/75">
              Free, no-obligation estimate. Family-owned and trusted since 1994.
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
