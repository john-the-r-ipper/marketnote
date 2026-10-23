import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './site.config.mjs';

const primaryPaths = [
  '/onlyorders/',
  '/blog/onlyorders-what-is-onlyorders/',
  '/blog/onlyorders-use-cases-chat-first-stores/',
  '/blog/onlyorders-how-it-works/',
];

export default defineConfig({
  site: siteConfig.siteUrl,
  base: siteConfig.basePath,
  integrations: [
    sitemap({
      changefreq: 'weekly',
      serialize(item) {
        const path = new URL(item.url).pathname;
        item.priority = primaryPaths.some((p) => path.endsWith(p)) ? 1.0 : 0.6;
        item.changefreq = 'weekly';
        return item;
      },
    }),
  ],
});
