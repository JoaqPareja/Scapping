

declare global {
   namespace Cypress {
     interface Chainable {

       checkWord(walue1: Array<string>, value2: string, 
                  value3: string):  Chainable<JQuery<HTMLElement>>

        reCreateProduct(productBrand:Array<string>, elements:unknown, titleProduct:Array<string>, 
          priceProduct:Array<string>, arrayCoffeeListArray:Array<string> ):  Chainable<JQuery<HTMLElement>>

          readJsonProduct(jsonString:string, productBrand:Array<string>, titleProduct:Array<string>, 
            priceProduct:Array<string>):  Chainable<JQuery<HTMLElement>>
        }   
     
   }
}



export function checkWord(arrayOfProductList: Array<string>, productRequested:string, wordFound:string){
  return cy.wrap(arrayOfProductList).then(()=>{
     return cy.contains(productRequested).each((response: { text: () => Array<string>; })=>{
      wordFound += response.text()
      wordFound = JSON.stringify(wordFound)
      cy.writeFile('../fixtures/datatest', wordFound)
        // Cypress.env(wordFound, 'wordFound');
      }) 
    })
  }

  export function reCreateProduct(productBrand:Array<string>,elements:unknown, titleProduct:Array<string>, 
        priceProduct:Array<string>, arrayCoffeeListArray:Array<string>){
          for (let i = 0; i < productBrand.length; i++) {

            elements =  titleProduct.map(titleProduct => new Array({Marca: productBrand[i]}, {Descripcion: titleProduct}, {Precio:priceProduct[i]}))
            // elements = JSON(elements)
            arrayCoffeeListArray.push(elements[i]);
          
        }
        
  // cy.log('checking especific positions')
  // cy.wrap(arrayCoffeeListArray[2]).pause();
  }

Cypress.Commands.add('checkWord', checkWord)
Cypress.Commands.add('reCreateProduct', reCreateProduct)


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

// Cypress.Commands.add('checkWord', (arrayOfProductList,productRequested, wordFound)=>{
//     return cy.wrap(arrayOfProductList).then(()=>{
//        return cy.contains(productRequested).then((response:any)=>{
//           Cypress.env(wordFound,  response.text());
//         }) 
//        })
// })

