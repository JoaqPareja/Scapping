/// <reference types="cypress" />

const datatest = '../fixtures/datatest.json'

describe('Re convert products',()=>{
let productBrand:Array<string> =[];
let titleProduct:Array<string> =[]; 
let priceProduct:Array<string> =[]; 
let arrayCoffeeListArray:Array<string> =[];
let elements:unknown; 
    beforeEach('Bring products',()=>{
        cy.readFile(datatest).then((str)=>{

            productBrand = str[0];
            titleProduct = str[1];
            priceProduct = str[2]
        })
    })
    it('Convert array',()=>{   
            cy.reCreateProduct(productBrand, elements, titleProduct, priceProduct, arrayCoffeeListArray)
    })
    it('Check positions of Array', ()=>{
        cy.wrap(arrayCoffeeListArray)
        cy.log('checking especific positions')
        cy.wrap(arrayCoffeeListArray[0])
        cy.wrap(arrayCoffeeListArray[1])
        cy.wrap(arrayCoffeeListArray[2])
        cy.wrap(arrayCoffeeListArray[3])
    })
})
