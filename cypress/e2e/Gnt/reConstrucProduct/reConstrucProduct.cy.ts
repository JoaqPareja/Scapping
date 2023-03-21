/// <reference types="cypress" />

describe('Re convert products',()=>{
const datatestRaw:string = "cypress/fixtures/datatestRaw.json" 
const datatestGeant:string = "cypress/fixtures/datatestGeant.json" 
let productBrand:Array<string> =[];
let titleProduct:Array<string> =[]; 
let priceProduct:Array<string> =[]; 
let arrayCoffeeListArray:Array<unknown> =[];
let elements:unknown; 
    beforeEach('Bring products',()=>{
        cy.readFile(datatestRaw).then((str)=>{
            productBrand = str[0];
            titleProduct = str[1];
            priceProduct = str[2]
        })
    })
    it('Convert array',()=>{   
            cy.reCreateProduct(productBrand, elements, titleProduct, priceProduct, arrayCoffeeListArray)
            cy.wrap(arrayCoffeeListArray).should('not.be.empty')
            // cy.wrap(arrayCoffeeListArray[1][1]).should('have.string')
        })
    it('Check positions of Array and push into new Json', ()=>{
        cy.writeFile(datatestGeant, arrayCoffeeListArray)
         cy.wrap(arrayCoffeeListArray[0][0]).should('not.be.empty');
         cy.wrap(arrayCoffeeListArray[0][0].Marca).should('not.be.empty');
         cy.wrap(arrayCoffeeListArray[0][0].Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
         cy.wrap(arrayCoffeeListArray[0][0].Descripcion).should('not.be.empty');
         cy.wrap(arrayCoffeeListArray[0][0].Precio).should('not.be.empty');
         cy.wrap(arrayCoffeeListArray[0][0].Precio).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
        //  cy.wrap(arrayCoffeeListArray[0][0].Precio).should('not.have.value', 'text');
        cy.readFile(datatestGeant).then((str)=>{
            cy.wrap(str).should('not.be.empty')
        })
        
    })
})
