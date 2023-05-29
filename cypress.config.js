// import {datatest} from '../WebScrapping/cypress/fixtures/datatest.json'

module.exports = {
  defaultCommandTimeout: 30000,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  e2e: {
    supportFile: 'cypress/support/e2e.ts',
    // experimentalMemoryManagement: true,
    viewportWidth: 1980,
    viewportHeight: 1050,
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
   
  },
};
