import { expect, test } from '@playwright/test'

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/legal')
  })

  test('has a link to the home page', async ({ page }) => {
    const homeLink = page.locator('nav').getByRole('link', { name: 'Home' })
    await homeLink.click()
    await expect(page).toHaveURL('/')
  })

  test('has a link to the design page', async ({ page }) => {
    const designLink = page.locator('nav').getByRole('link', { name: 'Design' })
    await designLink.click()
    await expect(page).toHaveURL('/design/')
  })

  test('has a link to the photography page', async ({ page }) => {
    const photographyLink = page.locator('nav').getByRole('link', { name: 'Photography' })
    await photographyLink.click()
    await expect(page).toHaveURL('/photography/')
  })

  test('has a link to the drawings page', async ({ page }) => {
    const drawingsLink = page.locator('nav').getByRole('link', { name: 'Drawings' })
    await drawingsLink.click()
    await expect(page).toHaveURL('/drawings/')
  })
})
