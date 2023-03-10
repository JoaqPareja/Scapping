/// <reference types="cypress" />


describe('Re convert products',()=>{
const jsonProduct:string = '../fixtures/datatest.json'
let productBrand:Array<string> =[];
let titleProduct:Array<string> =[]; 
let priceProduct:Array<string> =[]; 
let arrayCoffeeListArray:Array<string> =[];
let elements:unknown; 
    beforeEach('Bring products',()=>{
        cy.readFile(jsonProduct).then((str)=>{
            productBrand = str[0];
            titleProduct = str[1];
            priceProduct = str[2]
        })
    })
    it('Convert array',()=>{
       
            cy.reCreateProduct(productBrand, elements, titleProduct, priceProduct, arrayCoffeeListArray)
            // for (let i = 0; i < productBrand.length; i++) {

            //     elements =  titleProduct.map(titleProduct => new Array({Marca: productBrand[i]}, {Descripcion: titleProduct}, {Precio:priceProduct[i]}))
            //     arrayCoffeeListArray.push(elements[i]);       
            // }
            // cy.log('checking especific positions')
            // cy.wrap(arrayCoffeeListArray[0]).pause(); esto no lo toma aca
            
    })
    it('Check positions of Array', ()=>{
        cy.wrap(arrayCoffeeListArray)
        cy.log('checking especific positions')
        cy.wrap(arrayCoffeeListArray[0]).pause();
        // cy.wrap(JSON.(arrayCoffeeListArray[0])).pause();
        cy.wrap(arrayCoffeeListArray[1]).pause();
        cy.wrap(arrayCoffeeListArray[2]).pause();
        cy.wrap(arrayCoffeeListArray[3]).pause();
    })
})