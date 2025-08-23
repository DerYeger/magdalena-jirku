import { expect, test } from '@playwright/test'

test.describe('Design', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/design')
  })

  test('can navigate to a project', async ({ page }) => {
    await page.getByText('Client Projects').click()
    await expect(page).toHaveURL('/design/client-projects')
  })
})
