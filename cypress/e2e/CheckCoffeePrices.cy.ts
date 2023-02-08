/// <reference types="cypress" />

import {homePageDevoto} from '../support/Pages/SuperMarkets'
let allCoffeesList;
// let arrayCoffeeList :[string] =[];
var arrayCoffeeList :Array<string> = [];

var cafeFound: string;

describe('Starting Web scrapping', () => {
  it('First', () => {
    homePageDevoto.visitHomepage();
    homePageDevoto.selectCity("Montevideo")
    homePageDevoto.clickConfirmSucursal();
    homePageDevoto.typeSearchInput('Cafe');
    homePageDevoto.elements.eachH3Cafe().each((response: { text: () => string; })=>{
      allCoffeesList = response.text();
       arrayCoffeeList.push(allCoffeesList);
 
    });
   
    cy.wrap(arrayCoffeeList).then(()=>{
       cy.contains('descafeinado').then((response:any)=>{
        cafeFound=response.text();
        // cy.log(cafeFound).pause();
        // cy.log(cafeFound);
        Cypress.env("cafeFound", cafeFound)
        // cy.writeFile('./datatest.json', cafeFound)
       })
       
      })
     
      
    })
    it('Second', ()=>{
      var cafeNow =  Cypress.env('cafeFound')
      cy.log(cafeNow)
    })
      
// for (let index = 0; index < arrayCoffeeList.length; index++) {
//   let element = arrayCoffeeList[index];
//   if(element == 'descafeinado' ){
//     console.log('Es el que yo quiero')
// }
//  if(element !== 'descafeinado' ){
//   console.log('No es el que yo quiero')
// }
// }
    //   arrayCoffeeList.forEach(element => {
    //     if(element == 'descafeinado' ){
    //         cy.log('Es el que yo quiero')
    //     }
    //   else if(element !== 'descafeinado' ){
    //   cy.log('No es el que yo quiero')
    // }
        
    //   });
  //  cy.log(cafeFound).pause();
    // if(txt == 'Café' ){
      
    //   console.log('Es el que yo quiero');
    //   cy.log('Es el que yo quiero')
    // }
    // if(txt !== 'Café' ){
    //   console.log('No es el que yo quiero');
    //   cy.log('No es el que yo quiero')
    // }
    
    //   if( txt.hasOwnProperty('Café molido EL CHANÁ 500 g + 100 g gratis')){
    //     cy.log('Es el que yo quiero')
    //   }else{
    //     cy.log('No es el que yo quiero')
    // }
      // cy.wrap(txt).then((txt2)=>{
      //   if( txt2.hasOwnProperty('Café BRACAFÉ 170 g + regalo')){
      //     cy.log('senior')
      //   }else{
      //     cy.log('nooo senior')
      // }

      // })
        
      // })
     
      
 
})


    // cy.wrap(arrayCoffeeList).each(($el)=>{
    //   // cy.log($el).pause();
    //   // cy.wrap($el).pause();
    
    //   // if(textnow === 'senior'){
    //   //   cafeFound = $el;
    //   //   cy.log(cafeFound).pause();
    //   // }
    //   cy.wrap($el).then((txt)=>{
    //       expect(txt).to.have.text('senior').pause();
    //   })
      // .should('have.text', 'senior').pause();
      // expect($el).to.have.text('senior').pause();
      // cy.wrap($el).should('have.text', 'senior').pause();
      // expect($el).to.have('text', 'senior').pause();
      // cy.wrap($el).contains('Caf').pause();
      // cy.wrap($el).then((txt)=>{
      //   // cy.get(txt).contains('senior')
      //   if(txt.contains('senior')){
      //     cy.log($el);
      //   }else{
      //   cy.log('noooo senior')
      //     }
      //   })
      //     if(txt === 'SENIOR' || txt === 'senior'){
      //       cy.log($el);
      // }else{
      //   cy.log('noooo senior')
      //     }
      
      // if($el === 'Café descafeinado SENIOR'){
      //   cy.log($el);
      // }else{
      //   cy.log('noooo senior')
      // }
    // cy.wrap($el).pause();
      // cy.wrap($el).each((txt)=>{this iteration  iterate trough each letter
      //   cy.wrap(txt).pause();
      //   if(txt === 'Senior'){
      //     cy.log(txt, 'SENIORRRRRRRRRR');
      //   }
      // })
    
    
    // if(arrayCoffeeList === 'senior'){
    //   cafeFound = $el;
    //   cy.log(cafeFound).pause();
    // }
