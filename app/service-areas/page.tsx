import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { business } from '@/lib/content';
import { STATE, STATE_ABBR, CITIES, REGIONS } from '@/lib/locations';

const BASE_URL = 'https://www.tavareslandscape.com';

export const metadata: Metadata = {
  title: `Service Areas | Landscaping Across ${STATE} | Tavares Brothers`,
  description: `Tavares Brothers Landscaping serves ${CITIES.length}+ cities and towns across ${STATE}, from MetroWest to Greater Boston, Worcester and beyond. Find your town.`,
  alternates: { canonical: `${BASE_URL}/service-areas` },
};

export default function ServiceAreas() {
  const regionNames = Object.keys(REGIONS);
  const byRegion = regionNames
    .map((r) => ({
      region: r,
      cities: CITIES.filter((c) => c.region === r),
    }))
    .filter((g) => g.cities.length > 0);

  return (
    <>
      <Header />
      <main>
        <section className="bg-charcoal pt-32 pb-16 text-cream sm:pt-36 sm:pb-20">
          <div className="container-px max-w-3xl">
            <span className="eyebrow text-sage">Service Areas</span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Landscaping Across {STATE}
            </h1>
            <p className="mt-5 text-lg text-cream/75">
              We proudly serve {CITIES.length}+ cities and towns throughout{' '}
              {STATE}. Find your community below.
            </p>
          </div>
        </section>

        <section className="bg-cream bg-leaf-texture py-16 sm:py-20">
          <div className="container-px space-y-12">
            {byRegion.map((g) => (
              <div key={g.region}>
                <h2 className="flex items-center gap-2 font-display text-2xl font-bold text-charcoal">
                  <MapPin className="h-5 w-5 text-leaf" />
                  {g.region}
                </h2>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {g.cities.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/${c.slug}`}
                      className="rounded-full bg-white px-4 py-2 text-sm font-medium text-charcoal ring-1 ring-charcoal/10 transition hover:bg-leaf hover:text-white"
                    >
                      {c.name}, {STATE_ABBR}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-charcoal py-16 text-cream sm:py-20">
          <div className="container-px flex flex-col items-center gap-6 text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Don&apos;t see your town?
            </h2>
            <p className="max-w-xl text-cream/75">
              We&apos;re always expanding. Give us a call — chances are we serve
              your area too.
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
