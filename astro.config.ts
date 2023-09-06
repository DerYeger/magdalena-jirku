import mdx from '@astrojs/mdx'
import prefetch from '@astrojs/prefetch'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'
import critters from 'astro-critters'
import robotsTxt from 'astro-robots-txt'
import autoprefixer from 'autoprefixer'
import { tsconfigPaths } from 'vite-plugin-lib'

// https://astro.build/config
export default defineConfig({
  site: 'https://magdalena-jirku.at',
  server: {
    host: true,
  },
  integrations: [
    mdx({
      extendMarkdownConfig: true,
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    vue(),
    prefetch(),
    sitemap(),
    robotsTxt(),
    // Critters is disabled because it doesn't support some selectors used by Tailwind
    critters({ critters: false && { pruneSource: true } }),
  ],
  vite: {
    plugins: [tsconfigPaths({ verbose: true })],
    css: {
      postcss: {
        plugins: [autoprefixer()],
      },
    },
  },
  markdown: {
    gfm: true,
  },
})
