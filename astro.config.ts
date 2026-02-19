import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://magdalena-jirku.at',
  server: {
    host: true,
  },
  integrations: [
    icon(),
    mdx({
      extendMarkdownConfig: true,
    }),
    vue(),
    sitemap(),
    robotsTxt(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: {
    prefetchAll: true,
  },
  markdown: {
    gfm: true,
  },
})
