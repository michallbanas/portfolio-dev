import { defineConfig } from "cypress"

export default defineConfig({
  defaultCommandTimeout: 6000,
  experimentalFetchPolyfill: true,
  retries: 1,
  video: false,
  viewportHeight: 1050,
  viewportWidth: 1680,
  projectId: 'otico9',
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
})


