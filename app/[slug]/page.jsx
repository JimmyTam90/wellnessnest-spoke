import { notFound } from 'next/navigation';
import { SITE } from '@/lib/config';

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ slug: 'privacy-policy' }, { slug: 'terms-of-service' }, { slug: 'affiliate-disclosure' }, { slug: 'contact' }];
}

const PAGES = {
  'privacy-policy': {
    title: 'Privacy Policy',
    body: [
      'This site does not run analytics, advertising pixels or cookies of its own at this time. If that changes, this policy will be updated first.',
      'When you click a link to Wellness Nest you leave this site. The merchant and its affiliate platform may set cookies and collect data under their own policies.',
      `If you email us, we use your address only to reply. Contact: ${SITE.contactEmail}.`,
    ],
  },
  'terms-of-service': {
    title: 'Terms of Service',
    body: [
      'This site provides general information only. It is not medical advice and is not a substitute for a doctor or pharmacist.',
      'Product details, prices, stock and policies belong to the merchant and may change. Confirm them on the merchant\u2019s website before buying.',
      'We are not responsible for the merchant\u2019s products, orders, shipping or refunds.',
    ],
  },
  'affiliate-disclosure': {
    title: 'Affiliate Disclosure',
    body: [
      'This website contains affiliate links. We may earn a commission when you purchase through eligible links, at no additional cost to you.',
      'We are an independent publisher, not Wellness Nest. A link does not mean we tested, endorse or guarantee a product.',
    ],
  },
  contact: {
    title: 'Contact',
    body: [
      'Questions about this guide? Email us and we will reply as soon as we can.',
      'We do not handle orders, shipping or refunds. For those, contact Wellness Nest directly.',
    ],
  },
};

export function generateMetadata({ params }) {
  const p = PAGES[params.slug];
  return p ? { title: `${p.title} | PrimeGearLab`, alternates: { canonical: `${SITE.canonical}/${params.slug}` } } : {};
}

export default function Legal({ params }) {
  const p = PAGES[params.slug];
  if (!p) notFound();
  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-navy">{p.title}</h1>
      <div className="mt-6 space-y-4 leading-relaxed text-slate-700">
        {p.body.map((t) => <p key={t}>{t}</p>)}
        {params.slug === 'contact' && (
          <p><a className="font-medium text-amber-dark underline" href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a></p>
        )}
      </div>
      {params.slug !== 'contact' && <p className="mt-8 text-xs text-slate-500">General template. Have it reviewed for your jurisdiction before relying on it.</p>}
    </article>
  );
}
