import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import solidJs from '@astrojs/solid-js';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), solidJs()],
  output: 'server',
  adapter: cloudflare({ mode: 'directory', functionPerRoute: true }),
});