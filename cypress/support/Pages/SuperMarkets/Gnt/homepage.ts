import  Urls  from './urls';
let arrsss:unknown
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
    elements={
        eachBox:()=> cy.get('div.styles__ProductItem-tbq658-3 > div:nth-child(3)'),
        searchInput:()=> cy.get('.styles__Input-sc-157ulfq-1 > input:nth-child(1)'),
        seeAllProducts: ()=> cy.get('.styles__ResultsContainer-sc-1skad6n-3 > .jss3'),
        allProductsSections:()=> cy.get('.styles__ProductList-xnd9je-0'),
        pMarca:() => cy.get('div.styles__ProductItem-tbq658-3 > div:nth-child(3) > a:nth-child(3) > p:nth-child(1)'),
        h2:()=> cy.get('h2'),
        pPrice:()=> cy.get('div.styles__ProductItem-tbq658-3 > div:nth-child(3) > div:nth-child(4) > p:nth-child(1)'),
        imgSantander:()=> cy.get('div.styles__ProductItem-tbq658-3 > div:nth-child(3) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > img:nth-child(1)'),
        pPriceSantander:()=> cy.get('div.styles__ProductItem-tbq658-3 > div:nth-child(3) > div:nth-child(4) > div:nth-child(2) > p:nth-child(1)'),
        secondPPriceSantander:()=> cy.get('div.styles__ProductItem-tbq658-3 > div:nth-child(3) > div:nth-child(4) > div:nth-child(3) > p:nth-child(1)')
    }
    clickSeeAllProducts(){
        this.elements.seeAllProducts().click();
    }
    typeSearchInput($el: string){
        this.elements.searchInput().type($el)
    }
    storeProducts(){
        this.elements.eachBox().each(($el)=>{
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
    