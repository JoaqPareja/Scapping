export default class Urls{
    urlsGeant={
      urlHomepage: () =>  cy.visit('https://www.geant.com.uy/'),
      coffepage:()=>cy.visit('https://www.geant.com.uy/busca?ft=cafe'),
    }
    visitHomepage(){
      this.urlsGeant.urlHomepage();
    }
    coffePage(){
      this.urlsGeant.coffepage();
    }
}
