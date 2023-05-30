

export default class DvtReConstructCoffeePage{
    datatestRaw:string = "cypress/fixtures/dvtRawCoffeeProds.json" 
    productBrand:Array<string> =[];
    titleProduct:Array<string> =[]; 
    priceProduct:Array<any> =[]; 
    arrayCoffeeListArray:Array<any> =[];
    arrayOfPrecios:Array<any> =[];
    arrayOfUSDPrecios:Array<any> =[];
    normalArr:Array<any>=[];
    elements:any; 
    newArrayCoffeeListArray:Array<any> =[];
    str:any;
    element:any; 
    marca:Array<any>=[];
    descripcion:Array<string>=[];   
    tempElement:any; 

    readfile(Assertion1:string, Assertion2:string, Assertion3:string, Assertion4:string){
        cy.readFile(this.datatestRaw).then((str)=>{
            cy.wrap(str).should(Assertion1)
            this.productBrand = str[0]
            cy.wrap(this.productBrand).should(Assertion2);
            this.titleProduct = str[1]
            cy.wrap(this.titleProduct).should(Assertion3);
            this.priceProduct = str[2] 
            cy.wrap(this.priceProduct).should(Assertion4);
        })   
    }

}