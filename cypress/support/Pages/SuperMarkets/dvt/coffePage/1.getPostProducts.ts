import Urls from "../urls";

export default class DvtDeConstructCoffeePage extends Urls{
    productBrand:Array<unknown> =[];
    titleProduct:Array<unknown> =[]; 
    priceProduct:Array<unknown> =[]; 
    arrayCoffeeListArray:Array<unknown> =[];
    dtvRawProducts:string = 'cypress/fixtures/dvtRawCoffeProds.json'
    tryElement:unknown; 
    santanderImg:Array<boolean> = [];
    //Why this is make like this, given that the dvt page use much more memory and that
    // some elements are separeted from each other it was better to separate each method
    elementsCoffePage ={
        eachBox:()=> cy.get('.Product'),
        eachPriceProduct:()=> cy.get('.Product-price')
    }
        getProductBrand(){
            this.elementsCoffePage.eachBox().each(($el)=>{
                cy.wrap($el).within(($element)=>{
                    cy.wrap($element).find('div > h3 > div').then((response: { text: () => string;})=>{
                        this.productBrand.push(response.text());     
                })
            })
        })
        }
        getTitleProducts(){
            this.elementsCoffePage.eachBox().each(($el)=>{
                cy.wrap($el).within(($element)=>{
                    cy.wrap($element).find('div > h3 > a').then((response: { text: () => string;})=>{
                        this.titleProduct.push(response.text())
                    })
                })
             })
        }
        getPriceProducts() {
            this.elementsCoffePage.eachPriceProduct().invoke('show')
                .each((response: { text: () => string;})=>{
                    this.priceProduct.push(response.text())
            // cy.log(response.text())
        })
        }
         concatProducts(){
        return  this.arrayCoffeeListArray.push( this.productBrand, this.titleProduct, this.priceProduct)

        }
        writefile(){
            // this.storeProducts();
            cy.writeFile(this.dtvRawProducts, this.arrayCoffeeListArray)
    
        }  
}