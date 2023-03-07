/// <reference types="cypress" />
import {homePageGeant} from '../../support/Pages/SuperMarkets'

let allProductsSections:string = '.styles__ProductList-xnd9je-0';
let productBrandArray:Array<unknown> =[];
let titleProductArray:Array<unknown> =[]; 
let priceProductArray:Array<unknown> =[]; 
let arrayCoffeeListArray:Array<unknown> =[];
let pMarca =  'div.styles__ProductItem-tbq658-3 > div:nth-child(3) > a:nth-child(3) > p:nth-child(1)';
let h2 ='h2';
let pPrice = 'div.styles__ProductItem-tbq658-3 > div:nth-child(3) > div:nth-child(4) > p:nth-child(1)';
describe('Get the page information',()=>{

    it('Store the page information', ()=>{
        homePageGeant.visitHomepage();
        homePageGeant.typeSearchInput('Cafe');
        homePageGeant.clickSeeAllProducts();

        cy.get(allProductsSections)
            .each(function(box){
                cy.wrap(box).within(function() {
                        cy.get(pMarca)
                                .each((response: { text: () => string; })=>{
                                    productBrandArray.push(response.text());
                        })
                        cy.get(h2).each((response: { text: () => string; })=>{
                            titleProductArray.push(response.text());
                        })
                        cy.get(pPrice)
                            .each((response: { text: () => string; })=>{
                                priceProductArray.push(response.text());
                        })
                        arrayCoffeeListArray.push(productBrandArray)
                        arrayCoffeeListArray.push(titleProductArray)
                        arrayCoffeeListArray.push(priceProductArray)        
                })          
})

})
})


