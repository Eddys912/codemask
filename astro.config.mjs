import { defineConfig, envField } from 'astro/config';

import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    allowedHosts: true,
  },
  site: import.meta.env.SITE_URL,
  env: {
    schema: {
      SITE_URL: envField.string({
        context: 'server',
        access: 'public',
      }),
      SITE_TITLE: envField.string({
        context: 'server',
        access: 'public',
        default: 'Codemask - Custom banner generator',
      }),
      SITE_DESC: envField.string({
        context: 'server',
        access: 'public',
        default:
          'Customize banners for your GitHub README files in seconds. Add a title, subtitle, keywords, and an icon or image to give your project a professional, eye-catching visual presentation that will grab the attention of other developers.',
      }),
      SITE_KEYWORDS: envField.string({
        context: 'server',
        access: 'public',
        default: 'codemask, banner',
      }),
      SITE_OG_IMAGE: envField.string({
        context: 'server',
        access: 'public',
        default: '/og.png',
      }),
      SITE_AUTHOR: envField.string({
        context: 'server',
        access: 'public',
        default: 'edavnix',
      }),
      SITE_THEME_COLOR: envField.string({
        context: 'server',
        access: 'public',
        default: '#0f0f0f',
      }),
      SITE_NAME: envField.string({
        context: 'server',
        access: 'public',
        default: 'Codemask',
      }),
      SITE_LOCALE: envField.string({
        context: 'server',
        access: 'public',
        default: 'en_US',
      }),
    },
  },
});
