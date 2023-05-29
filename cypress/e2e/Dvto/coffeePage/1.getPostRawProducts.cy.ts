/// <reference types="cypress" />

import {dvtHomePage, dvtDeConstructCoffePage} from '../../../support/Pages/SuperMarkets'

describe('Starting Web scrapping', () => {
 beforeEach(()=>{
    dvtHomePage.visistCoffePage();
    dvtHomePage.selectCity("Montevideo")
    dvtHomePage.clickConfirmSucursal();
    cy.url().should('include', '/Cafe')
 }) 
  it('Get Product brand', ()=>{
    dvtDeConstructCoffePage.getProductBrand();
  })
  it('Get Title Products', () => {
    dvtDeConstructCoffePage.getTitleProducts();
  })
 it('Get prices', ()=>{
  dvtDeConstructCoffePage.getPriceProducts();
 })

})
context('Push Arrays', ()=>{
  it('StoreAllProducts', ()=>{
    dvtDeConstructCoffePage.concatProducts();
    cy.wrap(dvtDeConstructCoffePage.arrayCoffeeListArray)
    dvtDeConstructCoffePage.writefile()
   })
})
