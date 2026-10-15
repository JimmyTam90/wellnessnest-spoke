import Image from 'next/image';
import AffiliateLink, { CTA_CLASS } from './AffiliateLink';
import { PRODUCT } from '@/data/product';

// DOM + visual order locked: IMAGE -> TITLE -> DESCRIPTION/SPECS -> CTA. No `order-*`, no absolute positioning.
export default function ProductCard() {
  const img = PRODUCT.images.secondary;
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="bg-slate-100">
        <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(min-width: 768px) 40vw, 100vw" className="aspect-square h-auto w-full object-cover" />
      </div>
      <h3 className="px-5 pt-5 text-xl font-semibold text-navy">{PRODUCT.name}</h3>
      <div className="flex-1 px-5 pb-5 pt-3 text-sm leading-relaxed text-slate-600">
        <p>Resin-format shilajit sold by Wellness Nest. Details below are the merchant&rsquo;s statements, not our testing.</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          {PRODUCT.specs.map((s) => <li key={s}>{s}</li>)}
        </ul>
        <p className="mt-3 text-xs text-slate-500">Stock status was shown as &ldquo;out of stock&rdquo; when we last checked. Confirm on the merchant&rsquo;s page.</p>
      </div>
      <div className="px-5 pb-5">
        <AffiliateLink destinationKey="product:pure-shilajit-essence" placement="product-card" className={`${CTA_CLASS} w-full`}>
          Check availability at Wellness Nest
        </AffiliateLink>
      </div>
    </article>
  );
}
