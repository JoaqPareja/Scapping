/// <reference types="cypress" />
import {homePageGeant} from '../../../support/Pages/SuperMarkets'

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
})