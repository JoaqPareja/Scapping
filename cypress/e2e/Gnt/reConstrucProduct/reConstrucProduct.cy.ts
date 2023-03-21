/// <reference types="cypress" />

describe('Re convert products',()=>{
const datatestRaw:string = "cypress/fixtures/datatestRaw.json" 
const datatestGeant:string = "cypress/fixtures/datatestGeant.json" 
let productBrand:Array<string> =[];
let titleProduct:Array<string> =[]; 
let priceProduct:Array<string> =[]; 
let arrayCoffeeListArray:Array<string> =[];
let elements:unknown; 
    beforeEach('Bring products',()=>{
        cy.readFile(datatestRaw)
    })
    it('Convert array',()=>{   
            cy.reCreateProduct(productBrand, elements, titleProduct, priceProduct, arrayCoffeeListArray)
    })
    it('Check positions of Array', ()=>{
        cy.writeFile(datatestGeant, arrayCoffeeListArray)
        
    })
})
