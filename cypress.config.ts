import { defineConfig } from "cypress"

export default defineConfig({
  defaultCommandTimeout: 6000,
  experimentalFetchPolyfill: true,
  retries: { runMode: 2, openMode: 1 },
  screenshotOnRunFailure: false,
  video: false,
  viewportHeight: 1050,
  viewportWidth: 1680,
  watchForFileChanges: false,
  e2e: {
    baseUrl: "http://localhost:3100",
    experimentalWebKitSupport: true,
    supportFile: "cypress/support/index.ts",
  },
})
