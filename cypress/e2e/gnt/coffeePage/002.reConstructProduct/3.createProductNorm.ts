/// <reference types="cypress" />
import {gntCoffePageElements,gntReConstructCoffeProducts} from '../../../../support/Pages/SuperMarkets'

describe('Construct normal',()=>{ 
    let arrayTepm:Array<string>=[];
    beforeEach('Get products',()=>{
        gntReConstructCoffeProducts.readfile('not.be.empty', 'not.be.null');
    cy.readFile(gntCoffePageElements.gntNewJson).then((data)=>{
        arrayTepm =data;
        
    })
})
// it('reCreateProduct',()=>{ 
//     cy.reCreateProduct(gntReConstructCoffeProducts.productBrand, gntReConstructCoffeProducts.elements, 
//         gntReConstructCoffeProducts.titleProduct, gntReConstructCoffeProducts.priceProduct, 
//         gntReConstructCoffeProducts.directory,gntReConstructCoffeProducts.arrayCoffeeListArray )
//     cy.wrap(gntReConstructCoffeProducts.arrayCoffeeListArray).should('not.be.empty')
//                         cy.wrap(gntReConstructCoffeProducts.arrayCoffeeListArray).should('not.be.empty')
//                     })
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
    gntReConstructCoffeProducts.pushJson(gntCoffePageElements.gntNewJson, gntReConstructCoffeProducts.newArrayCoffeeListArray);
    gntReConstructCoffeProducts.readJson(gntCoffePageElements.gntNewJson, 'not.be.empty')
})
})