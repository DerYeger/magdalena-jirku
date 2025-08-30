import test, { chromium } from '@playwright/test'
import type { Browser, PageAssertionsToHaveScreenshotOptions } from '@playwright/test'
import getPort from 'get-port'
import type { playwrightLighthouseConfig } from 'playwright-lighthouse'

export const lighthouseTest = test.extend<
  object,
  { port: number, browser: Browser }
>({
  port: [
    // eslint-disable-next-line no-empty-pattern
    async ({}, use) => {
      // Assign a unique port for each playwright worker to support parallel tests
      const port = await getPort()
      await use(port)
    },
    { scope: 'worker' },
  ],

  browser: [
    async ({ port }, use) => {
      const browser = await chromium.launch({
        args: [`--remote-debugging-port=${port}`],
      })
      await use(browser)
    },
    { scope: 'worker' },
  ],
})

export type Thresholds = playwrightLighthouseConfig['thresholds']

export const BASE_THRESHOLDS: Thresholds = {
  performance: 75,
  accessibility: 100,
  'best-practices': 100,
  seo: 100,
  pwa: undefined,
}

export type ScreenshotOptions = Omit<PageAssertionsToHaveScreenshotOptions, 'mask'>

export const BASE_SCREENSHOT: ScreenshotOptions = {
  fullPage: true,
}

export const PAGES: { url: `/${string}`, thresholds?: Thresholds, screenshot?: ScreenshotOptions }[] = [
  // Home
  {
    url: '/',
  },
  // Legal
  { url: '/impressum' },
  { url: '/legal' },
  // Design
  { url: '/design' },
  { url: '/design/client-projects' },
  {
    url: '/design/showreel-2025',
  },
  { url: '/design/poster-series' },
  {
    url: '/design/bird-walk-cycle',
  },
  { url: '/design/clean-energy' },
  {
    url: '/design/green-starts-here',
  },
  {
    url: '/design/baufon',
    thresholds: {
      performance: 70,
    },
  },
  {
    url: '/design/keenscreen',
    thresholds: {
      performance: 70,
    },
  },
  {
    url: '/design/bicycle-tracking',
  },
  {
    url: '/design/jotunheim-is-calling',
  },
  {
    url: '/design/memorial-cards',
  },
  {
    url: '/design/pharmacists-for-future',
  },
  {
    url: '/design/dreamteam',
  },
  {
    url: '/design/wedding',
  },
  {
    url: '/design/volles-potenzial',
  },
  {
    url: '/design/gestern-heute-morgen',
  },
  // Photography
  {
    url: '/photography',
    // thresholds: {
    //   performance: 75, // preview serves images inefficiently
    // },
    screenshot: {
      fullPage: false,
    },
  },
  // Drawings
  { url: '/drawings' },
]
