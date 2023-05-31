import GntGlobalElements from "../globalElements/004.gntGlobalElements"
export default class SpecificPageElements extends GntGlobalElements{
    gntElements = {
        eachBox:()=> cy.get('div.styles__ProductItem-tbq658-3 > div:nth-child(3)'),
    }
}