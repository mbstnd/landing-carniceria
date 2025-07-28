import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  site: 'https://carniceriasanmartin.cl',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    })
  ],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  },
  build: {
    inlineStylesheets: 'auto'
  }
});
