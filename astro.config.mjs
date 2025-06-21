import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'docs',
  },
  integrations: [tailwind()],
});
