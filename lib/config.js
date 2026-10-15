// NEXT_PUBLIC_BASE_PATH is injected from next.config.js, so the subpath is defined in exactly one place.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '/wellness-nest';
const ORIGIN = 'https://www.primegearlab.com';

export const SITE = {
  brandName: 'Wellness Nest',
  publisher: 'PrimeGearLab',
  contactEmail: 'daniaengracia26377@gmail.com',
  origin: ORIGIN,
  basePath: BASE_PATH,
  canonical: `${ORIGIN}${BASE_PATH}`,
  year: 2026,
};

// Plain <img>/<link> URLs are NOT auto-prefixed by Next.js, so prefix public/ assets explicitly.
export const asset = (p) => `${BASE_PATH}${p.startsWith('/') ? p : `/${p}`}`;
