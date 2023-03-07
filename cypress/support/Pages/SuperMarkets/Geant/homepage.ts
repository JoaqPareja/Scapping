
import  Urls  from './urls';


export default  class HomePageGeant extends Urls {
    constructor(){
        super();
    }
    elements={
        // selectPopUP: ()=> cy.get('#selec-suc-popup'),
        // confirmarSucursalbtn: ()=> cy.get('#btnConfirmaSucursal'),
        searchInput:()=> cy.get('.styles__Input-sc-157ulfq-1 > input:nth-child(1)'),
        seeAllProducts: ()=> cy.get('.styles__ResultsContainer-sc-1skad6n-3 > .jss3'),
        eachH3Cafe:()=> cy.get('#MasterBuscador div.Product-head > h3 > a'),
        specificOfCoffeeSection:()=> cy.get('div.styles__ProductItem-tbq658-3:nth-child(1) > div:nth-child(3) > a:nth-child(3)'),
        listOfallCoffee:()=> cy.get( 'div.styles__ProductItem-tbq658-3 > div:nth-child(3) > a:nth-child(3) > h2:nth-child(2)'),
        priceOfCoffe:()=> cy.get('div:nth-child(3) > .styles__Container-tbq658-9 > .styles__Prices-tbq658-18 > .GwWDp')
    }
    // selectCity(city: string | number | (string | number)[]){
    //     this.elements.selectPopUP().select(city);
    // }
    // clickConfirmSucursal(){
    //     this.elements.confirmarSucursalbtn().click();
    // }
    clickSeeAllProducts(){
        this.elements.seeAllProducts().click();
    }
    typeSearchInput($el: string){
        this.elements.searchInput().type($el)
    }
  
  }