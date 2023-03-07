/// <reference types="cypress" />

import {homePageGeant} from '../../support/Pages/SuperMarkets'

 
let allCoffeesList: string;
var arrayCoffeeList: Array<string> = [];

let coffeeFoundOnGeant:  string | number; 
let productCoffeeList:  Array<string> & Array<number> = [];
let coffePrice: number | string;
let coffepriceGeant: number | string;
let coffeName:string = 'molido'; //I can create an api request 
var productName:any
let productNames:string
var normalPrice:any;
var normalPrices: Array<string> = [];


let productStore: Array<string> = [];
let element1:string;
let element2:string;
const objProduct:Array<string> =[productName, normalPrice]
// let productNames1:string = 'product'
describe('Starting Web scrapping', () => {

  //What i should do here is do a beforeall requesting the json file from the front, with the product information needed.
  it('First', () => {
    
    homePageGeant.visitHomepage();
    // homePageGeant.selectCity("Montevideo")
    // homePageGeant.clickConfirmSucursal();
    homePageGeant.typeSearchInput('Cafe');
    homePageGeant.clickSeeAllProducts();
    // cy.get('[data-sku="30182"] > .styles__Container-tbq658-9 > .styles__Prices-tbq658-18 > .GwWDp')
    cy.get('.styles__Title-tbq658-14').each((response: { text: () => string; })=>{
      
      productNames = response.text();
      productStore.push(productNames);
      for (let index = 0; index < productStore.length; index++) {
         element1 = productStore[index];
          productName = {"productname": element1};
        cy.writeFile('../fixtures/datatest', productName)
    //     cy.readFile('../fixtures/datatest').then((txt)=>{
    //     //  cy.wrap(txt).pause();
    //  })
        cy.get('div.styles__ProductItem-tbq658-3 > div:nth-child(3) > div:nth-child(4) > p:nth-child(1)').each((response: { text: () => string; })=>{
          
          normalPrice = response.text()
          normalPrices.push(normalPrice)
          for (let index = 0; index < normalPrices.length; index++) {
             element2 = normalPrices[index];
             
             normalPrice = {"normalprice":element2}
             cy.readFile('../fixtures/datatest').then((txt)=>{
              // cy.wrap(normalPrice).pause();
              arrayCoffeeList.push(txt, normalPrice)
              // txt = [{normalPrice}, {txt}]
              // cy.wrap(arrayCoffeeList).pause();
              cy.log('intento de creaaar algo')
              cy.writeFile('../fixtures/datatest2', arrayCoffeeList)
            //   cy.readFile('../fixtures/datatest').then((txt)=>{
            //     cy.wrap(txt).pause();
            // })
           
          })
            break;
             }
                })
                break;
           
          }
         
         
        })
        
       
      // Tirar la lista a una base de datos y luego que otro backend se encargue de las peticiones del front
  
      //Entonces en base a eso lo que debo de hacer es asegurarme que al recorrer el listado se detenga en 
      //cada producto y guarde su nombre, su descripcion y precio
  
  
      //Es al pedo que le tire un coffename porque en realidad este algoritmo no recibira peticiones del front en tiempo real
      // cy.wrap(arrayCoffeeList).pause();
      // cy.checkWord(arrayCoffeeList, coffeName , 'cafeFoundOnGeant')
      // cy.readFile('../fixtures/datatest').then((txt)=>{
      //     cy.wrap(txt).pause();
      // })
    })
   it('Get only product',()=>{
    cy.readFile('../fixtures/datatest2').then((txt)=>{
      cy.wrap(txt).pause();
      cy.log('siiiiiiiii eso esss').pause();
    })
   })
   
      // cy.contains(coffeName).then((response:any)=>{
      //   coffePrice = response.text();
      //     Cypress.env('coffePrice', coffePrice)
      //     cy.wrap(coffePrice).pause();
      // })
    
    
    // .then(() =>{
    // homePageGeant.elements.priceOfCoffe().then((response: { text: () => string; }) => {
        
    //     coffePrice = response.text();
    //     Cypress.env('coffePrice', coffePrice)
    //   })
    // });
    // productCoffeeList = "Precio del Cafe":coffePrice

    it('Price', ()=>{
      cy.visit('https://www.geant.com.uy/busca?ft=cafe');

      cy.readFile('../fixtures/datatest').then((response:string)=>{
        cy.log(response).pause();
      })
      // let cafeFoundOnGeant:string = 
      cy.wrap(Cypress.env('cafeFoundOnGeant')).pause();
      cy.wrap(Cypress.env('cafeFoundOnGeant')).then(()=>{
        homePageGeant.elements.priceOfCoffe().then((response: { text: () => string; })=>{
          coffePrice = response.text();
          Cypress.env('coffePrice', coffePrice)
          cy.wrap(coffePrice).pause();
        })

     
        // Cypress.env(productCoffeeList, 'productCoffeeList')
    })
 
    });
    it('Third', ()=>{


      coffeeFoundOnGeant =  Cypress.env('cafeFoundOnGeant');
      coffepriceGeant = Cypress.env('coffePrice');
      // productCoffeeList.push({'Cafe':coffeeFoundOnGeant},{'Precio del Cafe':coffepriceGeant})

        cy.wrap(productCoffeeList).pause();
        cy.writeFile('./datatest.json', productCoffeeList)
      cy.readFile('./datatest.json').then((response:string)=>{
        cy.log(response).pause();
        // cy.intercept('POST', '/users*', {
        //   statusCode: 201,
        //   body: {
        //     name: 'Peter Pan',
        //   },
        // })
        
    })
 
})

    
  
})