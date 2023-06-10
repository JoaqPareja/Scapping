/// <reference types="cypress" />
import { gntAtunPageElements, gntStoreProducts} from "../../../../support/Pages/SuperMarkets"

describe('Get the page information',()=>{
    // it('Get to the Atun page', ()=>{
    //     gntGlobalElements.visitHomePage();
    //     cy.url().should('eq', 'https://www.geant.com.uy/')
    //     gntGlobalElements.typeSearchInput('Atun');  
    //     gntGlobalElements.clickSeeAllProducts();   
    // })
    it('Store Tuna products', ()=>{
        gntAtunPageElements.atunPage();
        cy.url().should('include', 'atun')
        gntStoreProducts.storeProducts( //get Products and await box
        gntAtunPageElements.gntElements.eachBox(),'Tuna')
    })
    it('Unify Arrays', ()=>{
        gntStoreProducts.unifyArrays('not.be.null', 'not.be.empty') //Umify all Arrays
    })
    it('Push ProductArray', ()=>{
        gntStoreProducts.writefile(gntAtunPageElements.gntRawJson)  //Post JSON
    })

})