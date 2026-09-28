export const SITE = {
  name: 'WeGotBetterData.com',
  brand: 'WeGotBetterData',
  title: 'WeGotBetterData.com | Premium Domain for Sale | WeGotBetterData',
  description:
    'WeGotBetterData.com is available now — premium .com domain for AI data quality. Asking $100,000. Escrow-ready transfer. Inquire, make an offer, or buy directly.',
  url: 'https://wegotbetterdata.com',
  locale: 'en_US',
  acquisitionEmail: 'sales@desertrich.com',
  /** USD asking price for Product structured data and on-page CRO. */
  acquisitionOfferPrice: 100000,
  priceDisplay: '$100,000',
  updated: '2026-09-28',
  keywords: [
    'buy .com domains',
    'domain marketplace',
    'WeGotBetterData.com for sale',
    'premium domain names',
    'investment domains',
    'AI data quality domain',
  ],
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroId: '89d893b1-98ff-423e-c0ed-119d780b6900',
  variant: 'public',
} as const;

export function cfImageUrl(
  imageId: string,
  variant: string = CF_IMAGES.variant,
): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const HERO_IMAGE_CDN = cfImageUrl(CF_IMAGES.heroId);

export const ACQUISITION_MAILTO = `mailto:${SITE.acquisitionEmail}?subject=${encodeURIComponent(
  'WeGotBetterData.com — Domain Acquisition Inquiry',
)}&body=${encodeURIComponent(
  'Hello,\n\nI am interested in acquiring WeGotBetterData.com. Please share availability, terms, and next steps.\n\n— ',
)}`;

export const OFFER_MAILTO = `mailto:${SITE.acquisitionEmail}?subject=${encodeURIComponent(
  'WeGotBetterData.com — Offer Submission',
)}&body=${encodeURIComponent(
  'Hello,\n\nI would like to submit an offer for WeGotBetterData.com.\n\nOffer amount (USD): \nCompany / buyer: \nPreferred closing timeline: \n\n— ',
)}`;

export const BUY_MAILTO = `mailto:${SITE.acquisitionEmail}?subject=${encodeURIComponent(
  'WeGotBetterData.com — Buy Now Request',
)}&body=${encodeURIComponent(
  `Hello,\n\nI am ready to purchase WeGotBetterData.com at the asking price of ${SITE.priceDisplay}. Please send escrow instructions and transfer next steps.\n\n— `,
)}`;

export const DISCLAIMER = `This website is for demonstration and informational purposes only. It does not constitute an offer of services, a commitment to deploy, or a guarantee of outcomes. All statistics, projections, and references to specific technologies are based on publicly available information as of ${SITE.updated} and are subject to change.`;

export const NAV_LINKS = [
  { href: '/#problem', label: 'The Problem' },
  { href: '/#opportunity', label: 'The Opportunity' },
  { href: '/#platform', label: 'The Platform' },
  { href: '/#value', label: 'The Value' },
  { href: '/insights/', label: 'Insights' },
] as const;

export const TRUST_SIGNALS = [
  { label: 'Escrow.com ready', detail: 'Secure third-party settlement' },
  { label: 'SSL secured', detail: 'HTTPS end-to-end' },
  { label: 'Clean title', detail: 'Direct owner transfer' },
  { label: 'Fast close', detail: '1–3 business day handling' },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      'Category-defining domains shorten fundraising conversations. Buyers immediately understand the thesis.',
    name: 'Jordan Hale',
    role: 'Domain investor · Tech brands',
  },
  {
    quote:
      'We closed a strategic .com through escrow in under a week. Clear pricing and direct response made the difference.',
    name: 'Priya Natarajan',
    role: 'Corporate development',
  },
  {
    quote:
      'In AI, owning the language of trust is half the go-to-market. This asset speaks for itself.',
    name: 'Marcus Chen',
    role: 'SaaS founder',
  },
] as const;

export const RECENT_SALES = [
  { domain: 'AI.com', detail: 'Reported $70M category sale' },
  { domain: 'Chat.com', detail: 'High-profile conversational AI asset' },
  { domain: 'Voice.ai', detail: 'Six/seven-figure .ai comps' },
] as const;
