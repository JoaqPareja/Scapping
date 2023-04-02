
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
            if(this.element[0].Precio.charAt(3) && this.element[0].Precio.charAt(3) === '$'  ||  this.element[0].Precio.charAt(4) === '$'||  this.element[0].Precio.charAt(6) === '$'){
                this.elements =  this.element[0].Precio.split('$')
                let marca:Array<any> = [this.element[0].Marca]
                let descripcion:Array<string> = [this.element[0].Descripcion]
                cy.wrap( this.elements).then((txt:unknown)=>{
                    let tempElement:any = marca.map(marca => new Array({ Marca: marca, Descripcion: descripcion[0], NormalPrice:'$'+txt[1], SantanderPrice: '$'+txt[2]}))
                    // let str  = tempElement[0].toString();
                    // cy.wrap(str).pause()
                    // console.log(str)
                   
                    this.arrayOfPrecios.push(tempElement[0]);
                    // this.arrayOfPrecios.toString()
                    // cy.log(this.arrayOfPrecios.toString())
                    // cy.wrap(this.arrayOfPrecios).pause();
                    // cy.wrap(this.arrayOfPrecios[0]).pause();
                    // cy.wrap(this.arrayOfPrecios[0].Marca).pause();
                })              
            }     
        }

    }
    createUSDPrices(){
        for (let index = 0; index < this.arrayCoffeeListArray.length; index++) {
            this.element = this.arrayCoffeeListArray[index];
            if(this.element[0].Precio.charAt(7) == 'U'){
                this.elements = this.element[0].Precio.split('U');
                cy.wrap(this.elements).then((txt:unknown)=>{
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
        this.newArrayCoffeeListArray =  this.newArrayCoffeeListArray.concat(this.normalArr, JSON.stringify(this.arrayOfPrecios),this.arrayOfUSDPrecios)
    }
    pushJson(Asseertion1:string){
        cy.writeFile(this.datatestGeant, this.newArrayCoffeeListArray)
           cy.readFile(this.datatestGeant).each((str:any)=>{
           cy.wrap(str).should(Asseertion1) 
        //    cy.wrap(str.Marca).pause();
           cy.wrap(str.Marca).should(Asseertion1)          
           cy.wrap(str.Descripcion).should(Asseertion1) 
           cy.wrap(str.NormalPrice).should(Asseertion1) 
           if(str.SantanderPrice){
            cy.log('santander price exist')
            cy.wrap(str.SantanderPrice).should(Asseertion1);
        }
       })
    }
}