
export default class GntReConstructProducts{
    //Declaring private variables
    //Atributos de la clase
    // public datatestRaw:string = "cypress/fixtures/gntRawCoffeeProds.json" 
    public titleProduct:Array<string>=[];
    public productBrand:Array<string> =[];
    public priceProduct:Array<any>=[]; 
    public elements:any; 
    public arrayCoffeeListArray:Array<any> = [];
    public arrayOfPrecios:Array<any> =[];
    public arrayOfUSDPrecios:Array<any> =[];
    public newArrayCoffeeListArray:Array<any>=[];
    public normalArr:Array<any>=[];
    private element:any;
    private tempElement:any;
    public directory:Array<string> =[];
    public arrayOfdirectory:Array<string> =[];
    private currentnum:number =0;
    constructor(private rawJson:string){
        rawJson;
    }     
    readfile(Assertion1:string, Assertion2:string){
        cy.readFile(this.rawJson).then((str:any)=>{
            cy.wrap(str).should(Assertion1)
            this.productBrand = str[0]
            cy.wrap(this.productBrand).should(Assertion1, Assertion2);
            this.titleProduct = str[1]
            cy.wrap(this.titleProduct).should(Assertion1, Assertion2);
            this.priceProduct = str[2] 
            cy.wrap(this.priceProduct).should(Assertion1, Assertion2);
            this.directory= str[3]
            cy.wrap(this.directory).should(Assertion1, Assertion2);
        })   
    }
    public createArrNormalAndSantanderPrices():void{
        for (let index = 0; index < this.arrayCoffeeListArray.length; index++) {
            this.element = this.arrayCoffeeListArray[index];
            // let descripconx:string = this.element[0].Descripcion;
            //Aca le voy a pedir que si el caracter 4 existe y si ademas que existe es un signo de $ 
            if(this.element[0].Precio.charAt() == '$'){
                this.elements =  this.element[0].Precio.split('$')
                let marca:Array<any>= [this.element[0].Marca]
                let descripcion:Array<string> = [this.element[0].Descripcion]
                let directoryArr:Array<string> =[this.element[0].directory]

                if(this.element[0].Precio.charAt(2) === '$'|| this.element[0].Precio.charAt(3) === '$'||this.element[0].Precio.charAt(4) === '$'||this.element[0].Precio.charAt(5) === '$'
                        ||this.element[0].Precio.charAt(6) === '$' || this.element[0].Precio.charAt(7) === '$'){
                    cy.wrap( this.elements).then((txt:any)=>{
                        this.tempElement = marca.map(marca => new Array({ Marca: marca, Descripcion: descripcion[0], NormalPrice:'$'+txt[1], 
                                SantanderPrice: '$'+txt[2], Directory: directoryArr[0]}))
                                this.arrayOfPrecios.push(this.tempElement[0][0]); 
                                // if  (descripconx!== this.normalArr[0].Directory){
                                //     return this.normalArr=[];
                                // }
                    })
                    
                }
                
                else if(this.element[0].Precio.charAt(2) != '$'|| this.element[0].Precio.charAt(3) != '$'||this.element[0].Precio.charAt(4) != '$'||this.element[0].Precio.charAt(5) != '$'
                            ||this.element[0].Precio.charAt(6) != '$' || this.element[0].Precio.charAt(7) != '$'){
                    cy.wrap( this.elements).then((txt:any)=>{
                        this.tempElement = marca.map(marca => new Array({ Marca: marca, Descripcion: descripcion[0], 
                            NormalPrice:'$'+txt[1], Directory: directoryArr[0]}))
                        this.arrayOfPrecios.push(this.tempElement[0][0]); 
                        // Le digo que empuje la posicionion [0][0] ya que en esta estoy accediendo dentro de ambos corchetes creados asi solo empujo el corchete '{}'
                        // if  (descripconx!== this.normalArr[0].Directory){
                        //     return this.normalArr=[];
                        // }
                    })  
                    
                }             
            }     
           
        }
        
    }
    public createUSDPrices(): void{
        for (let index = 0; index < this.arrayCoffeeListArray.length; index++) {
            this.element = this.arrayCoffeeListArray[index];
            // cy.wrap(this.element[0].Precio).pause()
            if(this.element[0].Precio.charAt(0) == 'U' ){
                this.elements = this.element[0].Precio.split('U');               
                let marca:Array<any>= [this.element[0].Marca]
                let descripcion:Array<string> = [this.element[0].Descripcion]
                let directoryArr:Array<string> =[this.element[0].directory]
                //Validating here that if the position 6 of the array contains the letter 'U' then take it as the second price else create only a normal price
                if(this.element[0].Precio.charAt(5) == 'U' ||this.element[0].Precio.charAt(6) == 'U' || this.element[0].Precio.charAt(7) == 'U'){
                    cy.wrap(this.elements).then((txt:any)=>{
                        this.tempElement = marca.map(marca => new Array({ Marca: marca, Descripcion:descripcion[0], NormalPrice:'U'+txt[1], 
                        SantanderPrice:'U'+txt[2], Directory: directoryArr[0]}))
                        // cy.wrap(this.tempElement[0][0].Descripcion).pause()
                        // this.arrayOfUSDPrecios.push(this.tempElement[0][0])
                        this.arrayOfUSDPrecios.push(this.tempElement[0][0]);

                        // // if(this.tempElement[0][0].Descripcion === descripcion[0]){
                        //     this.currentnum++
                        //     while(this.currentnum <2){
                        //     }
                })
                }
                else if(this.element[0].Precio.charAt(5) !== 'U' && this.element[0].Precio.charAt(6) !== 'U' && this.element[0].Precio.charAt(7) !== 'U'){
                    cy.wrap(this.elements).then((txt:any)=>{
                        this.tempElement = marca.map(marca => new Array({ Marca: marca, Descripcion:descripcion[0], 
                            NormalPrice:'U'+txt[1], Directory: directoryArr[0] }))
                        this.arrayOfUSDPrecios.push(this.tempElement[0][0]);
                })
                }          
        }   
     }
    }
    // public createNormalPrices():void{
    //     for (let index = 0; index < this.arrayCoffeeListArray.length; index++) {
    //         this.element = this.arrayCoffeeListArray[index];
    //         let descripconx:string = this.element[0].Descripcion;

