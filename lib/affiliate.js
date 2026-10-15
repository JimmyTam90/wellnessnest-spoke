// Central affiliate destination resolver (Section 9). Components must never build affiliate URLs themselves.
// Deep links are copied verbatim from the authoritative input; slugs are NOT altered.
const MAPPING = {
  'product:pure-shilajit-essence': 'https://wellnessnest.co/products/pure-shilajit-essence?ref=hesttjew',
  'collection:all': 'https://wellnessnest.co/collections/all?ref=hesttjew',
};
const DEFAULT_URL = 'https://wellnessnest.co/products/pure-shilajit-essence?ref=hesttjew';
const ALLOWED_HOST = 'wellnessnest.co';
const REQUIRED_PARAM = ['ref', 'hesttjew'];

function validate(raw) {
  try {
    const u = new URL(raw);
    if (u.protocol !== 'https:' || u.hostname !== ALLOWED_HOST) return false;
    return u.searchParams.get(REQUIRED_PARAM[0]) === REQUIRED_PARAM[1];
  } catch {
    return false;
  }
}

/** key: explicit mapping key, or undefined for the default CTA. Returns a URL string or null (fail safe). */
export function resolveAffiliateUrl(key) {
  const url = key ? MAPPING[key] : DEFAULT_URL;
  return url && validate(url) ? url : null;
}

export const AFFILIATE_MAPPING = MAPPING;
export const AFFILIATE_DEFAULT = DEFAULT_URL;
export const validateAffiliateUrl = validate;
