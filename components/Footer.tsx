'use client';

import Image from 'next/image';
import { Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { business, navLinks } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal text-cream">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="relative h-14 w-[150px]">
              <Image
                src={business.logo}
                alt="Tavares Brothers Landscaping logo"
                fill
                sizes="150px"
                className="object-contain object-left"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/65">
              A family-owned landscaping business beautifying lawns and gardens
              across the Hudson, MA area since 1994.
            </p>
            <a
              href={business.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on Facebook"
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sage transition hover:bg-leaf hover:text-white"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-sage">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-sage"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold text-sage">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li>
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-sage"
                >
                  <Phone className="h-4 w-4 text-sage" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-sage"
                >
                  <Mail className="h-4 w-4 text-sage" />
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                {business.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-cream/55 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Tavares Brothers Landscaping. All
            rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-sage">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-sage">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
