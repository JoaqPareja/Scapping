

/// <reference types="cypress" />
// import { gntAtunPageElements, gntStoreProducts} from "../../../../support/Pages/SuperMarkets"

context('Get the imgs url', ()=>{
    let currentnumber:number = 0;
    let testResponse:any;
    beforeEach('', ()=>{
        currentnumber=  + 1;
        cy.readFile(`cypress/downloads/CoffeDownloads/Coffe29.jpg`, 'base64').then((response)=>{
            // cy.wrap(response).pause()
            testResponse = response
        })
    })

    it('readd', ()=>{
        cy.wrap(testResponse)
        console.log(testResponse)
        // cy.readFile(`cypress/downloads/CoffeDownloads`)

        // cy.readFile(`cypress/downloads/CoffeDownloads/Coffe${currentnumber}.jpg`).each((response)=>{
        //     cy.wrap(response).pause()
        // })
    })
})