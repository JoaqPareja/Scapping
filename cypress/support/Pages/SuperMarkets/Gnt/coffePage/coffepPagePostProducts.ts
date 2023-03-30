
export default class ReConstructCoffePage {
    datatestRaw:string = "cypress/fixtures/datatestRaw.json" 
    datatestGeant:string = "cypress/fixtures/datatestGeant.json" 
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
     element:any
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
    createArrNormalAndSantanderPrices(){
        for (let index = 0; index < this.arrayCoffeeListArray.length; index++) {
            this.element = this.arrayCoffeeListArray[index];
            if( this.element[0].Precio.charAt(3) &&  this.element[0].Precio.charAt(3) === '$'  ||  this.element[0].Precio.charAt(4) === '$' ){
                this.elements =  this.element[0].Precio.split('$')
                cy.wrap( this.elements).then((txt)=>{
                    this.arrayOfPrecios.push({Marca: this.element[0].Marca, Descripcion:  this.element[0].Descripcion, NormalPrice:'$'+txt[1], SantanderPrice: '$'+txt[2]})
                })
            }     
        }
    }
    createUSDPrices(){
        for (let index = 0; index < this.arrayCoffeeListArray.length; index++) {
            this.element = this.arrayCoffeeListArray[index];
            if(this.element[0].Precio.charAt(7) == 'U'){
                this.elements = this.element[0].Precio.split('U');
                cy.wrap(this.elements).then((txt)=>{
                    this.arrayOfUSDPrecios.push({Marca:this.element[0].Marca, Descripcion: this.element[0].Descripcion, NormalPrice:'U'+txt[1], SantanderPrice:'U'+txt[2]})
            })
        }
    }
    }
    createNormalPrices(){
        for (let index = 0; index < this.arrayCoffeeListArray.length; index++) {
            this.element = this.arrayCoffeeListArray[index];
                if(this.element[0].Precio.charAt(3) !== '$' && this.element[0].Precio.charAt(4) !== '$' && this.element[0].Precio.charAt(7) !== 'U' ){                    
                    this.normalArr.push({Marca:this.element[0].Marca, Descripcion: this.element[0].Descripcion, NormalPrice:this.element[0].Precio})
                    }
        }
    }
    unifyArrays(){
        this.newArrayCoffeeListArray =  this.newArrayCoffeeListArray.concat(this.normalArr,this.arrayOfPrecios,this.arrayOfUSDPrecios)

    }
    pushJson(Asseertion:string){
        cy.writeFile(this.datatestGeant, this.newArrayCoffeeListArray)
           cy.readFile(this.datatestGeant).then((str)=>{
           cy.wrap(str).should(Asseertion)         
       })
    }
}