
import { json } from 'stream/consumers';
import  Urls  from './urls';

export default class HomePageGeant extends Urls {
    productBrandArray:Array<string> =[];
    titleProductArray:Array<string> =[]; 
    priceProductArray:Array<string> =[]; 
    arrayCoffeeListArray:Array<unknown> =[]; ;
    datatest:string = '../fixtures/datatest'
    constructor(){
        super();  
    }
    elements={
        searchInput:()=> cy.get('.styles__Input-sc-157ulfq-1 > input:nth-child(1)'),
        seeAllProducts: ()=> cy.get('.styles__ResultsContainer-sc-1skad6n-3 > .jss3'),
        allProductsSections:()=> cy.get('.styles__ProductList-xnd9je-0'),
        pMarca:() => cy.get('div.styles__ProductItem-tbq658-3 > div:nth-child(3) > a:nth-child(3) > p:nth-child(1)'),
        h2:()=> cy.get('h2'),
        pPrice:()=> cy.get('div.styles__ProductItem-tbq658-3 > div:nth-child(3) > div:nth-child(4) > p:nth-child(1)'),
        
    }
    clickSeeAllProducts(){
        this.elements.seeAllProducts().click();
    }
    typeSearchInput($el: string){
        this.elements.searchInput().type($el)
    }

    storeEachPMarca(){   
        this.elements.pMarca().each((response: { text: () => string; })=>{
            this.productBrandArray.push(response.text());          
        })
    }
    storeEachH2(){  
        this.elements.h2().each((response: { text: () => string; })=>{
            this.titleProductArray.push(response.text());
        })
    }
    storeEachPPrice(){
        this.elements.pPrice().each((response: { text: () => string; })=>{
        this.priceProductArray.push(response.text());
        })
    }
    pushIntoCoffeeListArray(){
        this.arrayCoffeeListArray.push(this.productBrandArray, this.titleProductArray, this.priceProductArray)
       
    }
   writefile(){
            cy.writeFile('../fixtures/datatest', this.arrayCoffeeListArray)
 
   }
   
}



