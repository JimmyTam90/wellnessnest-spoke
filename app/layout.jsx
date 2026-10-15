import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCta from '@/components/StickyCta';
import { SITE, asset } from '@/lib/config';
import { PRODUCT } from '@/data/product';

const TITLE = 'Shilajit Resin Buying Guide: What to Check Before You Buy';
const DESC = 'An independent guide to Himalayan shilajit resin: sourcing, lab reports, and how to read merchant claims, with a link to the Wellness Nest product page.';
const OG = PRODUCT.images.primary; // product image only; never the logo or favicon

export const metadata = {
  metadataBase: new URL(SITE.origin),
  title: TITLE,
  description: DESC,
  alternates: { canonical: SITE.canonical }, // absolute: avoids losing the subpath
  icons: {
    icon: [
      { url: asset('/favicon.ico'), sizes: 'any' },
      { url: asset('/favicon-32.png'), type: 'image/png', sizes: '32x32' },
    ],
    shortcut: asset('/favicon.ico'),
    apple: asset('/apple-touch-icon.png'),
  },
  openGraph: {
    type: 'website',
    url: SITE.canonical,
    title: TITLE,
    description: DESC,
    siteName: SITE.publisher,
    locale: 'en_US',
    images: [{ url: OG.src, width: OG.width, height: OG.height, alt: OG.alt }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [OG.src] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