    //         // cy.wrap(this.element[0].directory).pause()
    //         // let directoryArr:Array<string> =[this.element[0].directory]
    //             if(this.element[0].Precio.charAt(2) != '$'&& this.element[0].Precio.charAt(3) != '$' && this.element[0].Precio.charAt(4) != '$'
    //                      && this.element[0].Precio.charAt(5)  != '$'  && this.element[0].Precio.charAt(6)  != '$' 
    //                       && this.element[0].Precio.charAt(7) !== 'U' ){                  
                           
    //                             this.normalArr.push({Marca:this.element[0].Marca, Descripcion: this.element[0].Descripcion, 
    //                                 NormalPrice:this.element[0].Precio, Directory: this.element[0].directory})
    //                                 //Avoid pusing twice the same element to the array
    //                                 if  (descripconx!== this.normalArr[0].Directory){
    //                                     return this.normalArr=[];
    //                                 }
    //                 }
    //     }
    // }
    unifyArrays(arr1:Array<any>, arr2:Array<any>){
        // console.log(arr1[0])
        // cy.wrap(arr1[0]).pause();
        // cy.wrap(arr1[0].descripcion).pause();
        cy.wrap(arr1).each((txt:any)=>{
            // cy.wrap(txt).pause()
            // expect(txt.Descripcion).to.not.have.string(arr2[0].Descripcion)
            // if(txt.Descripcion != arr2[0].Descripcion){
            //     cy.wrap(txt.Descripcion)
            //     this.newArrayCoffeeListArray = arr1.concat(arr2)

            // }
            cy.wrap(txt.Descripcion).should('to.not.string', arr2[0].Descripcion).then(()=>{
                this.newArrayCoffeeListArray = arr1.concat(arr2)

            })

            // })
            // cy.wrap(txt.Descripcion).should('not.have.string', arr2[0].Descripcion)
            // cy.wrap(arr2[0].Descripcion)
        })
    
        // if(arr1[0].Descripcion != arr2[0].Descripcion){
        //     this.newArrayCoffeeListArray = arr1.concat(arr2)
        // }
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