import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  experimental: {
    optimizeHoistedScript: true,
  },
  integrations: [tailwind(), compress()],
  server: { port: 3000 },
  build: {
    server: './server',
  },
});
