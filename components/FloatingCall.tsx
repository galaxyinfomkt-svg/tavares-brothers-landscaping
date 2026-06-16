import { Phone } from 'lucide-react';
import { business } from '@/lib/content';

export default function FloatingCall() {
  return (
    <a
      href={business.phoneHref}
      aria-label={`Call ${business.phone}`}
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-leaf text-white shadow-lg shadow-forest/40 transition-all duration-300 hover:scale-105 hover:bg-forest focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      {/* Attention pulse */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-leaf opacity-30" />
      <Phone className="h-6 w-6 sm:h-7 sm:w-7" />

      {/* Desktop tooltip */}
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-charcoal px-4 py-2 text-sm font-semibold text-cream opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 lg:block">
        Call {business.phone}
      </span>
    </a>
  );
}
