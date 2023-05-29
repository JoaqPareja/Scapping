export default class GntUrls{
    urlsGeant={
      urlHomepage: () =>  cy.visit('https://www.geant.com.uy/'),
      coffepage:()=>cy.visit('https://www.geant.com.uy/busca?ft=cafe'),
    }
    visitHomepage(){
      this.urlsGeant.urlHomepage();
    }
    coffeePage(){
      this.urlsGeant.coffepage();
    }
}
