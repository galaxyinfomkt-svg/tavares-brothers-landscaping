import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { business } from '@/lib/content';
import { STATE, SERVICES, CITIES } from '@/lib/locations';

const BASE_URL = 'https://www.tavareslandscape.com';

export const metadata: Metadata = {
  title: `Landscaping Services in ${STATE} | Tavares Brothers Landscaping`,
  description: `Full landscaping services across ${STATE}: lawn maintenance, lawn mowing, gardening & flowers, residential & commercial landscaping, seasonal cleanups and mulching & edging. Family-owned since 1994.`,
  alternates: { canonical: `${BASE_URL}/services` },
};

export default function ServicesIndex() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-charcoal pt-32 pb-16 text-cream sm:pt-36 sm:pb-20">
          <div className="container-px max-w-3xl">
            <span className="eyebrow text-sage">Our Services</span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Landscaping Services in {STATE}
            </h1>
            <p className="mt-5 text-lg text-cream/75">
              From weekly lawn care to full property transformations — family-owned
              and trusted across {CITIES.length}+ {STATE} cities since 1994.
            </p>
          </div>
        </section>

        <section className="bg-cream bg-leaf-texture py-16 sm:py-20">
          <div className="container-px grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col rounded-3xl bg-white p-7 shadow-lg shadow-forest/5 ring-1 ring-charcoal/5 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h2 className="font-display text-xl font-bold text-charcoal">
                  {s.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/65">
                  {s.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-leaf">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-charcoal py-16 text-cream sm:py-20">
          <div className="container-px flex flex-col items-center gap-6 text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Not sure what you need?
            </h2>
            <p className="max-w-xl text-cream/75">
              Tell us about your property and we&apos;ll recommend the right
              services — free, no obligation.
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
