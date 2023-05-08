
export default class ReConstructCoffePage {
    //Declaring private variables
    //Atributos de la clase
    datatestRaw:string = "cypress/fixtures/datatestRaw.json" 
    datatestGeant:string ="cypress/fixtures/datatestGeant.json"
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
    // constructor(datatestGeant:string){
    // this.datatestGeant = "cypress/fixtures/datatestGeant.json" ;
    // }
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
            //Aca le voy a pedir que si el caracter 4 existe y si ademas que existe es un signo de $ 
            if(this.element[0].Precio.charAt(3) == '$'  ||  this.element[0].Precio.charAt(4) == '$'|| this.element[0].Precio.charAt() == '$'||  this.element[0].Precio.charAt(6) == '$'){
                this.elements =  this.element[0].Precio.split('$')
                let marca:Array<any>= [this.element[0].Marca]
                let descripcion:Array<string> = [this.element[0].Descripcion]
                cy.wrap( this.elements).then((txt:any)=>{
                    this.tempElement = marca.map(marca => new Array({ Marca: marca, Descripcion: descripcion[0], NormalPrice:'$'+txt[1], SantanderPrice: '$'+txt[2]}))
                    this.arrayOfPrecios.push(this.tempElement[0][0]); 
                    // Le digo que empuje la posicionion [0][0] ya que en esta estoy accediendo dentro de ambos corchetes creados asi solo empujo el corchete '{}'
                })              
            }     
        }
    }
    createUSDPrices(){
        for (let index = 0; index < this.arrayCoffeeListArray.length; index++) {
            this.element = this.arrayCoffeeListArray[index];
            if(this.element[0].Precio.charAt(0) == 'U' ||this.element[0].Precio.charAt(6) == 'U'){
                this.elements = this.element[0].Precio.split('U');               
                let marca:Array<any>= [this.element[0].Marca]
                let descripcion:Array<string> = [this.element[0].Descripcion]
                //Validating here that if the position 6 of the array contains the letter 'U' then take it as the second price else create only a normal price
                if(this.element[0].Precio.charAt(6) == 'U' || this.element[0].Precio.charAt(7) == 'U'){
                    cy.wrap(this.elements).then((txt:any)=>{
                        this.tempElement = marca.map(marca => new Array({ Marca: marca, Descripcion:descripcion[0], NormalPrice:'U'+txt[1], SantanderPrice:'U'+txt[2]}))
                        this.arrayOfUSDPrecios.push(this.tempElement[0][0]);
                     
                })
                }
                else if(this.element[0].Precio.charAt(6) !== 'U' && this.element[0].Precio.charAt(7) !== 'U'){
                    cy.wrap(this.elements).then((txt:any)=>{
                        this.tempElement = marca.map(marca => new Array({ Marca: marca, Descripcion:descripcion[0], NormalPrice:'U'+txt[1]}))
                        this.arrayOfUSDPrecios.push(this.tempElement[0][0]);

                })
                }          
        }   
     }
    
    }
    createNormalPrices(){
        for (let index = 0; index < this.arrayCoffeeListArray.length; index++) {
            this.element = this.arrayCoffeeListArray[index];
                if(this.element[0].Precio.charAt(3) != '$' && this.element[0].Precio.charAt(4) != '$' && this.element[0].Precio.charAt(7) !== 'U' ){                    
                    this.normalArr.push({Marca:this.element[0].Marca, Descripcion: this.element[0].Descripcion, NormalPrice:this.element[0].Precio})
                    }
        }
    }
    unifyArrays(arr1:Array<unknown>, arr2:Array<unknown>){
        this.newArrayCoffeeListArray =  this.newArrayCoffeeListArray.concat(arr1, arr2)
    }
    pushJson(JsonCallBack:string, currentArr:Array<any>){
        cy.writeFile(JsonCallBack, currentArr)
           
    }
     readJson(JsonCallBack:string, Asseertion1:string){
        cy.readFile(JsonCallBack).each((str:any)=>{
            cy.wrap(str).should(Asseertion1) 
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