import { SITE } from '@/lib/config';
export default function robots() {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: `${SITE.canonical}/sitemap.xml` };
}
