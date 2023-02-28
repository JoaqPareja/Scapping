/// <reference types="cypress" />

import {homePageDevoto} from '../../support/Pages/SuperMarkets'
let allCoffeesList: string;
var arrayCoffeeList :Array<string> = [];

var coffeeFoundOnDevoto: string;

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
    cy.checkWord(arrayCoffeeList, 'molido', 'cafeFoundOnDevoto');
    })
    it('Second', ()=>{
      coffeeFoundOnDevoto =  Cypress.env('cafeFoundOnDevoto')
        cy.log(coffeeFoundOnDevoto)
    })
 
})
