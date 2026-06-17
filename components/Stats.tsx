'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { stats, business } from '@/lib/content';

export default function Stats() {
  return (
    <section className="bg-leaf py-14">
      <div className="container-px">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider text-white/80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-white/20 pt-10 text-center sm:flex-row sm:gap-6">
          <p className="font-display text-xl font-semibold text-white sm:text-2xl">
            Ready to transform your outdoor space?
          </p>
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-forest shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream"
          >
            <Phone className="h-4 w-4" />
            Call {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
