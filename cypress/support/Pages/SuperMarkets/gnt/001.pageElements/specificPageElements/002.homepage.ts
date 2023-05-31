import GntGlobalElements from "../globalElements/004.gntGlobalElements"
export default class GntHomePage extends GntGlobalElements {
    elementsHomePGnt={
        searchInput:()=> cy.get('.styles__Input-sc-157ulfq-1 > input:nth-child(1)'),
        seeAllProducts: ()=> cy.get('.styles__SeeAllResults-sc-1skad6n-11'),
    }
    typeSearchInput($el: string){
        this.elementsHomePGnt.searchInput().type($el)
    }
    clickSeeAllProducts(){
        this.elementsHomePGnt.seeAllProducts().click();
    }
    }
    