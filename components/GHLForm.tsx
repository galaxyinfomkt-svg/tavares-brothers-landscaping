'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { Loader2 } from 'lucide-react';
import { ghl, business } from '@/lib/content';
import QuoteForm from './QuoteForm';

type Props = {
  /**
   * Unique per on-page instance (e.g. "hero", "contact"). Used to build a
   * unique iframe id so the GHL auto-resize script targets the right one when
   * the same form appears more than once on a page.
   */
  instanceId: string;
  title?: string;
  height?: number;
};

/**
 * Native GoHighLevel (LeadConnector) embedded form.
 *
 * This is the ONLY embed that lands in GHL → Submissions and fires the
 * "Form Submitted" workflow trigger (Email + SMS). ALL appearance (labels,
 * placeholders, required asterisk, background, button color) is configured
 * INSIDE the GHL form editor — the iframe is cross-origin and cannot be styled
 * from here. The wrapper is intentionally transparent (no white card) so the
 * fields sit directly on the section background.
 *
 * Until `ghl.formId` is set, it falls back to the built-in form.
 */
export default function GHLForm({ instanceId, title, height = 600 }: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ghl.formId) return;

    // The GHL embed script posts messages (resize/ready) from its iframe once
    // the form is laid out — the most reliable "form has painted" signal.
    const onMessage = (e: MessageEvent) => {
      const origin = typeof e.origin === 'string' ? e.origin : '';
      if (
        origin.includes('leadconnectorhq.com') ||
        origin.includes('msgsndr.com')
      ) {
        setReady(true);
      }
    };
    window.addEventListener('message', onMessage);

    // Hard fallback so the spinner can never get stuck.
    const t = setTimeout(() => setReady(true), 6000);

    return () => {
      window.removeEventListener('message', onMessage);
      clearTimeout(t);
    };
  }, []);

  if (!ghl.formId) {
    return <QuoteForm title={title} />;
  }

  const iframeId = `inline-${ghl.formId}-${instanceId}`;

  return (
    <>
      <div
        className="relative mx-auto w-full max-w-lg"
        style={{ minHeight: `${height}px` }}
      >
        <iframe
          src={`https://api.leadconnectorhq.com/widget/form/${ghl.formId}`}
          style={{ width: '100%', height: `${height}px`, border: 'none' }}
          id={iframeId}
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-form-name={business.name}
          data-height={String(height)}
          data-layout-iframe-id={iframeId}
          data-form-id={ghl.formId}
          title={`${business.name} - Free Estimate`}
          loading="eager"
          onLoad={() => setReady(true)}
        />

        {/* Transparent loading state — just a spinner, no white card. Fades
            out once the form has painted. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-500"
          style={{ opacity: ready ? 0 : 1 }}
        >
          <Loader2 className="h-8 w-8 animate-spin text-sage" />
        </div>
      </div>

      {/* Auto-resize script — afterInteractive so it loads early and the form
          paints fast. next/script dedupes by id, so it loads once even with
          multiple GHLForm instances on the page. */}
      <Script
        id="ghl-form-embed"
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
