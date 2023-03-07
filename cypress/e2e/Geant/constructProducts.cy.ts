 
//  import *  as productStore from '../../fixtures/datatest2.json' 
//  const productStore:string = require('../fixtures/datatest2')
let productNames:Array<string> = [];
let normalPrices:Array<string> = [];
let santanderPrices:Array<string> = [];
let arrayOfProducts:Array<any> = [];
let productName:string;
let normalPrice:string;
let santanderPrice:string;
let productStore:Array<any> = [];;
let elementProductNames:unknown; 
let elementNormalPrices:unknown;
let elementSantanderPrices:unknown;
// const objProduct:Array<string> = [productName, normalPrice, santanderPrice]


class Products  {
    productName:string;
    normalPrice:string;
    santanderPrice:string;
    // constructor(productName:string, normalPrice:string, santanderPrice:string){
    //     this.productName = productName,
    //     this.normalPrice = normalPrice,
    //     this.santanderPrice = santanderPrice
    // }
}
const products = new Products()


describe('Re convert products',()=>{
    before('Bring products',()=>{
        cy.readFile('../fixtures/datatest2.json').then((str)=>{
            arrayOfProducts=str;
            productNames = str[0].productNames;
            normalPrices = str[1].normalPrices;
            santanderPrices = str[2].santanderPrices;
          })
        });
    
    it('Create product',()=>{        
        //   cy.wrap(productNames).pause();
        //   cy.wrap(normalPrices).pause();
        //   cy.wrap(santanderPrices).pause();
        for (let index = 0; index < productNames.length; index++) {
            elementProductNames = productNames[index];
             if(elementProductNames != productStore){
               
                for (let index = 0; index < normalPrices.length; index++) {
                    elementNormalPrices = productNames[index];
                    if(elementNormalPrices != productStore){
                      
                        for (let index = 0; index < santanderPrices.length; index++) {
                            elementSantanderPrices = productNames[index];
                            if(elementSantanderPrices != productStore){
                               
                            }
                          else  if(elementSantanderPrices == productStore){
                            productStore.push(elementProductNames)
                            }                        
                           }
                        //    break;
                         }
                        else if(elementNormalPrices == productStore){
                            productStore.push(elementNormalPrices)
                         }
                         
                        
                    }
                   
                }
                else if(elementProductNames == productStore){
                    productStore.push(elementSantanderPrices)
                }
                // break;
            // else if(element != productStore){
            //     productStore.push(element)
            }
            cy.wrap(productStore).pause();

        })
    
            // for (let index = 0; index < normalPrices.length; index++) {
            //      element = productNames[index];
            //     productStore.push(element)
            //     }
            //     for (let index = 0; index < santanderPrices.length; index++) {
            //          element = productNames[index];
            //         productStore.push(element)
            //         }
          
       
      
        // productNames.map((index)=>{
        //     productStore.push(index)
        //     cy.wrap(index)
        // })
        // normalPrices.map((index)=>{
        //     productStore.push(index)
        //     cy.wrap(index)
        // })
        // santanderPrices.map((index)=>{
        //     productStore.push(index)
        //     cy.wrap(index)
        // })
       
        // for (let index = 0; index < productNames.length; index++) {
        //     let element = productNames[index];
        //    products.productName += element;
        //     }
        // arrayOfProducts.map((index)=>{
        //       for (let index = 0; index < productNames.length; index++) {
        //       let element = productNames[index];
        //      products.productName += element;
        //       }
            // cy.wrap(index).pause();
            
            // cy.log('what would come here1?').pause();
            // cy.wrap(index.productNames);
            // cy.log('what would come here2?').pause();
            // cy.wrap(index.normalPrices);
            // cy.log('what would come here3?').pause();
            // cy.wrap(index.santanderPrices);
            // let productName = index.productNames
            // let normalPrice = index.normalPrices
            // let santanderPrices = index.santanderPrices
            // productStore.push(productName,normalPrice, santanderPrices)
            // // let productStore = [index.productNames, index.normalPrices, index.santanderPrices]
            // cy.wrap(productStore).pause();
            // cy.wrap(productStore[0]).pause();
            
        
        //  for (let index = 0; index < productNames.length; index++) {
        //     let element = productNames[index];
        //     products.productName += element;
            
            //if(element !==  array){//array.push}
            //else {}
            // var productID = product.id;
            // var productName = product.name;
            // var productImageURL = product.imageURL;
            // var productPrice = product.price;
            // var productDescription = product.description;
            //product.productName
            //product.prices
            //product.pricesSantander
            // products.push(product)

        //  }
        //  cy.wrap(products.productName).pause();
         
        })
    
