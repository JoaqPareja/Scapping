/// <reference types="cypress" />
import {gntGlobalElements, gntDeConstructCoffePage, gntStoreProducts} from '../../../../support/Pages/SuperMarkets'

describe('Get the page information',()=>{
    it('Get to the coffe page', ()=>{
        gntGlobalElements.visitHomePage();
        cy.url().should('eq', 'https://www.geant.com.uy/')
        gntGlobalElements.typeSearchInput('Cafe');  
        gntGlobalElements.clickSeeAllProducts();   
    })
    it('Store Coffee products', ()=>{
        gntGlobalElements.coffeePage();
        cy.url().should('include', 'cafe')
        gntStoreProducts.storeProducts( //get Products
            gntDeConstructCoffePage.gntElements.eachBox(), 'not.be.null', 'not.be.empty')
    })
    it('Unify Arrays', ()=>{
        gntStoreProducts.unifyArrays('not.be.null', 'not.be.empty') //Umify all Arrays
    })
    it('Push ProductArray', ()=>{
        gntStoreProducts.writefile(gntDeConstructCoffePage.gntRawJsonCoffee)  //Post JSON
    })

})