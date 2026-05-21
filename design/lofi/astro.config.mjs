import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
      configFile: fileURLToPath(new URL('./tailwind.config.mjs', import.meta.url)),
    }),
  ],
});
