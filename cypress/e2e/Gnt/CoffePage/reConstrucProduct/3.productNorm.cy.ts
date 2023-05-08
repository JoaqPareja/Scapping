/// <reference types="cypress" />
import {reConstructCoffePage} from '../../../../support/Pages/SuperMarkets'

describe('Construct normal',()=>{ 
    let arrayTepm:Array<string>=[];
    beforeEach('Get products',()=>{
    reConstructCoffePage.readfile('not.be.empty', 'not.be.empty',  'not.be.empty', 'not.be.empty') 
    cy.readFile(reConstructCoffePage.datatestGeant).then((data)=>{
        arrayTepm =data;
    })
})
it('reCreateProduct',()=>{ 
    cy.reCreateProduct(reConstructCoffePage.productBrand, reConstructCoffePage.elements, reConstructCoffePage.titleProduct, 
                        reConstructCoffePage.priceProduct, reConstructCoffePage.arrayCoffeeListArray)
                        cy.wrap(reConstructCoffePage.arrayCoffeeListArray).should('not.be.empty')
                    })
it('Construct the Array and check Marca',()=>{
    reConstructCoffePage.createNormalPrices();
    cy.wrap(reConstructCoffePage.normalArr).each((txt:any)=>{
            cy.wrap(txt).should('not.be.empty');
            cy.wrap(txt.Marca).should('not.be.empty');
            cy.wrap(txt.Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
           
    })
})
it('Check Description',()=>{
    cy.wrap(reConstructCoffePage.normalArr).each((txt:any)=>{
    cy.wrap(txt.Descripcion).should('not.be.empty');
    })
})
it('Check Normal Price',()=>{
    cy.wrap(reConstructCoffePage.normalArr).each((txt:any)=>{
    cy.wrap(txt.NormalPrice).should('not.be.empty');
    cy.wrap(txt.NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
    })
})
it('Unify arrays',()=>{
    reConstructCoffePage.unifyArrays(reConstructCoffePage.normalArr, arrayTepm)
})

it('push into new Json',()=>{
    reConstructCoffePage.pushJson(reConstructCoffePage.datatestGeant, reConstructCoffePage.normalArr);
    reConstructCoffePage.readJson(reConstructCoffePage.datatestGeant, 'not.be.empty')
})
})