'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { business } from '@/lib/content';
import Reveal from './Reveal';
import GHLForm from './GHLForm';

const contactInfo = [
  { icon: Phone, label: business.phone, href: business.phoneHref },
  { icon: Mail, label: business.email, href: `mailto:${business.email}` },
  { icon: MapPin, label: business.address },
  {
    icon: Globe,
    label: 'Serving Hudson, Sudbury, Marlborough & Surrounding Areas',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-charcoal py-20 text-cream sm:py-28">
      <div className="container-px grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Left: image + info */}
        <Reveal>
          <span className="eyebrow text-sage">Contact Us</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
            Get Your Free Landscaping Estimate
          </h2>
          <p className="mt-4 text-cream/75">
            Fill out the form and we&apos;ll get back to you within 24 hours.
          </p>

          <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="https://i0.wp.com/tavareslandscape.com/wp-content/uploads/2022/03/gl22239750167298.jpg?fit=800%2C600&ssl=1"
              alt="Professionally landscaped property in Hudson, Massachusetts by Tavares Brothers"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <ul className="mt-8 space-y-4">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const content = (
                <span className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-leaf/20 text-sage">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="pt-2 text-cream/85">{info.label}</span>
                </span>
              );
              return (
                <li key={info.label}>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="transition-colors hover:text-sage"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* Right: native GHL form (transparent — no white card) */}
        <Reveal delay={0.1} className="lg:self-center">
          <GHLForm instanceId="contact" title="Request Your Free Estimate" />
        </Reveal>
      </div>
    </section>
  );
}
