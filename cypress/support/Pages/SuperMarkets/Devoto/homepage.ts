import  Urls  from './urls';


export default  class HomePage extends Urls {
    constructor(){
        super();
    }
    elements={
        selectPopUP: ()=> cy.get('#selec-suc-popup'),
        confirmarSucursalbtn: ()=> cy.get('#btnConfirmaSucursal'),
        searchInput:()=> cy.get('#input-buscador'),
        eachH3Cafe:()=> cy.get('#MasterBuscador div.Product-head > h3 > a')
    }
    selectCity(city: string | number | (string | number)[]){
        this.elements.selectPopUP().select(city);
    }
    clickConfirmSucursal(){
        this.elements.confirmarSucursalbtn().click();
    }
    typeSearchInput($el: string){
        this.elements.searchInput().type($el)
    }
  
  }
