/// <reference types="cypress" />
import {gntReConstructCoffeProducts} from '../../../../support/Pages/SuperMarkets'

describe('Re convert products Check normal and santander prices',()=>{
    let gntNewJsonCoffee:string ="cypress/fixtures/gntReConAtunProduct.json"

    beforeEach('Get products',()=>{
        gntReConstructCoffeProducts.readfile('not.be.empty', 'not.be.empty',  'not.be.empty', 'not.be.empty') 
    })
    it('reCreateProduct',()=>{ 
            cy.reCreateProduct(gntReConstructCoffeProducts.productBrand, gntReConstructCoffeProducts.elements, 
                gntReConstructCoffeProducts.titleProduct, gntReConstructCoffeProducts.priceProduct, gntReConstructCoffeProducts.arrayCoffeeListArray)
            cy.wrap(gntReConstructCoffeProducts.arrayCoffeeListArray).should('not.be.empty')
        })
        it('convert array of normal prices and santander prices',()=>{
            gntReConstructCoffeProducts.createArrNormalAndSantanderPrices();
           
        })
        it('Check Marca',()=>{
                     cy.wrap(gntReConstructCoffeProducts.arrayOfPrecios).each((txt:any)=>{   
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
        cy.wrap(gntReConstructCoffeProducts.arrayOfPrecios).each((txt:any)=>{   
            cy.log('Desription property')
            cy.wrap(txt.Descripcion).should('not.be.empty')                   
        })
    })
    it('Home property should not exist',()=>{
        cy.wrap(gntReConstructCoffeProducts.arrayOfPrecios).each((txt:any)=>{   
            cy.log('Property of home which should no longer exist')
            expect(txt.home).to.be.undefined
        })
    })
    it('Check normal Price',()=>{
        cy.wrap(gntReConstructCoffeProducts.arrayOfPrecios).each((txt:any)=>{   
            cy.log('Property of NormalPrice')
            cy.wrap(txt.NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
        })
    })
    it('Check Santander Price',()=>{
        cy.wrap(gntReConstructCoffeProducts.arrayOfPrecios).each((txt:any)=>{
            if(txt.SantanderPrice){
                cy.log('Property of SantanderPrice')
                cy.wrap(txt.SantanderPrice).should('not.be.empty'),
                cy.wrap(txt.SantanderPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz') 
            }   
        })
    })
    it('push into new Json',()=>{
        // cy.wrap(reConstructCoffePage.productBrand).pause();
        gntReConstructCoffeProducts.pushJson(gntNewJsonCoffee, gntReConstructCoffeProducts.arrayOfPrecios);
        gntReConstructCoffeProducts.readJson(gntNewJsonCoffee, 'not.be.empty')
    })
 
})
