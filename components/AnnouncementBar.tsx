import Link from 'next/link';
import { Flame, ArrowRight } from 'lucide-react';

/**
 * Seasonal announcement strip above the utility bar.
 *
 * It sits inside the fixed <Header>, so it adds 36px to the header height —
 * every page hero offset (pt-*) and the global scroll-padding-top are sized
 * against that total. Change the height here and those have to move with it.
 */
export default function AnnouncementBar() {
  return (
    <Link
      href="/services/firewood-delivery"
      className="group block bg-earth text-cream transition-colors hover:bg-earth/90"
    >
      <div className="container-px flex h-9 items-center justify-center gap-2 text-[11px] font-semibold tracking-wide sm:text-xs">
        <Flame className="h-3.5 w-3.5 shrink-0 text-sage" />
        {/* The full sentence overflows a 390px phone, so small screens get the
            same message without the lead-in. */}
        <span className="sm:hidden">
          Seasoned firewood ready to be delivered
        </span>
        <span className="hidden sm:inline">
          We now have seasoned firewood ready to be delivered
        </span>
        <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
