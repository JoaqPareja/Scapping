 export default class GntStoreProducts{
    public productBrand:Array<unknown> =[];
    public titleProduct:Array<unknown> =[]; 
    public priceProduct:Array<unknown> =[]; 
    public newArrayCoffeeListArray:Array<unknown> =[];
    // constructor(webElementCallback:any){
    //     webElementCallback;
    // }
    private getProductBrand($element:any,  Assertion1:string, Assertion2:string){
            cy.wrap($element).find('a > p').then((response: { text: () => string;})=>{
                this.productBrand.push(response.text())    
                cy.wrap(this.productBrand).should(Assertion1).should(Assertion2)    
        })
    }
    private getTitleProduct($element:any, Assertion1:string, Assertion2:string){
        cy.wrap($element).find('a > h2').then((response: { text: () => string;})=>{
            this.titleProduct.push( response.text());
            cy.wrap(this.titleProduct).should(Assertion1).should(Assertion2)  
    })  
    }
    private getPriceProduct($element:any, Assertion1:string, Assertion2:string){
        cy.wrap($element).find('div > p').then((response: { text: () => string;})=>{
            this.priceProduct.push(response.text());
            cy.wrap(this.priceProduct).should(Assertion1).should(Assertion2)    
        })
    }
 storeProducts(webElementCallback:any, Assertion1:string, Assertion2:string){
    webElementCallback.each(($el:any)=>{
    cy.wrap($el).within(($element:any)=>{
            this.getProductBrand($element, Assertion1, Assertion2)
            this.getTitleProduct($element, Assertion1, Assertion2)
            this.getPriceProduct($element, Assertion1, Assertion2)
        })
    })
 }
 unifyArrays(Asseertion1:string, Asseertion2:string){
    this.newArrayCoffeeListArray.push(this.productBrand,this.titleProduct, this.priceProduct)
    cy.wrap(this.newArrayCoffeeListArray).should(Asseertion1).should(Asseertion2)  
}
 writefile(gntRawJsonCoffeeCallBack:string){
    cy.writeFile(gntRawJsonCoffeeCallBack, this.newArrayCoffeeListArray)
}  
}
    
          
   


