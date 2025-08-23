import { expect, test } from '@playwright/test'

test.describe('Home', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('has an avatar', async ({ page }) => {
    const avatar = page.getByTestId('avatar')
    await avatar.scrollIntoViewIfNeeded()
    await expect(avatar).toBeVisible()
  })

  test('shows about me section', async ({ page }) => {
    const aboutMe = page.getByTestId('about-me')
    await aboutMe.scrollIntoViewIfNeeded()
    await expect(aboutMe).toBeVisible()
  })

  test('shows showreel', async ({ page }) => {
    const showreel = page.locator('video')
    await expect(showreel).toBeVisible()
  })
})
