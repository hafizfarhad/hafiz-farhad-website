import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hafizfarhad.com',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap({
      customPages: [
        'https://hafizfarhad.com',
        'https://hafizfarhad.com/blog',
        'https://hafizfarhad.com/projects',
        'https://hafizfarhad.com/tags',
        'https://hafizfarhad.com/about',
        'https://hafizfarhad.com/contact'
      ]
    })
  ],
  vite: {
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
    ssr: {
      external: ['gray-matter']
    }
  },
  build: {
    assets: '_astro',
    inlineStylesheets: 'auto'
  },
  compressHTML: true
});
