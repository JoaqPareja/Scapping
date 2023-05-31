import SpecificPageElements from "../../001.pageElements/specificPageElements/001.specificPageElements"

export default class CoffeePage extends SpecificPageElements{
    public gntRawJson:string = 'cypress/fixtures/gntRawCoffeeProds.json'
    public gntNewJson:string = 'cypress/fixtures/gntReConCoffeeProds.json'

    // elementsCoffePage= {
    //     eachBox:()=> cy.get('div.styles__ProductItem-tbq658-3 > div:nth-child(3)'),
    // }
}