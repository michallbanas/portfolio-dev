const { defineConfig } = require("cypress")

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  experimentalFetchPolyfill: true,
  retries: 1,
  video: false,
  viewportHeight: 1050,
  viewportWidth: 1680,
  projectId: 'otico9',
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000',
  },
})


