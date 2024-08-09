import { defineConfig } from "cypress"

export default defineConfig({
  defaultCommandTimeout: 6000,
  retries: { runMode: 2, openMode: 1 },
  video: false,
  viewportHeight: 1050,
  viewportWidth: 1680,
  e2e: {
    baseUrl: "http://localhost:3100",
    supportFile: "cypress/support/index.ts",
  },
})
