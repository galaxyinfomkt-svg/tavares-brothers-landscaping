'use client';

import Script from 'next/script';

/**
 * LeadConnector (GoHighLevel) chat widget. It loads in the bottom-RIGHT corner
 * by default; the FloatingCall button is pinned to the bottom-LEFT so the two
 * never overlap.
 */
export default function ChatWidget() {
  return (
    <>
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="66b622dde70da55c517e7056"
        strategy="afterInteractive"
      />
    </>
  );
}
