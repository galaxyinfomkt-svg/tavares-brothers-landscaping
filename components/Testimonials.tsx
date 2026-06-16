'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '@/lib/content';
import Reveal from './Reveal';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-forest py-20 text-cream sm:py-28"
    >
      <div className="absolute inset-0 bg-leaf-texture opacity-60" />
      <div className="container-px relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-sage">Reviews</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
            What Our Neighbors Are Saying
          </h2>
          <p className="mt-4 text-cream/75">
            Real reviews from homeowners and businesses across Hudson, Sudbury,
            and Marlborough.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-14"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.author} className="h-auto">
                <figure className="flex h-full flex-col rounded-2xl bg-white/[0.06] p-7 ring-1 ring-white/10 backdrop-blur-sm">
                  <Quote className="h-9 w-9 text-sage/70" />
                  <div className="mt-3 flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-sage text-sage" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 leading-relaxed text-cream/90">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-white/10 pt-4">
                    <p className="font-display text-lg font-semibold text-sage">
                      {t.author}
                    </p>
                    {t.role && (
                      <p className="text-sm text-cream/60">{t.role}</p>
                    )}
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
