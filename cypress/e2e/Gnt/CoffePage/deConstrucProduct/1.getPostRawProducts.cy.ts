/// <reference types="cypress" />
import {gntHomePage, gntDeConstructCoffePage} from '../../../../support/Pages/SuperMarkets'

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
        gntDeConstructCoffePage.storeProducts(); //Get
        gntDeConstructCoffePage.writefile(); //Post
    })

})