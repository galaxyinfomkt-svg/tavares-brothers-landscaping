'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/lib/content';
import Reveal from './Reveal';

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-cream bg-leaf-texture py-20 sm:py-28">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How It Works</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
            A Simple, Stress-Free Process
          </h2>
          <p className="mt-4 text-charcoal/70">
            From first call to final walkthrough, we make working with us easy
            and transparent at every step.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ y: 24 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-charcoal/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-leaf hover:shadow-xl hover:shadow-leaf/10"
            >
              <span className="font-display text-5xl font-bold text-sage/30">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-charcoal">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
