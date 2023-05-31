/// <reference types="cypress" />
import {gntWinePageElements,gntReConstructWinePage} from '../../../../support/Pages/SuperMarkets'

describe('Construct normal',()=>{ 
    let arrayTepm:Array<string>=[];
    beforeEach('Get products',()=>{
        gntReConstructWinePage.readfile('not.be.empty', 'not.be.empty',  'not.be.empty', 'not.be.empty') 
    cy.readFile(gntWinePageElements.gntNewJson).then((data)=>{
        arrayTepm =data;
        
    })
})
it('reCreateProduct',()=>{ 
    cy.reCreateProduct(gntReConstructWinePage.productBrand, gntReConstructWinePage.elements, gntReConstructWinePage.titleProduct, 
        gntReConstructWinePage.priceProduct, gntReConstructWinePage.arrayCoffeeListArray)
                        cy.wrap(gntReConstructWinePage.arrayCoffeeListArray).should('not.be.empty')
                    })
it('Construct the Array and check Marca',()=>{
    gntReConstructWinePage.createNormalPrices();
    cy.wrap(gntReConstructWinePage.normalArr).each((txt:any)=>{
            cy.wrap(txt).should('not.be.empty');
            cy.wrap(txt.Marca).should('not.be.empty');
            cy.wrap(txt.Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
           
    })
})
it('Check Description',()=>{
    cy.wrap(gntReConstructWinePage.normalArr).each((txt:any)=>{
    cy.wrap(txt.Descripcion).should('not.be.empty');
    })
})
it('Check Normal Price',()=>{
    cy.wrap(gntReConstructWinePage.normalArr).each((txt:any)=>{
    cy.wrap(txt.NormalPrice).should('not.be.empty');
    cy.wrap(txt.NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
    })
})
it('Unify arrays',()=>{
    gntReConstructWinePage.unifyArrays(gntReConstructWinePage.normalArr, arrayTepm)
})

it('push into new Json',()=>{
    gntReConstructWinePage.pushJson(gntWinePageElements.gntNewJson, gntReConstructWinePage.newArrayCoffeeListArray);
})
it('Read json', ()=>{
    gntReConstructWinePage.readJson(gntWinePageElements.gntNewJson, 'not.be.empty')
})
})