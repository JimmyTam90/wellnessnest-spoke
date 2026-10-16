import AffiliateLink from './AffiliateLink';
import ProductCard from './ProductCard';

// Wording stays attributed to the merchant: this site cannot verify guarantees, dispatch times or stock.
const HIGHLIGHTS = [
  { t: 'Official merchant link', d: 'Opens the product page on the Wellness Nest store.' },
  { t: '90-day refund policy', d: 'As stated by the merchant; eligibility conditions apply.' },
  { t: 'Batch quality claims', d: 'Merchant states third-party lab testing and 75% fulvic acid.' },
  { t: 'Live stock and pricing', d: 'Check current availability on the merchant page before you order.' },
];

function Check() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-amber" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="10" cy="10" r="8" />
      <path d="M6.5 10.5l2.2 2.2L13.5 8" />
    </svg>
  );
}

export default function ProductSection() {
  return (
    <section id="product" className="bg-slate-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-14 md:grid-cols-2 md:gap-12 md:py-20">
        {/* Left: card (DOM order inside card stays IMAGE -> TITLE -> SPECS -> CTA) */}
        <ProductCard />

        {/* Right: vertically centred against the card; stacks below it on mobile */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">The product we link to</h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Wellness Nest sells this resin as a 30-day supply. Our link opens the merchant&rsquo;s own product page, where current price, stock, serving information and refund terms are shown.
          </p>
          <p className="mt-3 leading-relaxed text-slate-600">
            The merchant&rsquo;s page mentions a 90-day refund policy with eligibility conditions. Read the policy itself before relying on it.
          </p>
          <div className="mt-5">
            <AffiliateLink destinationKey="collection:all" placement="collection-link" className="text-sm font-semibold text-amber-dark underline underline-offset-4 hover:text-amber">
              Browse all Wellness Nest products
            </AffiliateLink>
          </div>

          <div className="mt-6 rounded-xl border border-amber/30 bg-amber-50/40 p-5">
            <h3 className="text-base font-semibold text-navy">Trust &amp; value highlights</h3>
            <ul className="mt-4 space-y-3">
              {HIGHLIGHTS.map((h) => (
                <li key={h.t} className="flex gap-3">
                  <Check />
                  <div>
                    <p className="text-sm font-semibold text-navy">{h.t}</p>
                    <p className="text-sm leading-relaxed text-slate-600">{h.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <AffiliateLink
              destinationKey="product:pure-shilajit-essence"
              placement="product-section-secondary"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-navy px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white active:bg-slate-800 sm:w-auto"
            >
              Verify stock &amp; pricing at Wellness Nest
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </AffiliateLink>
          </div>
        </div>
      </div>
    </section>
  );
}
