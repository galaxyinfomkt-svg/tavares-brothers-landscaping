import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import FloatingCall from '@/components/FloatingCall';
import ChatWidget from '@/components/ChatWidget';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tavareslandscape.com'),
  title:
    'Landscaping Services in Hudson MA | Lawn Care & Gardening | Tavares Brothers',
  description:
    'Tavares Brothers Landscaping offers expert lawn care, gardening, commercial landscaping, and cleanup services in Hudson, MA. Family-owned since 1994. Free estimates!',
  keywords: [
    'landscaping Hudson MA',
    'lawn care Hudson Massachusetts',
    'lawn maintenance Hudson MA',
    'gardening and flowers Marlborough MA',
    'residential landscaping Hudson MA',
    'commercial landscaping Middlesex County',
    'landscaping Sudbury MA',
  ],
  authors: [{ name: 'Tavares Brothers Landscaping' }],
  openGraph: {
    title:
      'Landscaping Services in Hudson MA | Lawn Care & Gardening | Tavares Brothers',
    description:
      'Expert lawn care, gardening, and commercial landscaping in Hudson, MA. Family-owned since 1994. Free estimates!',
    url: 'https://www.tavareslandscape.com',
    siteName: 'Tavares Brothers Landscaping',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.tavareslandscape.com',
  },
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LandscapeService',
  name: 'Tavares Brothers Landscaping',
  image:
    'https://i0.wp.com/tavareslandscape.com/wp-content/uploads/2022/02/logo.png',
  '@id': 'https://www.tavareslandscape.com',
  url: 'https://www.tavareslandscape.com',
  telephone: '+1-978-562-1048',
  email: 'info@tavareslandscape.com',
  foundingDate: '1994',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '33 Woodrow St',
    addressLocality: 'Hudson',
    addressRegion: 'MA',
    postalCode: '01749',
    addressCountry: 'US',
  },
  areaServed: ['Hudson, MA', 'Sudbury, MA', 'Marlborough, MA'],
  priceRange: '$$',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        {children}
        <FloatingCall />
        <ChatWidget />
      </body>
    </html>
  );
}
