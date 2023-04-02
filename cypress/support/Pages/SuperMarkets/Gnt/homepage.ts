import  Urls  from './urls';
export default class HomePageGeant extends Urls {
    constructor(){
        super();  
    }
    elementsHPGnt={
        searchInput:()=> cy.get('.styles__Input-sc-157ulfq-1 > input:nth-child(1)'),
        seeAllProducts: ()=> cy.get('.styles__SeeAllResults-sc-1skad6n-11'),
    }
    clickSeeAllProducts(){
        this.elementsHPGnt.seeAllProducts().click();
    }
    typeSearchInput($el: string){
        this.elementsHPGnt.searchInput().type($el)
    }

    }
    