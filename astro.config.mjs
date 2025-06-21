import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  base: '/',
  integrations: [tailwind()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
