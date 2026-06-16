'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { services, business } from '@/lib/content';
import Reveal from './Reveal';

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-charcoal py-20 text-cream sm:py-28"
    >
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-sage">What We Do</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
            Comprehensive Landscaping Services
          </h2>
          <p className="mt-4 text-cream/70">
            From weekly lawn care to full residential and commercial
            landscaping, we bring expertise, premium materials, and meticulous
            craftsmanship to every property.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-leaf hover:bg-white/[0.06] hover:shadow-xl hover:shadow-black/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-leaf/15 text-sage transition-colors duration-300 group-hover:bg-leaf group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-cream sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sage">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-14 text-center">
          <a href={business.phoneHref} className="btn-primary">
            <Phone className="h-4 w-4" />
            Get a Free Estimate
          </a>
        </Reveal>
      </div>
    </section>
  );
}
