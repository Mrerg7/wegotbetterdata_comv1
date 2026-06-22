import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const site = 'https://wegotbetterdata.com';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  image: {
    domains: ['imagedelivery.net'],
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => !page.includes('404'),
    }),
  ],
});
