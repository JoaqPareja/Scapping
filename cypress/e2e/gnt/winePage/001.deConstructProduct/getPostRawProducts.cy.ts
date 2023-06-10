/// <reference types="cypress" />
import { gntWinePageElements, gntStoreProducts} from '../../../../support/Pages/SuperMarkets'

describe('Get the page information',()=>{
    // it('Get to the Wine page', ()=>{
    //     gntGlobalElements.visitHomePage();
    //     cy.url().should('eq', 'https://www.geant.com.uy/')
    //     gntGlobalElements.typeSearchInput('vino');  
    //     gntGlobalElements.clickSeeAllProducts();   
    // })
    it('Store Wine products', ()=>{
        gntWinePageElements.winePage();
        cy.url().should('include', 'vino')
        gntStoreProducts.storeProducts( //get Products
        gntWinePageElements.gntElements.eachBox(),'Wine')
    })
    it('Unify Arrays', ()=>{
        gntStoreProducts.unifyArrays('not.be.null', 'not.be.empty') //Umify all Arrays
    })
    it('Push ProductArray', ()=>{
        gntStoreProducts.writefile(gntWinePageElements.gntRawJson)  //Post JSON
    })

})