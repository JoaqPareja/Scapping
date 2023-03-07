/// <reference types="cypress" />

import {homePageGeant} from '../../support/Pages/SuperMarkets'

var productName:string;
var productNames: Array<unknown > = [];
var normalPrice:string;
var normalPrices: Array<string> = [];
var productStore: Array<unknown > = [];
let productsNameStore: unknown;
let normalPricesStore:unknown;
let santanderPrice:string;
let santanderPrices:Array<string> = [];
let santanderPricesStore:unknown;

describe('Starting Web scrapping', () => {
  it('First', () => {
    homePageGeant.visitHomepage();
    homePageGeant.typeSearchInput('Cafe');
    homePageGeant.clickSeeAllProducts();
      cy.get('.styles__Title-tbq658-14').each((response: { text: () => string; }, index, $el)=>{
        cy.wrap(response.text())
        productName = response.text()[index];

       cy.wrap(productName).pause();
       cy.wrap($el).pause()
        productNames.push(productName);
      })
      productsNameStore = {productNames}
      productStore.push(productsNameStore);
    })
   it('Get the normal prices',()=>{
    cy.visit('https://www.geant.com.uy/busca?ft=cafe')
    cy.get('div.styles__ProductItem-tbq658-3 > div:nth-child(3) > div:nth-child(4) > p:nth-child(1)').each((response: { text: () => string; })=>{  
      normalPrice = response.text() 
      normalPrices.push(normalPrice)
    })
    normalPricesStore = {"normalPrices":normalPrices}
    productStore.push(normalPricesStore)

   })
   it('Get the price with Santander',()=>{
    cy.visit('https://www.geant.com.uy/busca?ft=cafe')
      cy.get('.styles__Container-tbq658-9 > .styles__Prices-tbq658-18 > .styles__PriceWithFlag-tbq658-5').each((response: { text: () => string; })=>{
        santanderPrice = response.text()        
        santanderPrices.push(santanderPrice)
      })
      santanderPricesStore = {"santanderPrices":santanderPrices}
      productStore.push(santanderPricesStore)
      cy.wrap(productStore)
      cy.log('Check specific position for names')
      cy.wrap(productStore[0]);
      cy.log('Check specific position for prices')

    cy.wrap(productStore[1])
    cy.log('Check specific position for prices with Santander')
    cy.wrap(productStore[2])
   })
   it('Convert the array into a json file and check specific positions',()=>{
    cy.writeFile('../fixtures/datatest2.json', productStore)
    cy.readFile('../fixtures/datatest2.json').then((str)=>{
      cy.wrap(str).pause();
   
      cy.log(' 0 ')
      cy.wrap(str[0]).pause();
      cy.log(' [0].productNames ')
      cy.wrap(str[0].productNames).pause();
      cy.log(' [0].productNames 1')
    })
   })
  
})