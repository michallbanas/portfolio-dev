const { test, expect} = require ('@playwright/test');

test.describe.configure({ mode: 'parallel'})

test.beforeEach(async ({ page }) => { 
    await page.goto('');
  });

test.describe('h1', async () => {
  test('check if the h1 is correct', async ({ page }) => {
    expect(page.url()).toBe('http://localhost:3000/')
    const title = page.locator('h1');
    await expect(title).toBeVisible()
    await page.pause()
  });
})