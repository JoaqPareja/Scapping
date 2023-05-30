import  Urls  from '../urls';
import GntStoreProducts from "../GntStoreProducts/GntStoreProducts";

export default class GntDeConstructCoffeePage extends Urls{
    public gntRawJsonCoffee:string = 'cypress/fixtures/gntRawCoffeeProds.json'
    // constructor(webElementCallback:any){
    //     super(webElementCallback);
    // }
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

    }
    // this.elementsCoffePage.eachBox()
    // coffeStores(){
    //     this.elementsCoffePage.eachBox().each((utils.storeProducts())

    // }
    // storeProducts(this.elementsCoffePage.eachBox(), str2, str3, str4, str5)
    // utils.storeProducts(this.elementsCoffePage.eachBox(), this.productBrand, this.titleProduc)
        // utils.storeProducts(this.elementsCoffePage.eachBox(), this.productBrand, this.titleProduct)
        // Utils.storeProducts(, )
    
         

    // writefile(){
    //     cy.writeFile(this.gntRawJsonCoffee, this.arrayCoffeeListArray)

    // }   
}