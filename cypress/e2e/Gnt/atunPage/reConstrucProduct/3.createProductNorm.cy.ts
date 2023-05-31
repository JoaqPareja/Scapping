/// <reference types="cypress" />
import {gntReConstructAtunPage} from '../../../../support/Pages/SuperMarkets'

describe('Construct normal',()=>{ 
    let arrayTepm:Array<string>=[];
    let gntNewJsonCoffee:string ="cypress/fixtures/gntReConAtunProduct.json"
    beforeEach('Get products',()=>{
        gntReConstructAtunPage.readfile('not.be.empty', 'not.be.empty',  'not.be.empty', 'not.be.empty') 
    cy.readFile(gntNewJsonCoffee).then((data)=>{
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
    gntReConstructAtunPage.pushJson(gntNewJsonCoffee, gntReConstructAtunPage.newArrayCoffeeListArray);
    gntReConstructAtunPage.readJson(gntNewJsonCoffee, 'not.be.empty')
})
})