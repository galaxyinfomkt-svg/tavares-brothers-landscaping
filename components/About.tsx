'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';

const highlights = [
  'In Business Since 1994 — Over 25 Years of Experience',
  'Free, No-Obligation Estimates',
  'Fully Licensed & Insured',
  'Residential & Commercial Projects',
  'Serving Hudson, Sudbury, Marlborough & Surrounding Areas',
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-cream bg-leaf-texture py-20 sm:py-28"
    >
      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <Reveal className="order-1 lg:order-none">
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl shadow-forest/20">
              <Image
                src="https://i0.wp.com/tavareslandscape.com/wp-content/uploads/2022/03/gl21781636192214.jpg?fit=800%2C600&ssl=1"
                alt="Tavares Brothers team beautifying a residential garden in Hudson, MA"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-forest px-7 py-5 text-center shadow-xl sm:block">
              <p className="font-display text-4xl font-bold text-sage">25+</p>
              <p className="text-xs font-medium uppercase tracking-wider text-cream/90">
                Years of
                <br />
                Experience
              </p>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <div>
          <Reveal>
            <span className="eyebrow">Who We Are</span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
              A Family Business Built on 25+ Years of Excellence
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-charcoal/75">
              At Tavares Brothers Landscaping, we believe that a beautiful
              outdoor space begins with a genuine passion for nature and
              craftsmanship. Since 1994, our family-owned business has been
              transforming lawns, gardens, and commercial properties across
              Hudson, Sudbury, and Marlborough, Massachusetts.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal/75">
              What sets us apart is our unwavering commitment to customer
              satisfaction. Every project — from routine lawn maintenance to
              full landscape design — is handled with the same attention to
              detail and care we&apos;d give our own home. Our team is fully
              insured and backed by decades of hands-on experience.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-leaf" />
                  <span className="font-medium text-charcoal/85">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
