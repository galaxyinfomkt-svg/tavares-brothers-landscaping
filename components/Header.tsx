'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown, ArrowRight } from 'lucide-react';
import { business, navLinks, services } from '@/lib/content';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMobile = () => {
    setOpen(false);
    setMobileServices(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'bg-charcoal/90 shadow-lg shadow-black/20' : 'bg-charcoal/75'
      }`}
    >
      <div className="container-px flex h-20 items-center justify-between">
        <a
          href="/#home"
          className="flex items-center gap-3"
          aria-label="Tavares Brothers Landscaping home"
        >
          <span className="relative h-12 w-[110px] sm:w-[130px]">
            <Image
              src={business.logo}
              alt="Tavares Brothers Landscaping logo"
              fill
              priority
              sizes="130px"
              className="object-contain"
            />
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.label === 'Services' ? (
              <div key={link.href} className="group relative">
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-cream/90 transition-colors hover:text-sage"
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </a>

                {/* Mega-menu */}
                <div className="invisible absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-charcoal/95 p-3 shadow-2xl shadow-black/50 backdrop-blur-md">
                    <div className="grid grid-cols-2 gap-1">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.title}
                            href={`/services/${service.slug}`}
                            className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
                          >
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-leaf/15 text-sage transition-colors group-hover/item:bg-leaf group-hover/item:text-white">
                              <Icon className="h-5 w-5" />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold text-cream">
                                {service.title}
                              </span>
                              <span className="mt-0.5 line-clamp-1 block text-xs text-cream/55">
                                {service.description}
                              </span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                    <Link
                      href="/#services"
                      className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-leaf/15 py-3 text-sm font-semibold text-sage transition-colors hover:bg-leaf hover:text-white"
                    >
                      View All Services
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-cream/90 transition-colors hover:text-sage"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <a href={business.phoneHref} className="btn-primary">
            <Phone className="h-4 w-4" />
            {business.phone}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-cream lg:hidden"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-y-auto border-t border-white/10 bg-charcoal/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden ${
          open ? 'max-h-[80vh]' : 'max-h-0'
        }`}
      >
        <nav className="container-px flex flex-col gap-1 py-4">
          {navLinks.map((link) =>
            link.label === 'Services' ? (
              <div key={link.href}>
                <button
                  type="button"
                  onClick={() => setMobileServices((v) => !v)}
                  aria-expanded={mobileServices}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-cream/90 transition-colors hover:bg-white/5"
                >
                  Services
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      mobileServices ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ${
                    mobileServices ? 'max-h-[520px]' : 'max-h-0'
                  }`}
                >
                  <div className="space-y-0.5 pb-1 pl-3">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.title}
                          href={`/services/${service.slug}`}
                          onClick={closeMobile}
                          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-cream/80 transition-colors hover:bg-white/5 hover:text-sage"
                        >
                          <Icon className="h-4 w-4 text-sage" />
                          {service.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="rounded-lg px-3 py-3 text-base font-medium text-cream/90 transition-colors hover:bg-white/5 hover:text-sage"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href={business.phoneHref}
            onClick={closeMobile}
            className="btn-primary mt-2"
          >
            <Phone className="h-4 w-4" />
            {business.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
