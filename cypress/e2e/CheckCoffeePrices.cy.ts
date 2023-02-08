/// <reference types="cypress" />

import {homePageDevoto} from '../support/Pages/SuperMarkets'
let allCoffeesList;
// let arrayCoffeeList :[string] =[];
var arrayCoffeeList :Array<string> = [];

var cafeFound: string;

describe('Starting Web scrapping', () => {
  it('First', () => {
    homePageDevoto.visitHomepage();
    homePageDevoto.selectCity("Montevideo")
    homePageDevoto.clickConfirmSucursal();
    homePageDevoto.typeSearchInput('Cafe');
    homePageDevoto.elements.eachH3Cafe().each((response: { text: () => string; })=>{
      allCoffeesList = response.text();
       arrayCoffeeList.push(allCoffeesList);
 
    });
   
    cy.wrap(arrayCoffeeList).then(()=>{
       cy.contains('descafeinado').then((response:any)=>{
        cafeFound=response.text();

        Cypress.env("cafeFound", cafeFound)
       })
       
      })
     
      
    })
    it('Second', ()=>{
      var cafeNow =  Cypress.env('cafeFound')
      cy.log(cafeNow)
    })
 
})
