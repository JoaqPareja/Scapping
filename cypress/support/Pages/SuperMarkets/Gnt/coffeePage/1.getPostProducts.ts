import  Urls  from '../urls';
export default class GntDeConstructCoffeePage extends Urls{
    private productBrand:Array<unknown> =[];
    private titleProduct:Array<unknown> =[]; 
    private priceProduct:Array<unknown> =[]; 
    private arrayCoffeeListArray:Array<unknown> =[];
    private gntRawJsonCoffee:string = 'cypress/fixtures/gntRawCoffeeProds.json'

    constructor(){
        super();
    }
    elementsCoffePage= {
        eachBox:()=> cy.get('div.styles__ProductItem-tbq658-3 > div:nth-child(3)'),
        allProductsSections:()=> cy.get('.styles__ProductList-xnd9je-0'),
        pMarca:() => cy.get('div.styles__ProductItem-tbq658-3 > div:nth-child(3) > a:nth-child(3) > p:nth-child(1)'),
        h2:()=> cy.get('h2'),
        pPrice:()=> cy.get('div.styles__ProductItem-tbq658-3 > div:nth-child(3) > div:nth-child(4) > p:nth-child(1)'),
        divImgSantander:()=> cy.get('.styles__DiscountFlag-rjxhbr-0 TKMga undefined flag santander-15%-precio-lider'),
        pPriceSantander:()=> cy.get('div.styles__ProductItem-tbq658-3 > div:nth-child(3) > div:nth-child(4) > div:nth-child(2) > p:nth-child(1)'),
        secondPPriceSantander:()=> cy.get('div.styles__ProductItem-tbq658-3 > div:nth-child(3) > div:nth-child(4) > div:nth-child(3) > p:nth-child(1)')
    }
    storeProducts(){
        this.elementsCoffePage.eachBox().each(($el)=>{
            cy.wrap($el).within(($element)=>{
                cy.wrap($element).find('a > p').then((response: { text: () => string;})=>{
                    this.productBrand.push(response.text())       
            })
            cy.wrap($element).find('a > h2').then((response: { text: () => string;})=>{
                this.titleProduct.push( response.text())
            })
            cy.wrap($element).find('div > p').then((response: { text: () => string;})=>{
                this.priceProduct.push(response.text());     
            })
            
        })
    });
            return  this.arrayCoffeeListArray.push( this.productBrand, this.titleProduct, this.priceProduct)
}
    writefile(){
        cy.writeFile(this.gntRawJsonCoffee, this.arrayCoffeeListArray)

    }   
}