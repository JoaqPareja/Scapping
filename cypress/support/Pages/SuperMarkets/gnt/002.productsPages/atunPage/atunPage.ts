import SpecificPageElements from "../../001.pageElements/specificPageElements/001.specificPageElements"

export default class AtunPage extends SpecificPageElements{
    public gntRawJson:string = 'cypress/fixtures/gntRawAtunProds.json'
    public gntNewJson:string ="cypress/fixtures/gntReConAtunProds.json"

    // cypress/fixtures/gntRawAtunProds.json/
    // elementsCoffePage= {
    //     eachBox:()=> cy.get('div.styles__ProductItem-tbq658-3 > div:nth-child(3)'),
    // }
}