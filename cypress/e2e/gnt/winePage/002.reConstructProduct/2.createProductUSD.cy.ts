/// <reference types="cypress" />
import {gntWinePageElements,gntReConstructWinePage} from '../../../../support/Pages/SuperMarkets'

describe('Construct USD Prices',()=>{
    let arrayTepm:any;
    beforeEach('Get products',()=>{
        gntReConstructWinePage.readfile('not.be.empty', 'not.be.empty',  'not.be.empty', 'not.be.empty') 
        cy.readFile(gntWinePageElements.gntNewJson).then((data:any)=>{
            arrayTepm= data
        })  
    })
    it('reCreateProduct',()=>{ 
        cy.reCreateProduct(gntReConstructWinePage.productBrand, gntReConstructWinePage.elements, gntReConstructWinePage.titleProduct, 
            gntReConstructWinePage.priceProduct, gntReConstructWinePage.arrayCoffeeListArray)
                            cy.wrap(gntReConstructWinePage.arrayCoffeeListArray).should('not.be.empty')
                        })
    it('Get the USD prices', ()=>{
        gntReConstructWinePage.createUSDPrices();
    })
    it('Check Marca',()=>{   
            cy.wrap(gntReConstructWinePage.arrayOfUSDPrecios).each((txt:any)=>{   
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
    it('Check Description',()=>{
        cy.wrap(gntReConstructWinePage.arrayOfUSDPrecios).each((txt:any)=>{  
            cy.log('Desription property')
            cy.wrap(txt.Descripcion).should('not.be.empty')                   
        })
    })
    it('Check  Normal Price', ()=>{
        cy.wrap(gntReConstructWinePage.arrayOfUSDPrecios).each((txt:any)=>{   
            cy.log('Property of NormalPrice')
            cy.wrap(txt.NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
        })
    })
    it('Check SantanderPrice', ()=>{
        cy.wrap(gntReConstructWinePage.arrayOfUSDPrecios).each((txt:any)=>{   
        if(txt.SantanderPrice){
            cy.log('Property of SantanderPrice')
            cy.wrap(txt.SantanderPrice).should('not.be.empty'),
            cy.wrap(txt.SantanderPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz') 
        }
    })
    })
    it('Unify arrays',()=>{
        gntReConstructWinePage.unifyArrays(arrayTepm, gntReConstructWinePage.arrayOfUSDPrecios, )
    })
    it('Push Arrs',()=>{
        gntReConstructWinePage.pushJson(gntWinePageElements.gntNewJson, gntReConstructWinePage.newArrayCoffeeListArray);
    })
    it('Read json', ()=>{
        gntReConstructWinePage.readJson(gntWinePageElements.gntNewJson, 'not.be.empty')
    })
})

