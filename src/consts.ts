export const SITE = {
  name: 'WeGotBetterData.com',
  title: 'WeGotBetterData.com — The Definitive Index for AI Data Excellence',
  description:
    'WeGotBetterData.com is the premium digital asset positioned to become the trusted, independent index for AI data quality — available for strategic acquisition.',
  url: 'https://wegotbetterdata.com',
  locale: 'en_US',
  acquisitionEmail: 'sales@desertrich.com',
  updated: '2026-06-22',
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

export const DISCLAIMER = `This website is for demonstration and informational purposes only. It does not constitute an offer of services, a commitment to deploy, or a guarantee of outcomes. All statistics, projections, and references to specific technologies are based on publicly available information as of ${SITE.updated} and are subject to change.`;
