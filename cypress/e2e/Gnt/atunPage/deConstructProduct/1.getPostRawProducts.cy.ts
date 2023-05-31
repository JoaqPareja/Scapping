/// <reference types="cypress" />
import { gntDeConstructAtunPage, gntStoreProducts} from '../../../../support/Pages/SuperMarkets'

describe('Get the page information',()=>{
    // it('Get to the Atun page', ()=>{
    //     gntGlobalElements.visitHomePage();
    //     cy.url().should('eq', 'https://www.geant.com.uy/')
    //     gntGlobalElements.typeSearchInput('Atun');  
    //     gntGlobalElements.clickSeeAllProducts();   
    // })
    it('Store Atun products', ()=>{
        gntDeConstructAtunPage.atunPage();
        cy.url().should('include', 'atun')
        gntStoreProducts.storeProducts( //get Products
        gntDeConstructAtunPage.gntElements.eachBox(), 'not.be.null', 'not.be.empty')
    })
    it('Unify Arrays', ()=>{
        gntStoreProducts.unifyArrays('not.be.null', 'not.be.empty') //Umify all Arrays
    })
    it('Push ProductArray', ()=>{
        gntStoreProducts.writefile(gntDeConstructAtunPage.gntRawJson)  //Post JSON
    })

})