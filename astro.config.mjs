import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://dazzling-souffle-ca3e6c.netlify.app',
  integrations: [sitemap()],
});