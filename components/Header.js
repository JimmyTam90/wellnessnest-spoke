'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AffiliateLink, { CTA_CLASS } from './AffiliateLink';
import { asset } from '@/lib/config';

const NAV = [
  { href: '/#overview', label: 'Overview' },
  { href: '/#product', label: 'Product' },
  { href: '/#guide', label: 'Buying guide' },
  { href: '/#faq', label: 'FAQ' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const link = 'text-sm font-medium text-slate-200 hover:text-white';
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-4">
        <Link href="/" onClick={close} className="flex shrink-0 items-center" aria-label="PrimeGearLab home">
          <Image src={asset('/logo-trimmed.png')} alt="PrimeGearLab Independent Lab" width={1181} height={901} unoptimized priority className="h-12 w-auto" />
        </Link>

        {/* Desktop: nav + CTA right-aligned */}
        <nav aria-label="Primary" className="ml-auto hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={link}>{n.label}</Link>
          ))}
          <AffiliateLink placement="header" className={CTA_CLASS}>Check availability</AffiliateLink>
        </nav>

        {/* Mobile: hamburger */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-md text-white hover:bg-white/10 md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-white/10 bg-navy px-4 pb-5 pt-2 md:hidden">
          <ul className="flex flex-col">
            <li><Link href="/" onClick={close} className="block py-3 text-base font-medium text-white">Home</Link></li>
            {NAV.map((n) => (
              <li key={n.href}><Link href={n.href} onClick={close} className="block py-3 text-base font-medium text-slate-200">{n.label}</Link></li>
            ))}
          </ul>
          <AffiliateLink placement="mobile-menu" className={`${CTA_CLASS} mt-3 w-full`}>Check availability</AffiliateLink>
        </nav>
      )}
    </header>
  );
}
