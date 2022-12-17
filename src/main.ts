import MasonryWall from '@yeger/vue-masonry-wall'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { ViteSSG } from 'vite-ssg'
import VueEasyLightbox from 'vue-easy-lightbox'
import * as VueMarmosetViewer from 'vue-marmoset-viewer'

import App from './App.vue'

import '@unocss/reset/normalize.css'

import 'uno.css'
import './styles/main.css'
import type { UserModule } from '~/types'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(
      import.meta.glob<{ install: UserModule }>('./modules/*.ts', {
        eager: true,
      })
    ).forEach((i) => i.install?.(ctx))
    ctx.app.use(MasonryWall)
    ctx.app.use(VueMarmosetViewer.MarmosetViewer)
    ctx.app.use(VueEasyLightbox)
    if (!import.meta.env.DEV && !import.meta.env.SSR) {
      document.body.oncontextmenu = () => false
    }
  }
)
