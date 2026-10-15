import AffiliateLink, { CTA_CLASS } from './AffiliateLink';

export default function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
      <AffiliateLink placement="mobile-sticky" className={`${CTA_CLASS} w-full`}>Check availability at Wellness Nest</AffiliateLink>
    </div>
  );
}
