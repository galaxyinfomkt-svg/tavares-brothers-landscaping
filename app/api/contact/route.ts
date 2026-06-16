import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type ContactPayload = {
  fullName?: string;
  phone?: string;
  email?: string;
  propertyType?: string;
  service?: string;
  message?: string;
  consent?: boolean;
};

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const fullName = data.fullName?.trim() ?? '';
  const phone = data.phone?.trim() ?? '';
  const email = data.email?.trim() ?? '';
  const propertyType = data.propertyType?.trim() || 'Not specified';
  const service = data.service?.trim() || 'Not specified';
  const message = data.message?.trim() || '';

  // Server-side validation (mirrors the client rules)
  if (!fullName || !phone || !email) {
    return NextResponse.json(
      { error: 'Name, phone, and email are required.' },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: 'Please provide a valid email address.' },
      { status: 400 }
    );
  }

  // Split the full name into first / last for GHL contact fields.
  const nameParts = fullName.split(/\s+/);
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  // Payload sent to the GHL Inbound Webhook. Every key here is available to
  // map inside the GHL Workflow (contact fields + custom values).
  const payload = {
    full_name: fullName,
    first_name: firstName,
    last_name: lastName,
    phone,
    email,
    property_type: propertyType,
    service_needed: service,
    message,
    sms_consent: Boolean(data.consent),
    source: 'Website — Free Estimate Form',
  };

  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  // Graceful fallback: if the webhook isn't configured yet, don't 500 — log
  // and return success so local development keeps working.
  if (!webhookUrl) {
    // eslint-disable-next-line no-console
    console.warn(
      '[contact] GHL_WEBHOOK_URL not set — request received but not forwarded:',
      payload
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      // eslint-disable-next-line no-console
      console.error('[contact] GHL webhook responded with', res.status);
      return NextResponse.json(
        { error: 'Could not send your request. Please call us instead.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[contact] Unexpected error forwarding to GHL:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please call us instead.' },
      { status: 500 }
    );
  }
}
