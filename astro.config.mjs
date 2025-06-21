import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/abubakryagob.github.io/',
  build: {
    outDir: 'docs',
  },
  integrations: [tailwind()],
});
