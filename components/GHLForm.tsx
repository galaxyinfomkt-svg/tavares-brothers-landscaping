'use client';

import Script from 'next/script';
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
 * Until `ghl.formId` is set, it falls back to the built-in form so the site is
 * never shipped with an empty iframe.
 */
export default function GHLForm({ instanceId, title, height = 492 }: Props) {
  if (!ghl.formId) {
    return <QuoteForm title={title} />;
  }

  const iframeId = `inline-${ghl.formId}-${instanceId}`;

  return (
    <>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${ghl.formId}`}
        style={{
          width: '100%',
          height: `${height}px`,
          border: 'none',
          borderRadius: '12px',
        }}
        id={iframeId}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-form-name={business.name}
        data-height={String(height)}
        data-layout-iframe-id={iframeId}
        data-form-id={ghl.formId}
        title={`${business.name} - Free Estimate`}
      />
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
