 
//  import *  as productStore from '../../fixtures/datatest2.json' 
//  const productStore:string = require('../fixtures/datatest2')
let productNames:Array<string> = [];
let normalPrices:Array<string> = [];
let santanderPrices:Array<string> = [];
let productName:string;
let normalPrice:string;
let santanderPrice:string;

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
            let element = productNames[index];
            products.productName += element;
            
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

         }
         cy.wrap(products.productName).pause();
         
        })
    
})