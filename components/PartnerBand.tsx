import { Flower2, ArrowUpRight } from 'lucide-react';
import { partner } from '@/lib/content';

/**
 * Partner strip for Tavares Flower House — the owner's daughter's florist.
 *
 * The footer link alone sat below Service Areas at the very bottom of a long
 * page, so a visitor would almost never reach it. This puts the shop right
 * after the service cards, where someone has just read "Gardening & Flowers"
 * and cut flowers are the natural next thought.
 *
 * Deliberately cream rather than green: the leaf/charcoal bands on this page
 * are Tavares' own conversion CTAs, and this should not read as one of them.
 */
export default function PartnerBand() {
  return (
    <section className="bg-cream bg-leaf-texture py-12 sm:py-14">
      <div className="container-px">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-2xl border border-leaf/15 bg-white px-6 py-8 text-center shadow-sm sm:flex-row sm:gap-8 sm:px-10 sm:text-left">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-leaf/10 text-leaf">
            <Flower2 className="h-7 w-7" />
          </div>

          <div className="flex-1">
            <span className="eyebrow text-leaf">Our Family Partner</span>
            <h2 className="mt-2 font-display text-2xl font-bold text-charcoal sm:text-3xl">
              {partner.name}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
              {partner.tagline} — custom arrangements for birthdays,
              anniversaries, sympathy and weddings, with local delivery across
              the same MetroWest towns we serve.
            </p>
          </div>

          <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-leaf px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Visit the Flower Shop
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
