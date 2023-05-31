/// <reference types="cypress" />
import { gntDeConstructWinePage, gntStoreProducts} from '../../../../support/Pages/SuperMarkets'

describe('Get the page information',()=>{
    // it('Get to the Wine page', ()=>{
    //     gntGlobalElements.visitHomePage();
    //     cy.url().should('eq', 'https://www.geant.com.uy/')
    //     gntGlobalElements.typeSearchInput('vino');  
    //     gntGlobalElements.clickSeeAllProducts();   
    // })
    it('Store Wine products', ()=>{
        gntDeConstructWinePage.winePage();
        cy.url().should('include', 'vino')
        gntStoreProducts.storeProducts( //get Products
            gntDeConstructWinePage.gntElements.eachBox(), 'not.be.null', 'not.be.empty')
    })
    it('Unify Arrays', ()=>{
        gntStoreProducts.unifyArrays('not.be.null', 'not.be.empty') //Umify all Arrays
    })
    it('Push ProductArray', ()=>{
        gntStoreProducts.writefile(gntDeConstructWinePage.gntRawJson)  //Post JSON
    })

})