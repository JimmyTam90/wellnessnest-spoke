import { SITE } from '@/lib/config';
export default function sitemap() {
  return ['', '/privacy', '/terms', '/affiliate-disclosure'].map((p) => ({ url: `${SITE.canonical}${p}`, changeFrequency: 'monthly' }));
}
