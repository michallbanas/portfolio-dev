import { test, expect } from '@playwright/test'

test('social icon anchors should be visible and have attributes href, targer and rel', async ({
  page,
}) => {
  await page.goto('/')
  const socialIconsAnchors = page.locator('[data-cy="social-icons"]')
  const allSocialAnchors = await socialIconsAnchors.count()

  for (let anchor = 0; anchor < allSocialAnchors; anchor++) {
    expect(await socialIconsAnchors.nth(anchor).isVisible()).toBe(true)
    expect(await socialIconsAnchors.nth(anchor).getAttribute('rel')).toBe('noopener noreferrer')
    expect(await socialIconsAnchors.nth(anchor).getAttribute('target')).toBe('_blank')
  }

  const hrefs = await socialIconsAnchors.evaluateAll(anchors =>
    anchors.map(a => a.attributes['href'].value),
  )
  expect(hrefs).toEqual([
    'https://twitter.com/michall_banas',
    'https://github.com/michallbanas',
    'https://codepen.io/michallbanas',
    'https://linkedin.com/in/michall-banas',
  ])

  const bmcAnchor = page.locator('[data-cy="bmc"]')
  expect(await bmcAnchor).toBeVisible()
  expect(await bmcAnchor.textContent()).toContain('Buy me a coffee')
  expect(await bmcAnchor.getAttribute('target')).toBe('_blank')
})
