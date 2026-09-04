import { Phone, ArrowRight } from 'lucide-react';
import { business } from '@/lib/content';

/**
 * Conversion strip for the gaps between content sections.
 *
 * The page ran hero → stats → about → services → process → gallery →
 * testimonials → FAQ before offering any way to act, so a reader sold by the
 * service list had to scroll past four more sections to reach the form. This
 * puts the form and the phone one tap away from wherever they stopped.
 */
export default function CtaBand({
  heading = 'Ready for your free estimate?',
  sub = 'Tell us about your property and we will come take a look — no cost, no obligation.',
  tone = 'leaf',
}: {
  heading?: string;
  sub?: string;
  tone?: 'leaf' | 'dark';
}) {
  const isLeaf = tone === 'leaf';

  return (
    <section
      className={
        isLeaf ? 'bg-leaf py-10 sm:py-12' : 'bg-charcoal py-10 sm:py-12'
      }
    >
      <div className="container-px flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">{heading}</h2>
          <p className="mt-1 text-sm text-white/75">{sub}</p>
        </div>

        <div className="flex flex-col gap-3 sm:shrink-0 sm:flex-row">
          <a
            href="#contact"
            className={`inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-transform hover:scale-105 ${
              isLeaf
                ? 'bg-white text-charcoal hover:bg-white/90'
                : 'bg-leaf text-white hover:brightness-110'
            }`}
          >
            Get My Free Estimate
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
