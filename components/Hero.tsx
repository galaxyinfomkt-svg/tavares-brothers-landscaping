'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, ImageIcon, ShieldCheck, Star } from 'lucide-react';
import { business, wp } from '@/lib/content';
import QuoteForm from './QuoteForm';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background image — real landscaping work */}
      <div className="absolute inset-0">
        <Image
          src={wp('gl22140658868534', 1600, 1200)}
          alt="Professionally landscaped residential front yard with shrubs and manicured lawn by Tavares Brothers in Hudson, Massachusetts"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
      </div>

      {/* Content */}
      <div className="container-px relative z-10 grid items-center gap-12 pt-28 pb-16 lg:grid-cols-[1.1fr_minmax(380px,460px)] lg:gap-10 lg:pb-20">
        {/* Left: headline */}
        <div className="max-w-2xl">
          <motion.span
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-sage/40 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sage backdrop-blur-sm"
          >
            <ShieldCheck className="h-4 w-4" />
            Free Estimates · Licensed &amp; Insured · Since 1994
          </motion.span>

          <motion.h1
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
            className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Expert Landscaping Services in Hudson, Massachusetts
          </motion.h1>

          <motion.p
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.24 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-cream/90 sm:text-xl"
          >
            Lawn care, gardening, commercial landscaping, and more — trusted by
            Hudson-area homeowners and businesses for over 25 years.
          </motion.p>

          <motion.div
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.36 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a href={business.phoneHref} className="btn-primary">
              <Phone className="h-4 w-4" />
              Call {business.phone}
            </a>
            <a href="#gallery" className="btn-ghost">
              <ImageIcon className="h-4 w-4" />
              View Our Work
            </a>
          </motion.div>

          <motion.div
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-9 flex items-center gap-3 text-cream/85"
          >
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-sage text-sage" />
              ))}
            </div>
            <span className="text-sm font-medium">
              5.0 rating · Trusted across Hudson, Sudbury &amp; Marlborough
            </span>
          </motion.div>
        </div>

        {/* Right: quote form */}
        <motion.div
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="rounded-3xl bg-white p-6 shadow-2xl shadow-black/40 sm:p-8"
        >
          <QuoteForm title="Get a Free Estimate" />
        </motion.div>
      </div>
    </section>
  );
}
