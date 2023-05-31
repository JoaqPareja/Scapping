export default class GntUrls{
    urlsGeant={
      urlHomePage: () =>  cy.visit('https://www.geant.com.uy/'),
      coffePage:()=>cy.visit('https://www.geant.com.uy/busca?ft=cafe'),
      atunPage:()=>cy.visit('https://www.geant.com.uy/busca?ft=atun'),
      winePage:()=>cy.visit('https://www.geant.com.uy/busca?ft=vino'),

    }
    visitHomePage(){
      this.urlsGeant.urlHomePage();
    }
    coffeePage(){
      this.urlsGeant.coffePage();
    }
    atunPage(){
      this.urlsGeant.atunPage();
    }
    winePage(){
      this.urlsGeant.winePage();
    }
}
