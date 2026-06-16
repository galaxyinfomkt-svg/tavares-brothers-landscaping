'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { gallery } from '@/lib/content';
import Reveal from './Reveal';

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const open = (index: number) => setLightbox(index);
  const close = () => setLightbox(null);
  const prev = () =>
    setLightbox((i) =>
      i === null ? i : (i - 1 + gallery.length) % gallery.length
    );
  const next = () =>
    setLightbox((i) => (i === null ? i : (i + 1) % gallery.length));

  return (
    <section id="gallery" className="bg-cream py-20 sm:py-28">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our Portfolio</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
            See the Tavares Brothers Difference
          </h2>
          <p className="mt-4 text-charcoal/70">
            Real photos of lawns, gardens, and properties we&apos;ve
            transformed across the Hudson area.
          </p>
        </Reveal>

        {/* Masonry-style grid */}
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {gallery.map((img, index) => (
            <motion.button
              key={img.src}
              type="button"
              onClick={() => open(index)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4 }}
              className="group relative block w-full overflow-hidden rounded-2xl shadow-md ring-1 ring-charcoal/5"
            >
              <Image
                src={img.src}
                alt={img.alt.replace(/-/g, ' ')}
                width={800}
                height={600}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/15" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && gallery[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/90 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20 sm:right-6"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            <motion.div
              key={gallery[lightbox].src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative flex max-h-[88vh] max-w-[92vw] items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={gallery[lightbox].src}
                alt={gallery[lightbox].alt.replace(/-/g, ' ')}
                className="h-auto max-h-[88vh] w-auto max-w-[92vw] rounded-xl object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
