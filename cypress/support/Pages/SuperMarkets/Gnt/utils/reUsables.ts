
// export default class utils{

// constructor(private elementsCoffePage:any, eachBox:any){
//     elementsCoffePage;
    
// }
//     storeProducts(eachBox){
//         this.elementsCoffePage.eachBox().each(($el:any)=>{
//             cy.wrap($el).within(($element:any)=>{
//                 cy.wrap($element).find('a > p').then((response: { text: () => string;})=>{
//                     this.productBrand.push(response.text())       
//             })
//             cy.wrap($element).find('a > h2').then((response: { text: () => string;})=>{
//                 this.titleProduct.push( response.text())
//             })
//             cy.wrap($element).find('div > p').then((response: { text: () => string;})=>{
//                 this.priceProduct.push(response.text());     
//             })
            
//         })
//     });
//             return  this.arrayCoffeeListArray.push( this.productBrand, this.titleProduct, this.priceProduct)
//     }
//     writefile(){
//         cy.writeFile(this.gntRawJsonCoffee, this.arrayCoffeeListArray)
    
//     }  
// }
