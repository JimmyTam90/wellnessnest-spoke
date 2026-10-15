import { resolveAffiliateUrl } from '@/lib/affiliate';

// Real <a>, both mandatory attributes, no click handlers. Renders nothing if no valid destination (Section 9/10).
export default function AffiliateLink({ destinationKey, className = '', children, placement }) {
  const href = resolveAffiliateUrl(destinationKey);
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" data-placement={placement} className={className}>
      {children}
    </a>
  );
}

export const CTA_CLASS =
  'inline-flex items-center justify-center rounded-md bg-amber px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-dark';
