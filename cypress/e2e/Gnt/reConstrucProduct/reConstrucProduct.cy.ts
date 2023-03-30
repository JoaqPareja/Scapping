/// <reference types="cypress" />
import {reConstructCoffePage} from '../../../support/Pages/SuperMarkets'

describe('Re convert products',()=>{
    beforeEach('Bring products',()=>{
        reConstructCoffePage.readfile('not.be.empty', 'not.be.empty',  'not.be.empty', 'not.be.empty') 
    })
    it('Convert array',()=>{ 
            cy.reCreateProduct(reConstructCoffePage.productBrand, reConstructCoffePage.elements, reConstructCoffePage.titleProduct, 
                                reConstructCoffePage.priceProduct, reConstructCoffePage.arrayCoffeeListArray)
            cy.wrap(reConstructCoffePage.arrayCoffeeListArray).should('not.be.empty')
        })
        it('convert array of normal prices and santander prices',()=>{
            reConstructCoffePage.createArrNormalAndSantanderPrices();
        })
        it('Check normal and santander prices',()=>{
            cy.wrap(reConstructCoffePage.arrayOfPrecios).each((txt:any)=>{
                cy.wrap(txt).should('not.be.empty');
                cy.wrap(txt.Marca).should('not.be.empty');
                cy.wrap(txt.Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
                cy.wrap(txt.Descripcion).should('not.be.empty');
                cy.wrap(txt.NormalPrice).should('not.be.empty');
                cy.wrap(txt.NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
                cy.wrap(txt.SantanderPrice).should('not.be.empty');
                cy.wrap(txt.SantanderPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
            })
        })
        it('Get the USD prices', ()=>{
            reConstructCoffePage.createUSDPrices();
        })
        it('Check USD prices',()=>{
            cy.wrap(reConstructCoffePage.arrayOfUSDPrecios).each((txt:any)=>{
                cy.wrap(txt).should('not.be.empty');
                cy.wrap(txt.Marca).should('not.be.empty');
                cy.wrap(txt.Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
                cy.wrap(txt.Descripcion).should('not.be.empty');
                cy.wrap(txt.NormalPrice).should('not.be.empty');
                cy.wrap(txt.NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
                cy.wrap(txt.SantanderPrice).should('not.be.empty');
                cy.wrap(txt.SantanderPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
            })

        })
        it('get the only normal prices',()=>{
            reConstructCoffePage.createNormalPrices();
            cy.wrap(reConstructCoffePage.normalArr).each((txt:any)=>{
                cy.wrap(txt).should('not.be.empty');
                cy.wrap(txt.Marca).should('not.be.empty');
                cy.wrap(txt.Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
                cy.wrap(txt.Descripcion).should('not.be.empty');
                cy.wrap(txt.NormalPrice).should('not.be.empty');
                cy.wrap(txt.NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
            })
        })
        it('Concat both arrays and check them', ()=>{
            reConstructCoffePage.unifyArrays()
            cy.wrap(reConstructCoffePage.newArrayCoffeeListArray).each((txt:any)=>{
                cy.wrap(txt).should('not.be.empty');
                cy.wrap(txt.Marca).should('not.be.empty');
                cy.wrap(txt.Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
                cy.wrap(txt.Descripcion).should('not.be.empty');
                cy.wrap(txt.NormalPrice).should('not.be.empty');
                cy.wrap(txt.NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
                if(txt.SantanderPrice){
                    cy.log('santander price exist')
                    cy.wrap(txt.SantanderPrice).should('not.be.empty');
                    cy.wrap(txt.SantanderPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
                }
            })
        })
    it('push into new Json',()=>{
        reConstructCoffePage.pushJson('not.be.empty')
    })
})
