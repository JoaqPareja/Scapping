/// <reference types="cypress" />
import {homePageGeant} from '../../../support/Pages/SuperMarkets'

const datatest = process.env.jsonFile;
describe('Get the page information',()=>{

    it('Store the page information', ()=>{
        homePageGeant.visitHomepage();
        homePageGeant.typeSearchInput('Cafe');
        homePageGeant.clickSeeAllProducts();
        homePageGeant.storeEachPMarca();
        homePageGeant.storeEachH2();
        homePageGeant.storeEachPPrice();
        homePageGeant.pushIntoCoffeeListArray();
        homePageGeant.writefile();
     })
     it('check json', ()=>{
        cy.readFile(datatest).then((str)=>{
            cy.wrap(str).pause()
            cy.wrap(str[0]).pause()
            cy.wrap(str[0][1]).pause()
            cy.wrap(str[1]).pause()

            cy.wrap(str[0].ProductBrand)
        })
     })
})


