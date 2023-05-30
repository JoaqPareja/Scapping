/// <reference types="cypress" />
import {gntHomePage, gntDeConstructCoffePage, gntStoreProducts} from '../../../../support/Pages/SuperMarkets'

describe('Get the page information',()=>{
    it('Get to the coffe page', ()=>{
        gntHomePage.visitHomepage();
        cy.url().should('eq', 'https://www.geant.com.uy/')
        gntHomePage.typeSearchInput('Cafe');  
        gntHomePage.clickSeeAllProducts();   
    })
    it('Store Coffee products', ()=>{
        gntDeConstructCoffePage.coffeePage();
        cy.url().should('include', 'cafe')
        gntStoreProducts.storeProducts( //get Products
            gntDeConstructCoffePage.elementsCoffePage.eachBox(), 'not.be.null', 'not.be.empty')
    })
    it('Unify Arrays', ()=>{
        gntStoreProducts.unifyArrays('not.be.null', 'not.be.empty') //Umify all Arrays
    })
    it('Push ProductArray', ()=>{
        gntStoreProducts.writefile(gntDeConstructCoffePage.gntRawJsonCoffee)  //Post JSON
    })

})