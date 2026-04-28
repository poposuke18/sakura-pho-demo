// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sakura-pho-demo.vercel.app',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'vi', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ja',
        locales: {
          ja: 'ja-JP',
          vi: 'vi-VN',
          en: 'en-US',
        },
      },
    }),
  ],
});
