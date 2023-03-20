// import {datatest} from '../WebScrapping/cypress/fixtures/datatest.json'

module.exports = {
  
  e2e: {
    // experimentalMemoryManagement: true,
    viewportWidth: 1980,
    viewportHeight: 1050,
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
    env:{
      "jsonfile": "../fixtures/datatest.json" 
    }
    
  },
};
