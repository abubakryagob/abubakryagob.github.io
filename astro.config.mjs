import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  build: {
    outDir: 'docs',
  },
  base: '/',
  integrations: [tailwind()],
});
