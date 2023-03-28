/// <reference types="cypress" />
describe('Re convert products',()=>{
const datatestRaw:string = "cypress/fixtures/datatestRaw.json" 
const datatestGeant:string = "cypress/fixtures/datatestGeant.json" 
let productBrand:Array<string> =[];
let titleProduct:Array<string> =[]; 
let priceProduct:Array<any> =[]; 
let arrayCoffeeListArray:Array<any> =[];
let arrayOfPrecios:Array<any> =[];
let normalArr:Array<any>=[];
let elements:any; 
let newArrayCoffeeListArray:Array<any> =[];
    beforeEach('Bring products',()=>{
        cy.readFile(datatestRaw).then((str)=>{
            cy.wrap(str).should('not.be.empty');
            productBrand = str[0]
            cy.wrap(productBrand).should('not.be.empty');
            titleProduct = str[1]
            cy.wrap(titleProduct).should('not.be.empty');
            priceProduct = str[2]
            cy.wrap(priceProduct).should('not.be.empty');
        })
    })
    it('Convert array',()=>{ 
            cy.reCreateProduct(productBrand, elements, titleProduct, priceProduct, arrayCoffeeListArray)
            cy.wrap(arrayCoffeeListArray).should('not.be.empty')
        })
        it('convert array of normal prices and santander prices',()=>{
            for (let index = 0; index < arrayCoffeeListArray.length; index++) {
                let element:any = arrayCoffeeListArray[index];
                if(element[0].Precio.charAt(3) && element[0].Precio.charAt(3) === '$'  || element[0].Precio.charAt(4) === '$'){
                    elements = element[0].Precio.split('$')
                    cy.wrap(elements).then((txt)=>{
                        arrayOfPrecios.push({Marca:element[0].Marca, Descripcion: element[0].Descripcion, NormalPrice:'$'+txt[1], SantanderPrice: '$'+txt[2]})
                    })
                }     
            }
        })
        it('Check normal and santander prices',()=>{
            cy.log('modifications')
            cy.log('lets whattt hapeneded')
            cy.wrap(arrayOfPrecios)
            cy.wrap(arrayOfPrecios[0])
            cy.wrap(arrayOfPrecios[0].Marca)
            cy.wrap(arrayOfPrecios[0].Descripcion)
            cy.wrap(arrayOfPrecios[0].NormalPrice)
            cy.wrap(arrayOfPrecios[0].SantanderPrice)
        })
        it('get the normal prices',()=>{
            for (let index = 0; index < arrayCoffeeListArray.length; index++) {
                let element:any = arrayCoffeeListArray[index];
                    if(element[0].Precio.charAt(3) !== '$' && element[0].Precio.charAt(4) !== '$'  ){                    
                            normalArr.push({Marca:element[0].Marca, Descripcion: element[0].Descripcion, NormalPrice:element[0].Precio})
                        }
            }
            cy.wrap(normalArr)
            cy.wrap(normalArr[0].Marca)
            cy.wrap(normalArr[0].Descripcion)
            cy.wrap(normalArr[0].NormalPrice)
            cy.wrap(normalArr[10].Marca)
            cy.wrap(normalArr[10].Descripcion)
            cy.wrap(normalArr[10].NormalPrice)
        })
        it('Concat both arrays and check them', ()=>{
            newArrayCoffeeListArray =  newArrayCoffeeListArray.concat(arrayOfPrecios, normalArr)
            console.log(newArrayCoffeeListArray)
            cy.wrap(newArrayCoffeeListArray[0].Marca).should('not.be.empty');
            cy.wrap(newArrayCoffeeListArray[0].Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
            cy.wrap(newArrayCoffeeListArray[0].Descripcion).should('not.be.empty');
            cy.wrap(newArrayCoffeeListArray[0].NormalPrice).should('not.be.empty');
            cy.wrap(newArrayCoffeeListArray[0].NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
            cy.wrap(newArrayCoffeeListArray[0].SantanderPrice).should('not.be.empty');
            cy.wrap(newArrayCoffeeListArray[0].SantanderPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
            cy.wrap(newArrayCoffeeListArray[13].Marca).should('not.be.empty');
            cy.wrap(newArrayCoffeeListArray[13].Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
            cy.wrap(newArrayCoffeeListArray[13].Descripcion).should('not.be.empty');
            cy.wrap(newArrayCoffeeListArray[13].NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
        })
 
    it('push into new Json',()=>{
        cy.writeFile(datatestGeant, newArrayCoffeeListArray)
           cy.readFile(datatestGeant).then((str)=>{
           cy.wrap(str).should('not.be.empty')
          
       })
    })
})
