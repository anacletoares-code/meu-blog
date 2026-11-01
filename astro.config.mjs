import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://SEU-DOMINIO.netlify.app',
  integrations: [sitemap()],
});