import  Urls  from './urls';
export default class HomePageGeant extends Urls {
    productBrand:Array<unknown> =[];
    titleProduct:Array<unknown> =[]; 
    priceProduct:Array<unknown> =[]; 
    arrayCoffeeListArray:Array<unknown> =[]; ;
    datatestRawGeant:string = 'cypress/fixtures/datatestRaw.json'
    tryElement:unknown; 
    constructor(){
        super();  
    }
    elementsHPGnt={
        eachBox:()=> cy.get('div.styles__ProductItem-tbq658-3 > div:nth-child(3)'),
        searchInput:()=> cy.get('.styles__Input-sc-157ulfq-1 > input:nth-child(1)'),
        seeAllProducts: ()=> cy.get('.styles__ResultsContainer-sc-1skad6n-3 > .jss3'),
    }
    clickSeeAllProducts(){
        this.elementsHPGnt.seeAllProducts().click();
    }
    typeSearchInput($el: string){
        this.elementsHPGnt.searchInput().type($el)
    }
    storeProducts(){
        this.elementsHPGnt.eachBox().each(($el)=>{
            cy.wrap($el).within(($element)=>{
                cy.wrap($element).find('a > p').then((response: { text: () => string;})=>{
                    this.productBrand.push(response.text())       
            })
            cy.wrap($element).find('a > h2').then((response: { text: () => string;})=>{
                this.titleProduct.push( response.text())
            })
            cy.wrap($element).find('div > p').then((response: { text: () => string;})=>{
                this.priceProduct.push(response.text())
            })  
        })
    });
            return  this.arrayCoffeeListArray.push( this.productBrand, this.titleProduct, this.priceProduct)
}   
        writefile(){
            cy.writeFile(this.datatestRawGeant, this.arrayCoffeeListArray)

        }
    }
    