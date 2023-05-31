/// <reference types="cypress" />
import {gntWinePageElements,gntReConstructWinePage} from '../../../../support/Pages/SuperMarkets'

describe('Re convert products Check normal and santander prices',()=>{
    beforeEach('Get products',()=>{
        gntReConstructWinePage.readfile('not.be.empty', 'not.be.empty',  'not.be.empty', 'not.be.empty') 
    })
    it('reCreateProduct',()=>{ 
            cy.reCreateProduct(gntReConstructWinePage.productBrand, gntReConstructWinePage.elements, 
                gntReConstructWinePage.titleProduct, gntReConstructWinePage.priceProduct, gntReConstructWinePage.arrayCoffeeListArray)
            cy.wrap(gntReConstructWinePage.arrayCoffeeListArray).should('not.be.empty')
        })
        it('convert array of normal prices and santander prices',()=>{
            gntReConstructWinePage.createArrNormalAndSantanderPrices();
           
        })
        it('Check Marca',()=>{
                     cy.wrap(gntReConstructWinePage.arrayOfPrecios).each((txt:any)=>{   
                    //This is purely to check if property exist using a conditional (ternary) operator
                    txt&&txt.Marca?(
                            cy.log('Marca property'),
                            cy.wrap(txt.Marca).should('not.be.empty'),
                            cy.wrap(txt.Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
                    ):(                           
                        cy.log('properties do not exist')
                    );             
                })
    })
    it('Desription',()=>{
        cy.wrap(gntReConstructWinePage.arrayOfPrecios).each((txt:any)=>{   
            cy.log('Desription property')
            cy.wrap(txt.Descripcion).should('not.be.empty')                   
        })
    })
    it('Home property should not exist',()=>{
        cy.wrap(gntReConstructWinePage.arrayOfPrecios).each((txt:any)=>{   
            cy.log('Property of home which should no longer exist')
            expect(txt.home).to.be.undefined
        })
    })
    it('Check normal Price',()=>{
        cy.wrap(gntReConstructWinePage.arrayOfPrecios).each((txt:any)=>{   
            cy.log('Property of NormalPrice')
            cy.wrap(txt.NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
        })
    })
    it('Check Santander Price',()=>{
        cy.wrap(gntReConstructWinePage.arrayOfPrecios).each((txt:any)=>{
            if(txt.SantanderPrice){
                cy.log('Property of SantanderPrice')
                cy.wrap(txt.SantanderPrice).should('not.be.empty'),
                cy.wrap(txt.SantanderPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz') 
            }   
        })
    })
    it('push into new Json',()=>{
        // cy.wrap(reConstructCoffePage.productBrand).pause();
        gntReConstructWinePage.pushJson(gntWinePageElements.gntNewJson, gntReConstructWinePage.arrayOfPrecios);
    })
    it('Read json', ()=>{
        gntReConstructWinePage.readJson(gntWinePageElements.gntNewJson, 'not.be.empty')
    })
 
})
