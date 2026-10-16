import { SITE } from '@/lib/config';
export default function sitemap() {
  return ['', '/privacy-policy', '/terms-of-service', '/affiliate-disclosure', '/contact'].map((p) => ({ url: `${SITE.canonical}${p}`, changeFrequency: 'monthly' }));
}
