/// <reference types="cypress" />
import {homePageGeant} from '../../../support/Pages/SuperMarkets'

describe('Get the page information',()=>{
    it('Store the page boxes information', ()=>{
        homePageGeant.visitHomepage();
        homePageGeant.typeSearchInput('Cafe');
        homePageGeant.clickSeeAllProducts();
        homePageGeant.storeProducts();
        // homePageGeant.checkArray();
        homePageGeant.writefile(); 
    })

})