import SpecificPageElements from "../../001.pageElements/specificPageElements/001.specificPageElements"

export default class WinePage extends SpecificPageElements{
    public gntRawJson:string = 'cypress/fixtures/gntRawWineProds.json'
    public gntNewJson:string ="cypress/fixtures/gntReConWineProds.json"

    // elementsCoffePage= {
    //     eachBox:()=> cy.get('div.styles__ProductItem-tbq658-3 > div:nth-child(3)'),
    // }
}