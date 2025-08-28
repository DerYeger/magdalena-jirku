import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'
import critters from 'astro-critters'
import icon from 'astro-icon'
import robotsTxt from 'astro-robots-txt'
import { tsconfigPaths } from 'vite-plugin-lib'
import tailwindcss from '@tailwindcss/vite'

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
    // Critters is disabled because it doesn't support some selectors used by Tailwind
    critters({ Critters: false && { pruneSource: true } }),
  ],
  vite: {
    plugins: [tailwindcss(), tsconfigPaths({ verbose: true })],
  },
  prefetch: {
    prefetchAll: true,
  },
  markdown: {
    gfm: true,
  },
})
