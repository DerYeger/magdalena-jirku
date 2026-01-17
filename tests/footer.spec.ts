import { expect, test } from '@playwright/test'

test.describe('Footer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('has a link to the about page', async ({ page }) => {
    await page.locator('footer').getByRole('link', { name: 'Legal' }).click()
    await expect(page).toHaveURL('/legal')
  })

  test('has a link to the Impressum', async ({ page }) => {
    await page.locator('footer').getByRole('link', { name: 'Impressum' }).click()
    await expect(page).toHaveURL('/impressum')
  })

  test('has a link to ArtStation', async ({ page }) => {
    const link = page.locator('footer').getByRole('link', { name: 'ArtStation' })
    await expect(link).toHaveAttribute('href', 'https://www.artstation.com/keshyx')
  })

  test('has a link to LinkedIn', async ({ page }) => {
    const link = page.locator('footer').getByRole('link', { name: 'LinkedIn' })
    await expect(link).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/magdalena-jirku-81bb16210/?original_referer=https%3A%2F%2Fmagdalena-jirku.at%2F',
    )
  })

  test('has a link to XING', async ({ page }) => {
    const link = page.locator('footer').getByRole('link', { name: 'Xing' })
    await expect(link).toHaveAttribute('href', 'https://www.xing.com/profile/Magdalena_Jirku')
  })

  test('has a link to the source', async ({ page }) => {
    const footer = page.locator('footer')
    const sourceLink = footer.getByRole('link', { name: 'Website by Jan Müller' })
    await expect(sourceLink).toBeVisible()
    await expect(sourceLink).toHaveAttribute('href', 'https://github.com/DerYeger/magdalena-jirku')
  })

  test('has a copyright notice', async ({ page }) => {
    const footer = page.locator('footer')
    await expect(footer).toContainText(`${new Date().getFullYear()} © Magdalena Jirku`)
  })
})
