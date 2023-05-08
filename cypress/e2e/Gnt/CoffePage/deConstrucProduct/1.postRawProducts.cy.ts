/// <reference types="cypress" />
import {homePageGeant, deConstructCoffePage} from '../../../../support/Pages/SuperMarkets'

describe('Get the page information',()=>{
    it('Get to the coffe page', ()=>{
        homePageGeant.visitHomepage();
        cy.url().should('eq', 'https://www.geant.com.uy/')
        homePageGeant.typeSearchInput('Cafe');  
        homePageGeant.clickSeeAllProducts();   
    })
    it('Store Coffee products', ()=>{
        deConstructCoffePage.coffePage();
        cy.url().should('include', 'cafe')
        deConstructCoffePage.storeProducts();
        deConstructCoffePage.writefile(); 
    })

})