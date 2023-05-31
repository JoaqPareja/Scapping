export default class DvtUrls{
    // elements={
    //   urlHomepage: () =>  cy.visit('https://www.devoto.com.uy/')
    // }
    visitHomepage(){
      cy.visit('https://www.devoto.com.uy/');
    }
    visistCoffePage(){
      cy.visit('https://www.devoto.com.uy/Cafe?_q=Cafe&sc=3')
    }
}
