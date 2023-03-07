/// <reference types="cypress" />


// var arrayOfProducts:Array<string> =[];
let productBrand:Array<string> =[];
let titleProduct:Array<string> =[]; 
let priceProduct:Array<string> =[]; 
let arrayCoffeeListArray:Array<any> =[];
let list:unknown
let elements:unknown
const product = {}
// let arrayOfProducts:unknown;
describe('Re convert products',()=>{
    before('Bring products',()=>{
        cy.readFile('../fixtures/datatest.json').then((str)=>{
            arrayOfProducts=str;
            productBrand = arrayOfProducts[0];
            titleProduct = arrayOfProducts[1];
            priceProduct = arrayOfProducts[2]
        })
    })
        it('Convert array',()=>{
            for (let i = 0; i < productBrand.length; i++) {

                elements =  titleProduct.map(titleProduct => new Array({Marca: productBrand[i]}, {Descripcion: titleProduct}, {Precio:priceProduct[i]}))
                arrayCoffeeListArray.push(elements[i]);
               
            }
            cy.wrap(arrayCoffeeListArray)
            // cy.wrap(arrayCoffeeListArray[3]).pause();
            cy.wrap(arrayCoffeeListArray[0]).pause();
            // cy.wrap(arrayCoffeeListArray[1]).pause();
            // cy.wrap(arrayCoffeeListArray[2]).pause();
                        
    })
})