/// <reference types="cypress" />
import {gntAtunPageElements, gntReConstructAtunPage} from '../../../../support/Pages/SuperMarkets'

describe('Construct normal',()=>{ 
    let arrayTepm:Array<string>=[];
    beforeEach('Get products',()=>{
        gntReConstructAtunPage.readfile('not.be.empty', 'not.be.empty',  'not.be.empty', 'not.be.empty') 
    cy.readFile(gntAtunPageElements.gntNewJson).then((data)=>{
        arrayTepm =data;
        
    })
})
it('reCreateProduct',()=>{ 
    cy.reCreateProduct(gntReConstructAtunPage.productBrand, gntReConstructAtunPage.elements, gntReConstructAtunPage.titleProduct, 
        gntReConstructAtunPage.priceProduct, gntReConstructAtunPage.arrayCoffeeListArray)
                        cy.wrap(gntReConstructAtunPage.arrayCoffeeListArray).should('not.be.empty')
                    })
it('Construct the Array and check Marca',()=>{
    gntReConstructAtunPage.createNormalPrices();
    cy.wrap(gntReConstructAtunPage.normalArr).each((txt:any)=>{
            cy.wrap(txt).should('not.be.empty');
            cy.wrap(txt.Marca).should('not.be.empty');
            cy.wrap(txt.Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
           
    })
})
it('Check Description',()=>{
    cy.wrap(gntReConstructAtunPage.normalArr).each((txt:any)=>{
    cy.wrap(txt.Descripcion).should('not.be.empty');
    })
})
it('Check Normal Price',()=>{
    cy.wrap(gntReConstructAtunPage.normalArr).each((txt:any)=>{
    cy.wrap(txt.NormalPrice).should('not.be.empty');
    cy.wrap(txt.NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
    })
})
it('Unify arrays',()=>{
    gntReConstructAtunPage.unifyArrays(gntReConstructAtunPage.normalArr, arrayTepm)
})

it('push into new Json',()=>{
    gntReConstructAtunPage.pushJson(gntAtunPageElements.gntNewJson, gntReConstructAtunPage.newArrayCoffeeListArray);
})
it('Read json', ()=>{
    gntReConstructAtunPage.readJson(gntAtunPageElements.gntNewJson, 'not.be.empty')
})
})