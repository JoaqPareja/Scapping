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
            // console.log(reConstructCoffePage.arrayOfPrecios)
            cy.wrap(reConstructCoffePage.arrayOfPrecios).each((txt:any)=>{
                // cy.wrap(txt[0]).pause();
                // cy.wrap(txt).pause()
                //  cy.wrap(txt.Marca).pause()
                //  cy.wrap(txt.Descripcion).pause()
                //  cy.wrap(txt.NormalPrice).pause()
                //  cy.wrap(txt.SantanderPrice).pause()
                cy.wrap(txt).should('not.be.empty');
                cy.wrap(txt[0].Marca).should('not.be.empty');
                cy.wrap(txt[0].Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
                cy.wrap(txt[0].Descripcion).should('not.be.empty');
                cy.wrap(txt[0].NormalPrice).should('not.be.empty');
                cy.wrap(txt[0].NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
                cy.wrap(txt[0].SantanderPrice).should('not.be.empty');
                cy.wrap(txt[0].SantanderPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
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
            cy.wrap(reConstructCoffePage.newArrayCoffeeListArray).each((txt:any, index )=>{
                cy.wrap(txt).should('not.to.be.null');
                // console.log(txt, 'txt')
            
                // cy.wrap(txt).pause();
                // cy.wrap(txt[0]).pause();
                // cy.wrap(txt[0].Marca).should('not.to.be.null');
                cy.wrap(txt.Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
                cy.wrap(txt.Descripcion).should('not.to.be.null');
                // console.log(txt.NormalPrice)
                // cy.log(txt.NormalPrice).pause()
                try {
                    expect(txt.NormalPrice).to.not.be.null;
                    // expect(txt.NormalPrice).to.not.contain.value('abcdefghijklmnñopqrstuvwxyz')
                } catch (error) {
                    cy.log(error).pause();
                    console.log(error)
                }
              
                
                // cy.wrap(txt.NormalPrice).should('not.be', undefined);
                // cy.wrap(txt.NormalPrice).should('not.contain.value', 'abcdefghijklmnñopqrstuvwxyz')
                try{
                    if(txt.SantanderPrice){
                        cy.log('santander price exist')
                        cy.wrap(txt.SantanderPrice).should('not.to.be.null');
                        cy.wrap(txt.SantanderPrice).should('not.contain.value', 'abcdefghijklmnñopqrstuvwxyz')
                    }
                }
                catch(err){
                    cy.log(err);
                }
                
            })
        })
    it('push into new Json',()=>{
        reConstructCoffePage.pushJson('not.to.be.null')
    })
})
