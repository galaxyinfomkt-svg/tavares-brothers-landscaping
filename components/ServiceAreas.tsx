import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { CITIES, STATE } from '@/lib/locations';

/**
 * Big "Service Areas" city list for the bottom of the home page.
 * Every city links to its /[city] hub for internal-linking / local SEO.
 */
export default function ServiceAreas() {
  return (
    <section className="border-t border-white/10 bg-charcoal py-16 text-cream sm:py-20">
      <div className="container-px">
        <div className="flex items-center justify-center gap-2 text-center">
          <MapPin className="h-5 w-5 shrink-0 text-sage" />
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-sage sm:text-base">
            Service Areas — {CITIES.length}+ Cities Across {STATE}
          </h2>
        </div>

        <p className="mx-auto mt-8 max-w-5xl text-center text-base leading-loose sm:text-lg">
          {CITIES.map((c, i) => (
            <span key={c.slug}>
              <Link
                href={`/${c.slug}`}
                className="font-medium text-cream/85 transition-colors hover:text-sage"
              >
                {c.name}
              </Link>
              {i < CITIES.length - 1 && (
                <span className="text-cream/25"> · </span>
              )}
            </span>
          ))}
        </p>

        <div className="mt-10 text-center">
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 rounded-full border border-sage/40 px-6 py-3 text-sm font-semibold text-sage transition-colors hover:bg-sage hover:text-charcoal"
          >
            View all service areas
          </Link>
        </div>
      </div>
    </section>
  );
}
