// Product manifest. Evidence: merchant product page fetched 2026-10-15 (OBSERVED).
const CDN = 'https://wellnessnest.co/cdn/shop/files/';

export const PRODUCT = {
  id: 'shilajit-resin-30g',
  destinationKey: 'product:pure-shilajit-essence',
  // Name as listed on the merchant page today; the supplied slug redirects to it.
  name: 'ShilaSource Himalayan Shilajit Resin (30 g jar)',
  seedName: 'Pure Shilajit Essence',
  sourceUrl: 'https://wellnessnest.co/products/shilasource-himalayan-shilajit-resin',
  availability: 'AVAILABILITY_NOT_VERIFIED', // page showed "Out of stock" at fetch time
  images: {
    primary: {
      src: `${CDN}hf_20260310_083540_d6a11011-bb2f-4a3d-9174-836563132b39.webp?v=1773131913`,
      width: 1024, height: 1024,
      alt: 'Jar of ShilaSource Himalayan Shilajit Resin',
    },
    secondary: {
      src: `${CDN}hf_20260310_081816_901d6f49-74e2-445f-8a4c-e216c77577f1.webp?v=1773131913`,
      width: 1024, height: 1024,
      alt: 'ShilaSource Himalayan Shilajit Resin, alternate product photo',
    },
  },
  // Attributed to the merchant; not independently verified.
  specs: [
    'Resin form, 30-day supply (30 g jar)',
    'Merchant states 75% fulvic acid',
    'Merchant states batch lab testing and published reports',
    'Merchant states Himalayan sourcing above 17,000 ft',
  ],
};
