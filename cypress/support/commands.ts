

declare global {
   namespace Cypress {
     interface Chainable {

       checkWord(walue1: Array<string>, value2: string, 
                  value3: string):  Chainable<JQuery<HTMLElement>>

        reCreateProduct(productBrand:Array<string>, elements:unknown, titleProduct:Array<string>, 
          priceProduct:Array<string>, arrayCoffeeListArray:Array<unknown> ):  Chainable<JQuery<HTMLElement>>

          readJsonProduct(jsonString:string, productBrand:Array<string>, titleProduct:Array<string>, 
            priceProduct:Array<string>):  Chainable<JQuery<HTMLElement>>
        }   
   }
}

export function readJsonProduct(jsonString:string, productBrand:Array<string>, 
                  titleProduct:Array<string>,priceProduct:Array<string>){
cy.readFile(jsonString).then((str)=>{

              productBrand = str[0];
              titleProduct = str[1];
              priceProduct = str[2]
              cy.wrap(productBrand).pause();
          })
cy.wrap(productBrand).pause();
}


// export function checkWord(arrayOfProductList: Array<string>, productRequested:string, wordFound:string){
//   return cy.wrap(arrayOfProductList).then(()=>{
//      return cy.contains(productRequested).each((response: { text: () => Array<string>; })=>{
//       wordFound += response.text()
//       wordFound = JSON.stringify(wordFound)
//       cy.writeFile('../fixtures/datatest', wordFound)
//         // Cypress.env(wordFound, 'wordFound');
//       }) 
//     })
//   }

  export function reCreateProduct(productBrand:Array<string>,elements:any, titleProduct:Array<string>, 
        priceProduct:Array<string>, arrayCoffeeListArray:Array<unknown>){
          for (let i = 0; i < productBrand.length; i++) {

            elements =  titleProduct.map(titleProduct => new Array({Marca: productBrand[i], Descripcion: titleProduct, Precio:priceProduct[i]}))
            arrayCoffeeListArray.push(elements[i]);
          
        }
        
  // cy.log('checking especific positions')
  // cy.wrap(arrayCoffeeListArray[2]).pause();
  }

// Cypress.Commands.add('checkWord', checkWord)
Cypress.Commands.add('readJsonProduct', readJsonProduct)
Cypress.Commands.add('reCreateProduct', reCreateProduct)


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
        return false
})

require('cypress-downloadfile/lib/downloadFileCommand');


// Cypress.Commands.add('checkWord', (arrayOfProductList,productRequested, wordFound)=>{
//     return cy.wrap(arrayOfProductList).then(()=>{
//        return cy.contains(productRequested).then((response:any)=>{
//           Cypress.env(wordFound,  response.text());
//         }) 
//        })
// })

