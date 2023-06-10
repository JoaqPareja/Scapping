// import {datatest} from '../WebScrapping/cypress/fixtures/datatest.json'
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

module.exports = {
  defaultCommandTimeout: 30000,
  videoUploadOnPasses: false,
 
  retries: {
    runMode: 2,
    openMode: 1,
  },
  e2e: {
  specPattern: [
    // "cypress/e2e/001.SignUp/",
    "cypress/e2e/dvt/coffeePage/001.deConstructProduct/**.cy.ts",
    "cypress/e2e/dvt/coffeePage/002.reConstructProduct/**.cy.ts",
    "cypress/e2e/gnt/atunPage/001.deConstructProduct/**.cy.ts",
    "cypress/e2e/gnt/atunPage/002.reConstructProduct/**.cy.ts",
    "cypress/e2e/gnt/coffeePage/001.deConstructProduct/**.cy.ts",
    "cypress/e2e/gnt/coffeePage/002.reConstructProduct/**.cy.ts",
    "cypress/e2e/gnt/winePage/**/**/**.cy.ts",
    "cypress/e2e/gnt/winePage/002.reConstructProduct/**.cy.ts",
  ],
  supportFile: 'cypress/support/e2e.ts',
  // experimentalMemoryManagement: true,
  viewportWidth: 1980,
  viewportHeight: 1050,
  setupNodeEvents(on, config) {
    on('task', {
      downloadFile });
    
    // implement node event listeners here
  },
}
}
