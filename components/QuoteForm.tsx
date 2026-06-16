'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Phone, Mail, User, Send, CheckCircle2 } from 'lucide-react';
import { business } from '@/lib/content';

type FormValues = {
  fullName: string;
  phone: string;
  email: string;
  service: string;
};

const serviceOptions = [
  'Lawn Maintenance',
  'Gardening & Flowers',
  'Commercial Landscaping',
  'Residential Landscaping',
  'Spring & Fall Cleanup',
  'Tree Trimming & Removal',
  'Mulching & Edging',
  'Overseeding',
  'Landscape Design',
  'Other',
];

const fieldClasses =
  'w-full rounded-lg border border-charcoal/15 bg-white py-3.5 pl-11 pr-4 text-charcoal placeholder-charcoal/45 outline-none transition focus:border-leaf focus:ring-2 focus:ring-leaf/20';

export default function QuoteForm({ title }: { title?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setSubmitError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(body?.error || 'Request failed. Please try again.');
      }
      setSubmitted(true);
      reset();
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please call us instead.'
      );
    }
  };

  if (submitted) {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
        <CheckCircle2 className="h-16 w-16 text-leaf" />
        <h3 className="mt-5 font-display text-2xl font-bold text-charcoal">
          Thank You!
        </h3>
        <p className="mt-3 max-w-sm text-charcoal/70">
          Your request has been received. Our team will get back to you within
          24 hours. For urgent needs, call{' '}
          <a
            href={business.phoneHref}
            className="font-semibold text-leaf hover:underline"
          >
            {business.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn-primary mt-7"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="mb-6 text-center">
        <h3 className="font-display text-2xl font-bold text-charcoal sm:text-3xl">
          {title ?? 'Get Your Free Quote'}
        </h3>
        <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-leaf" />
        <p className="mt-3 text-sm text-charcoal/60">
          Free, no-obligation estimate. We reply within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        <div>
          <div className="relative">
            <User className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-charcoal/35" />
            <input
              type="text"
              placeholder="Name *"
              aria-label="Full name"
              className={fieldClasses}
              {...register('fullName', { required: 'Please enter your name' })}
            />
          </div>
          {errors.fullName && (
            <p className="mt-1 text-xs font-medium text-red-600">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <div className="relative">
            <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-charcoal/35" />
            <input
              type="tel"
              placeholder="Phone *"
              aria-label="Phone number"
              className={fieldClasses}
              {...register('phone', { required: 'Please enter your phone' })}
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-xs font-medium text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-charcoal/35" />
            <input
              type="email"
              placeholder="Email *"
              aria-label="Email address"
              className={fieldClasses}
              {...register('email', {
                required: 'Please enter your email',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email',
                },
              })}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-xs font-medium text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <select
            aria-label="Service needed"
            defaultValue=""
            className="w-full rounded-lg border border-charcoal/15 bg-white px-4 py-3.5 text-charcoal outline-none transition focus:border-leaf focus:ring-2 focus:ring-leaf/20 [&:invalid]:text-charcoal/45"
            {...register('service', { required: 'Please select a service' })}
          >
            <option value="" disabled>
              Select Service Needed
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-xs font-medium text-red-600">
              {errors.service.message}
            </p>
          )}
        </div>

        {submitError && (
          <p
            role="alert"
            className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700 ring-1 ring-red-200"
          >
            {submitError} Or call us at{' '}
            <a href={business.phoneHref} className="underline">
              {business.phone}
            </a>
            .
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-leaf py-4 text-base font-semibold text-white shadow-lg shadow-leaf/20 transition-all duration-300 hover:bg-forest hover:shadow-xl hover:shadow-forest/30 focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Send className="h-4 w-4" />
          {isSubmitting ? 'Sending...' : 'Request Free Estimate'}
        </button>
      </form>
    </>
  );
}
