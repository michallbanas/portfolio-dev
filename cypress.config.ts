import { defineConfig } from 'cypress'

export default defineConfig({
  defaultCommandTimeout: 6000,
  experimentalFetchPolyfill: true,
  video: false,
  viewportHeight: 1050,
  viewportWidth: 1680,
  projectId: 'otico9',
  e2e: {
    baseUrl: 'http://localhost:3000',
    experimentalWebKitSupport: true,
    supportFile: 'cypress/support/index.ts',
  },
})
