import Image from 'next/image';
import AffiliateLink, { CTA_CLASS } from '@/components/AffiliateLink';
import ProductSection from '@/components/ProductSection';
import { PRODUCT } from '@/data/product';

const CHECKS = [
  { t: 'Where it comes from', d: 'Look for a stated origin and altitude, not just the word "Himalayan". Ask how the claim is backed up.' },
  { t: 'What the lab report covers', d: 'A useful report names the batch, the lab, heavy-metal results, and how fulvic acid was measured.' },
  { t: 'What form you are buying', d: 'Resin, powder, capsules and gummies differ in handling, dose size and added ingredients. Read the full label.' },
];
const GUIDE = [
  'Match the batch number on the jar to the batch on the report.',
  'Check that the report lists lead, arsenic, cadmium and mercury results.',
  'Treat percentages without a named test method as marketing, not evidence.',
  'Read the refund terms, including eligibility, before you order.',
  'Ask a clinician first if you take prescription medication or have a medical condition.',
];
const FAQ = [
  ['Is this site the seller?', 'No. This is an independent guide. Orders, shipping, refunds and support are handled by Wellness Nest.'],
  ['Are the product claims verified by you?', 'No. Figures such as fulvic acid content and lab testing are the merchant\u2019s statements. We have not tested the product.'],
  ['Is the product in stock?', 'When we last checked, the merchant page showed it as out of stock. Availability changes, so confirm on the merchant\u2019s page.'],
  ['Is shilajit safe for everyone?', 'Not necessarily. Talk to a doctor or pharmacist first, especially if you are pregnant, on medication, or managing a health condition.'],
];

export default function Home() {
  const hero = PRODUCT.images.primary;
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-20">
          <div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Shilajit resin: what to check before you buy</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              A plain-language guide to sourcing, lab reports and merchant claims, written for adults who want to compare shilajit products carefully.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <AffiliateLink destinationKey="product:pure-shilajit-essence" placement="hero" className={CTA_CLASS}>Check availability at Wellness Nest</AffiliateLink>
              <a href="#guide" className="text-sm font-medium text-slate-200 underline underline-offset-4 hover:text-white">Read the buying guide</a>
            </div>
            <p className="mt-4 max-w-xl text-xs leading-relaxed text-slate-400">
              This page contains affiliate links. We may earn a commission when you buy through eligible links, at no extra cost to you.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-800">
            <Image src={hero.src} alt={hero.alt} width={hero.width} height={hero.height} priority sizes="(min-width: 768px) 45vw, 100vw" className="aspect-square h-auto w-full object-cover" />
          </div>
        </div>
      </section>

      <section id="overview" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl">Three things worth checking first</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {CHECKS.map((c) => (
            <div key={c.t} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-navy">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <ProductSection />

      <section id="guide" className="mx-auto max-w-3xl px-4 py-14 md:py-20">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl">How to read a shilajit listing</h2>
        <ol className="mt-8 list-decimal space-y-4 pl-6 leading-relaxed text-slate-700 marker:font-semibold marker:text-amber">
          {GUIDE.map((g) => <li key={g}>{g}</li>)}
        </ol>
      </section>

      <section id="faq" className="bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-20">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Questions</h2>
          <div className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
            {FAQ.map(([q, a]) => (
              <details key={q} className="group p-5">
                <summary className="cursor-pointer list-none font-medium text-navy marker:content-none">{q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to compare for yourself?</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">Open the merchant page to see current price, stock and lab-report links.</p>
          <div className="mt-7">
            <AffiliateLink destinationKey="product:pure-shilajit-essence" placement="final-cta" className={CTA_CLASS}>Check availability at Wellness Nest</AffiliateLink>
          </div>
          <p className="mx-auto mt-5 max-w-xl text-xs text-slate-400">Affiliate link. We may earn a commission at no extra cost to you.</p>
        </div>
      </section>
    </>
  );
}
