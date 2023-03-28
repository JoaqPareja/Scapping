/// <reference types="cypress" />
describe('Re convert products',()=>{
const datatestRaw:string = "cypress/fixtures/datatestRaw.json" 
const datatestGeant:string = "cypress/fixtures/datatestGeant.json" 
let productBrand:Array<string> =[];
let titleProduct:Array<string> =[]; 
let priceProduct:Array<any> =[]; 
let arrayCoffeeListArray:Array<any> =[];
let arrayOfPrecios:Array<any> =[];
let arrayOfUSDPrecios:Array<any> =[];
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
                if(element[0].Precio.charAt(3) && element[0].Precio.charAt(3) === '$'  || element[0].Precio.charAt(4) === '$' ){
                    elements = element[0].Precio.split('$')
                    cy.wrap(elements).then((txt)=>{
                        arrayOfPrecios.push({Marca:element[0].Marca, Descripcion: element[0].Descripcion, NormalPrice:'$'+txt[1], SantanderPrice: '$'+txt[2]})
                    })
                }     
            }
        })
        it('Check normal and santander prices',()=>{
            cy.wrap(arrayOfPrecios).each((txt:any)=>{
                cy.wrap(txt).should('not.be.empty');
                cy.wrap(txt.Marca).should('not.be.empty');
                cy.wrap(txt.Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
                cy.wrap(txt.Descripcion).should('not.be.empty');
                cy.wrap(txt.NormalPrice).should('not.be.empty');
                cy.wrap(txt.NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
                cy.wrap(txt.SantanderPrice).should('not.be.empty');
                cy.wrap(txt.SantanderPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
            })
        })
        it('Get the USD prices', ()=>{
            for (let index = 0; index < arrayCoffeeListArray.length; index++) {
                let element:any = arrayCoffeeListArray[index];
                if(element[0].Precio.charAt(7) == 'U'){
                    elements = element[0].Precio.split('U');
                    cy.wrap(elements).then((txt)=>{
                    arrayOfUSDPrecios.push({Marca:element[0].Marca, Descripcion: element[0].Descripcion, NormalPrice:'U'+txt[1], SantanderPrice:'U'+txt[2]})
                })
            }
        }
        })
        it('Check USD prices',()=>{
            cy.wrap(arrayOfUSDPrecios).each((txt:any)=>{
                cy.wrap(txt).should('not.be.empty');
                cy.wrap(txt.Marca).should('not.be.empty');
                cy.wrap(txt.Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
                cy.wrap(txt.Descripcion).should('not.be.empty');
                cy.wrap(txt.NormalPrice).should('not.be.empty');
                cy.wrap(txt.NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
                cy.wrap(txt.SantanderPrice).should('not.be.empty');
                cy.wrap(txt.SantanderPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
            })

        })
        it('get the normal prices and Check the normal prices',()=>{
            for (let index = 0; index < arrayCoffeeListArray.length; index++) {
                let element:any = arrayCoffeeListArray[index];
                    if(element[0].Precio.charAt(3) !== '$' && element[0].Precio.charAt(4) !== '$' && element[0].Precio.charAt(7) !== 'U' ){                    
                            normalArr.push({Marca:element[0].Marca, Descripcion: element[0].Descripcion, NormalPrice:element[0].Precio})
                        }
            }
            cy.wrap(normalArr).each((txt:any)=>{
                cy.wrap(txt).should('not.be.empty');
                cy.wrap(txt.Marca).should('not.be.empty');
                cy.wrap(txt.Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
                cy.wrap(txt.Descripcion).should('not.be.empty');
                cy.wrap(txt.NormalPrice).should('not.be.empty');
                cy.wrap(txt.NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
            })
        })
        it('Concat both arrays and check them', ()=>{
            newArrayCoffeeListArray =  newArrayCoffeeListArray.concat(normalArr,arrayOfPrecios,arrayOfUSDPrecios)
            console.log(newArrayCoffeeListArray)
            cy.wrap(newArrayCoffeeListArray).each((txt:any)=>{
                cy.wrap(txt).should('not.be.empty');
                cy.wrap(txt.Marca).should('not.be.empty');
                cy.wrap(txt.Marca).should('not.contain', '1234567890!@#$%^&*()_+=')
                cy.wrap(txt.Descripcion).should('not.be.empty');
                cy.wrap(txt.NormalPrice).should('not.be.empty');
                cy.wrap(txt.NormalPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
                if(txt.SantanderPrice){
                    cy.log('santander price exist')
                    cy.wrap(txt.SantanderPrice).should('not.be.empty');
                    cy.wrap(txt.SantanderPrice).should('not.contain', 'abcdefghijklmnñopqrstuvwxyz')
                }
            })
        })
    it('push into new Json',()=>{
        cy.writeFile(datatestGeant, newArrayCoffeeListArray)
           cy.readFile(datatestGeant).then((str)=>{
           cy.wrap(str).should('not.be.empty')         
       })
    })
})
