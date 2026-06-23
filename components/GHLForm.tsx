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
 * "Form Submitted" workflow trigger (Email + SMS). The form fields — including
 * the "Select Service Needed" dropdown — are configured in GHL, not here, so
 * the live form updates without a redeploy.
 *
 * While the iframe loads we show a branded spinner and keep the iframe at
 * opacity 0, so the empty white card never flashes before the form paints.
 *
 * Until `ghl.formId` is set, it falls back to the built-in form so the site is
 * never shipped with an empty iframe.
 */
export default function GHLForm({ instanceId, title, height = 492 }: Props) {
  const [loaded, setLoaded] = useState(false);

  // Safety net: reveal the form even if the iframe's onLoad never fires.
  useEffect(() => {
    if (!ghl.formId) return;
    const t = setTimeout(() => setLoaded(true), 6000);
    return () => clearTimeout(t);
  }, []);

  if (!ghl.formId) {
    return <QuoteForm title={title} />;
  }

  const iframeId = `inline-${ghl.formId}-${instanceId}`;

  return (
    <>
      <div className="relative w-full" style={{ minHeight: `${height}px` }}>
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-charcoal/55">
            <Loader2 className="h-8 w-8 animate-spin text-leaf" />
            <span className="text-sm font-medium">Loading form…</span>
          </div>
        )}
        <iframe
          src={`https://api.leadconnectorhq.com/widget/form/${ghl.formId}`}
          style={{
            width: '100%',
            height: `${height}px`,
            border: 'none',
            borderRadius: '12px',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.35s ease',
          }}
          id={iframeId}
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-form-name={business.name}
          data-height={String(height)}
          data-layout-iframe-id={iframeId}
          data-form-id={ghl.formId}
          title={`${business.name} - Free Estimate`}
          onLoad={() => setLoaded(true)}
        />
      </div>
      {/* Auto-resize script — next/script dedupes by id, so it loads once even
          with multiple GHLForm instances on the page. */}
      <Script
        id="ghl-form-embed"
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </>
  );
}
