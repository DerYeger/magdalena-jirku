import { expect, test } from '@playwright/test'

test.describe('Drawings', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/drawings')
  })

  test('shows the drawings', async ({ page }) => {
    const gallery = page.locator('.gallery')
    await expect(gallery).toBeVisible()
    expect(await gallery.locator('> div').count()).toBeGreaterThan(1)
  })
})
