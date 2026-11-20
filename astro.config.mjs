import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mariscoseljaibo.com',
  vite: { plugins: [tailwindcss()] },
  output: 'static',
  integrations: [sitemap()]
});