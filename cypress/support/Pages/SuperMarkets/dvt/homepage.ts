import  DvtUrls  from './urls';

export default  class DvtHomePage extends DvtUrls {
    constructor(){
        super();
    }
    elements={
        selectPopUP: ()=> cy.get('#selec-suc-popup'),
        confirmarSucursalbtn: ()=> cy.get('#btnConfirmaSucursal'),
        searchInput:()=> cy.get('#input-buscador'),
        eachH3Cafe:()=> cy.get('#MasterBuscador div.Product-head > h3 > a'),
        searButton:()=>cy.get('#MasterBuscador > svg'),
    }
    selectCity(city: string | number){
        this.elements.selectPopUP().select(city);
    }
    clickConfirmSucursal(){
        this.elements.confirmarSucursalbtn().click();
    }
    typeSearchInput($el: string){
        this.elements.searchInput().type($el)
    }
    clickSearButton(){
        this.elements.searButton().invoke('show').click({force:true})
    }
  
  }