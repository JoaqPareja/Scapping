/// <reference types="cypress" />
import {reConstructCoffePage} from '../../../../support/Pages/SuperMarkets'

describe('Construct USD Prices',()=>{
    let arrayTepm:any;
   
    beforeEach('Get products',()=>{
        
        reConstructCoffePage.readfile('not.be.empty', 'not.be.empty',  'not.be.empty', 'not.be.empty') 
        cy.readFile(reConstructCoffePage.datatestGeant).then((data:any)=>{
            arrayTepm= data
            // arrayTepm = data;
            // cy.wrap(arrayTepm).each((txt)=>{
            //     cy.wrap(txt).pause()
            //     // cy.wrap(txt[3]).pause()
            //     // cy.wrap(txt[4]).pause()
            // })
        })
       
    })
    it('reCreateProduct',()=>{ 
        
        // JSON.parse(arrayTepm);
        cy.reCreateProduct(reConstructCoffePage.productBrand, reConstructCoffePage.elements, reConstructCoffePage.titleProduct, 
                            reConstructCoffePage.priceProduct, reConstructCoffePage.arrayCoffeeListArray)
                            cy.wrap(reConstructCoffePage.arrayCoffeeListArray).should('not.be.empty')
                        })
    it('Get the USD prices', ()=>{
        reConstructCoffePage.createUSDPrices();
    })
    it('Check Marca',()=>{   
            cy.wrap(reConstructCoffePage.arrayOfUSDPrecios).each((txt:any)=>{   
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
        cy.wrap(reConstructCoffePage.arrayOfUSDPrecios).each((txt:any)=>{  
            cy.log('Desription property')
            cy.wrap(txt.Descripcion).should('not.be.empty')                   
        })
    })
    it('Check  Normal Price', ()=>{
        cy.wrap(reConstructCoffePage.arrayOfUSDPrecios).each((txt:any)=>{   
            cy.log('Property of NormalPrice')
            cy.wrap(txt.NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
        })
    })
    it('Check SantanderPrice', ()=>{
        cy.wrap(reConstructCoffePage.arrayOfUSDPrecios).each((txt:any)=>{   
        if(txt.SantanderPrice){
            cy.log('Property of SantanderPrice')
            cy.wrap(txt.SantanderPrice).should('not.be.empty'),
            cy.wrap(txt.SantanderPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz') 
        }
    })
    })
    it('Unify arrays',()=>{
        reConstructCoffePage.unifyArrays(arrayTepm, reConstructCoffePage.arrayOfUSDPrecios, )
    })
  
    it('Push Arrs',()=>{
       
        reConstructCoffePage.pushJson(reConstructCoffePage.datatestGeant, reConstructCoffePage.newArrayCoffeeListArray);
        reConstructCoffePage.readJson(reConstructCoffePage.datatestGeant, 'not.be.empty')
    })
})

