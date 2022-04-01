// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = { 
    testDir: 'playwright',
    retries: 2,
    forbidOnly: !!process.env.CI,
    reporter: [ ['html', { open: 'always' }] ],
  use: {
    baseURL: 'http://localhost:3000/', 
    trace: 'retain-on-failure',
    screenshot: 'off',
    video: 'off'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'webkit-mobile',
      use: { ...devices['iPhone X'] },
    }
  ],
};

module.exports = config;