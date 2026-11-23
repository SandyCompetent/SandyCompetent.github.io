import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://sandeepmalviya.dev',
  // Matches firebase.json (cleanUrls: true, trailingSlash: false) so canonical URLs never redirect.
  trailingSlash: 'never',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
});
