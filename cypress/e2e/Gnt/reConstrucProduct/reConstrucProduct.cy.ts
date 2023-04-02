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
                try {
                    cy.wrap(txt).should('not.be.empty');
                    cy.wrap(txt.Marca).should('not.be.empty');
                    cy.wrap(txt.Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
                    cy.wrap(txt.Descripcion).should('not.be.empty');
                    cy.wrap(txt.NormalPrice).should('not.be.empty');
                    cy.wrap(txt.NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
                    cy.wrap(txt.SantanderPrice).should('not.be.empty');
                    cy.wrap(txt.SantanderPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
                } catch (error) {
                    cy.log(error)
                }
            })
        })
        it('Get the USD prices', ()=>{
            reConstructCoffePage.createUSDPrices();
        })
        it('Check USD prices',()=>{
            cy.wrap(reConstructCoffePage.arrayOfUSDPrecios).each((txt:any)=>{
                try {
                    cy.wrap(txt).should('not.be.empty');
                    cy.wrap(txt.Marca).should('not.be.empty');
                    cy.wrap(txt.Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
                    cy.wrap(txt.Descripcion).should('not.be.empty');
                    cy.wrap(txt.NormalPrice).should('not.be.empty');
                    cy.wrap(txt.NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
                    cy.wrap(txt.SantanderPrice).should('not.be.empty');
                    cy.wrap(txt.SantanderPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
                } catch (error) {
                    cy.log(error)
                }
            })

        })
        it('get the only normal prices',()=>{
            reConstructCoffePage.createNormalPrices();
            cy.wrap(reConstructCoffePage.normalArr).each((txt:any)=>{
                try {
                    cy.wrap(txt).should('not.be.empty');
                    cy.wrap(txt.Marca).should('not.be.empty');
                    cy.wrap(txt.Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
                    cy.wrap(txt.Descripcion).should('not.be.empty');
                    cy.wrap(txt.NormalPrice).should('not.be.empty');
                    cy.wrap(txt.NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
                } catch (error) {
                    cy.log(error)
                }
            })
        })
        
        it('Concat both arrays and check them', ()=>{       
            reConstructCoffePage.unifyArrays()
            cy.wrap(reConstructCoffePage.newArrayCoffeeListArray).each((txt:any)=>{    
                try {
                    cy.wrap(txt).should('not.to.be.null');
                    cy.wrap(txt.Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
                    cy.wrap(txt.Descripcion).should('not.to.be.null');
                    expect(txt).to.not.be.null;
                    expect(txt.Marca).to.not.be.null;
                    expect(txt.Descripcion).to.not.be.null;
                    expect(txt.NormalPrice).to.not.be.null;
                    expect(txt.NormalPrice).to.not.contain.value('abcdefghijklmnñopqrstuvwxyz')
                    if(txt.SantanderPrice){
                        cy.log('santander price exist')
                        console.log('santander price exist');
                        console.log(txt.SantanderPrice);                      
                        expect(txt.SantanderPrice).to.not.be.null;
                        expect(txt.NormalPrice).to.not.contain.value('abcdefghijklmnñopqrstuvwxyz')                    
                    }
                } catch (error) {
                    cy.log('The error is coming from' + error);
                    console.log(error)
                }
                
            })
        })
    it('push into new Json',()=>{
        reConstructCoffePage.pushJson('not.to.be.null')
    })
})
