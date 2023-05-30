/// <reference types="cypress" />
import {gntReConstructCoffeProducts} from '../../../../support/Pages/SuperMarkets'

describe('Construct normal',()=>{ 
    let arrayTepm:Array<string>=[];
    let gntNewJsonCoffee:string ="cypress/fixtures/gntReConWineProduct.json"
    beforeEach('Get products',()=>{
        gntReConstructCoffeProducts.readfile('not.be.empty', 'not.be.empty',  'not.be.empty', 'not.be.empty') 
    cy.readFile(gntNewJsonCoffee).then((data)=>{
        arrayTepm =data;
        
    })
})
it('reCreateProduct',()=>{ 
    cy.reCreateProduct(gntReConstructCoffeProducts.productBrand, gntReConstructCoffeProducts.elements, gntReConstructCoffeProducts.titleProduct, 
        gntReConstructCoffeProducts.priceProduct, gntReConstructCoffeProducts.arrayCoffeeListArray)
                        cy.wrap(gntReConstructCoffeProducts.arrayCoffeeListArray).should('not.be.empty')
                    })
it('Construct the Array and check Marca',()=>{
    gntReConstructCoffeProducts.createNormalPrices();
    cy.wrap(gntReConstructCoffeProducts.normalArr).each((txt:any)=>{
            cy.wrap(txt).should('not.be.empty');
            cy.wrap(txt.Marca).should('not.be.empty');
            cy.wrap(txt.Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
           
    })
})
it('Check Description',()=>{
    cy.wrap(gntReConstructCoffeProducts.normalArr).each((txt:any)=>{
    cy.wrap(txt.Descripcion).should('not.be.empty');
    })
})
it('Check Normal Price',()=>{
    cy.wrap(gntReConstructCoffeProducts.normalArr).each((txt:any)=>{
    cy.wrap(txt.NormalPrice).should('not.be.empty');
    cy.wrap(txt.NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
    })
})
it('Unify arrays',()=>{
    gntReConstructCoffeProducts.unifyArrays(gntReConstructCoffeProducts.normalArr, arrayTepm)
})

it('push into new Json',()=>{
    gntReConstructCoffeProducts.pushJson(gntNewJsonCoffee, gntReConstructCoffeProducts.newArrayCoffeeListArray);
    gntReConstructCoffeProducts.readJson(gntNewJsonCoffee, 'not.be.empty')
})
})