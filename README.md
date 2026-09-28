# WeGotBetterData.com

Premium domain acquisition site for **WeGotBetterData.com** — an Astro + Tailwind static site deployed on Cloudflare Workers.

## Features

- SEO title/meta format for domain sales, canonical tags, robots.txt, XML sitemap
- Schema.org `Product`, `Organization`, `WebSite`, `WebPage` (+ `Article` on insights)
- Above-the-fold price, Buy Now / Make Offer / Contact Agent CTAs
- Trust signals, urgency indicators, testimonials, sticky buy bar
- Mobile nav (48px tap targets), dark/light theme toggle, exit-intent capture
- Insights blog for valuation guides and market trends
- HTTPS redirects, HSTS, security headers via worker + `_headers`

## Local development

```bash
npm install
npm run dev -- --port 4327 --host 127.0.0.1
```

Open [http://127.0.0.1:4327](http://127.0.0.1:4327).

## Build & preview

```bash
npm run build
npm run preview -- --port 4327 --host 127.0.0.1
```

## Deploy (Cloudflare Workers)

```bash
npm run build
npm run deploy
```

Requires Wrangler authentication against the `wegotbetterdata-comv1` worker configured in `wrangler.toml`.

## Acquisition contact

- Email: `sales@desertrich.com`
- Asking price: `$100,000` (update in `src/consts.ts`)

## Analytics

CTA clicks push to `window.dataLayer` (`cta_click`, `offer_submit`). Wire Google Tag Manager or your pixel by adding the loader snippet in `BaseLayout.astro` when credentials are available.
