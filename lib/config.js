// Single source of truth derived from the project input block (Section 1).
export const SITE = {
  brandName: 'Wellness Nest',
  publisher: 'PrimeGearLab',
  contactEmail: 'daniaengracia26377@gmail.com',
  origin: 'https://primegearlab.com',
  basePath: '/wellness-shilajit',
  canonical: 'https://primegearlab.com/wellness-shilajit',
  year: 2026,
};

// Prefix a public-folder asset with the subpath (basePath is NOT auto-added to plain src strings).
export const asset = (p) => `${SITE.basePath}${p.startsWith('/') ? p : `/${p}`}`;
