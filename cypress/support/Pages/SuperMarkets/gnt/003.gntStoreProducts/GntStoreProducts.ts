 export default class GntStoreProducts{
    public productBrand:Array<unknown> =[];
    public titleProduct:Array<unknown> =[]; 
    public priceProduct:Array<unknown> =[]; 
    public newArrayCoffeeListArray:Array<unknown> =[];
    private currentnumber:number = 0;
    public imgsDirectories:Array<unknown> =[]; 
    private currentImagProduct:any;
    public currentImgsNames:Array<unknown> =[]; 
    public currentDirectoryNames:Array<unknown> =[]; 
    // constructor(webElementCallback:any){
    //     webElementCallback;
    // }
    private getProductBrand($element:any){
            cy.wrap($element).find('a > p').then((response: { text: () => string;})=>{
                this.productBrand.push(response.text())    
                // cy.wrap(this.productBrand).should(Assertion1).should(Assertion2)    
        })
    }
    private getTitleProduct($element:any){
        cy.wrap($element).find('a > h2').then((response: { text: () => string;})=>{
            this.titleProduct.push( response.text());
            // cy.wrap(this.titleProduct).should(Assertion1).should(Assertion2)  
    })  
    }
    private getPriceProduct($element:any){
        cy.wrap($element).find('div > p').then((response: { text: () => string;})=>{
            this.priceProduct.push(response.text());
            // cy.wrap(this.priceProduct).should(Assertion1).should(Assertion2)    
        })
    }
    private getImgProduct($element:any, callbackName:string){
        cy.wrap($element).find('a > img')
            .invoke('attr', 'src').then((response:unknown)=>{
              let currentImg:any = response
              this.currentnumber = this.currentnumber +1;
              this.currentImagProduct = `${callbackName}${this.currentnumber}`
              cy.downloadFile(currentImg,`cypress/downloads/${callbackName}Downloads`,`${this.currentImagProduct}.jpg`)
              this.imgsDirectories.push({currentImgProduct: this.currentImagProduct, directory: `cypress/downloads/${callbackName}Downloads/${this.currentImagProduct}.jpg`})
            })    
            // cy.wrap(this.imgsDirectories).pause()
}
 storeProducts(webElementCallback:any, callbackName:string){
    webElementCallback.each(($el:any)=>{
       
    cy.wrap($el).within(($element:any)=>{
            this.getImgProduct($el, callbackName)
            this.getProductBrand($element)
            this.getTitleProduct($element)
            this.getPriceProduct($element)
        })
    })
 }
 unifyArrays(Asseertion1:string, Asseertion2:string){
    this.newArrayCoffeeListArray.push(this.productBrand,this.titleProduct, this.priceProduct, this.imgsDirectories)
    cy.wrap(this.newArrayCoffeeListArray).should(Asseertion1).should(Asseertion2)  
}
 writefile(gntRawJsonCoffeeCallBack:string){
    cy.writeFile(gntRawJsonCoffeeCallBack, this.newArrayCoffeeListArray)
}  
}
    
          
   


