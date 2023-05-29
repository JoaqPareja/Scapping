/// <reference types="cypress" />
import {gntReConstructCoffePage} from '../../../../support/Pages/SuperMarkets'

describe('Construct normal',()=>{ 
    let arrayTepm:Array<string>=[];
    beforeEach('Get products',()=>{
        gntReConstructCoffePage.readfile('not.be.empty', 'not.be.empty',  'not.be.empty', 'not.be.empty') 
    cy.readFile(gntReConstructCoffePage.datatestGeant).then((data)=>{
        arrayTepm =data;
        
    })
})
it('reCreateProduct',()=>{ 
    cy.reCreateProduct(gntReConstructCoffePage.productBrand, gntReConstructCoffePage.elements, gntReConstructCoffePage.titleProduct, 
        gntReConstructCoffePage.priceProduct, gntReConstructCoffePage.arrayCoffeeListArray)
                        cy.wrap(gntReConstructCoffePage.arrayCoffeeListArray).should('not.be.empty')
                    })
it('Construct the Array and check Marca',()=>{
    gntReConstructCoffePage.createNormalPrices();
    cy.wrap(gntReConstructCoffePage.normalArr).each((txt:any)=>{
            cy.wrap(txt).should('not.be.empty');
            cy.wrap(txt.Marca).should('not.be.empty');
            cy.wrap(txt.Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
           
    })
})
it('Check Description',()=>{
    cy.wrap(gntReConstructCoffePage.normalArr).each((txt:any)=>{
    cy.wrap(txt.Descripcion).should('not.be.empty');
    })
})
it('Check Normal Price',()=>{
    cy.wrap(gntReConstructCoffePage.normalArr).each((txt:any)=>{
    cy.wrap(txt.NormalPrice).should('not.be.empty');
    cy.wrap(txt.NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
    })
})
it('Unify arrays',()=>{
    gntReConstructCoffePage.unifyArrays(gntReConstructCoffePage.normalArr, arrayTepm)
})

it('push into new Json',()=>{
    gntReConstructCoffePage.pushJson(gntReConstructCoffePage.datatestGeant, gntReConstructCoffePage.newArrayCoffeeListArray);
    gntReConstructCoffePage.readJson(gntReConstructCoffePage.datatestGeant, 'not.be.empty')
})
})