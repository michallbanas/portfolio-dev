const { test, expect} = require ('@playwright/test');

test.describe.configure({ mode: 'parallel'})

test.beforeEach(async ({ page }) => { 
    await page.goto('');
  });

test.describe('headings', async () => {
  test('find h1 and check if it is visible and it has correct title', async ({ page }) => {
    expect(page.url()).toBe('http://localhost:3000/')
    const title = page.locator('h1');
    await expect(title).toBeVisible()
    await expect(title).toContainText('michal banaš')
    await expect(title).toHaveAttribute('data-cy', 'title')
    await page.pause()
  });

  test('find first h2 and check if it has correct title', async ({ page }) => {
    const heading = page.locator('[data-cy="heading"]')
    await expect(heading).toBeVisible()
    await expect(heading).toHaveText('QA Engineer')
    await page.pause()
  })
})