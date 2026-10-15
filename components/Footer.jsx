import Link from 'next/link';
import { SITE, asset } from '@/lib/config';

const LEGAL = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
];

export default function Footer() {
  return (
    <footer className="bg-navy pb-24 text-slate-300 md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-start md:justify-between">
        <Link href="/" aria-label="PrimeGearLab home" className="shrink-0 self-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset('/logo-trimmed.png')} alt="PrimeGearLab Independent Lab" width={1181} height={901} className="h-24 w-auto" />
        </Link>

        <div className="flex flex-col gap-5 md:items-end">
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
            {LEGAL.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm font-medium text-white hover:underline">{l.label}</Link>
            ))}
            <a href={`mailto:${SITE.contactEmail}`} className="text-sm font-medium text-white hover:underline">Contact</a>
          </nav>
          <div className="max-w-xl space-y-3 text-left text-sm leading-relaxed text-slate-400 md:ml-auto">
            <p>
              This is an independent guide and is not operated by Wellness Nest. It contains affiliate links; we may earn a
              commission on eligible purchases at no extra cost to you. Product claims are the merchant&rsquo;s own.
            </p>
            <p>These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
            <p>Contact: <a className="underline" href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a></p>
            <p>&copy; {SITE.year} Wellness Nest Shilajit Guide. Wellness Nest and ShilaSource are trademarks of their respective owners.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
