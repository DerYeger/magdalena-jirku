import { BASE_SCREENSHOT, PAGES } from 'tests/config'
import test, { expect } from '@playwright/test'
import type { Locator } from '@playwright/test'
import process from 'node:process'

test.describe('Screenshots', () => {
  test.beforeEach(async ({ browserName }) => {
    test.skip(browserName !== 'chromium' || process.platform !== 'darwin')
  })

  for (const { url, screenshot } of PAGES) {
    test(url, async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' })
      await page.goto(url)
      const mask: Locator[] = [
        page.locator('video'),
      ]
      await expect(page).toHaveScreenshot({ ...BASE_SCREENSHOT, ...(screenshot ?? {}), mask })
    })
  }
})
