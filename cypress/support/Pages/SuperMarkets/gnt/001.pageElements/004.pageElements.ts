import HomePage from "./003.homepage"
export default class PageElements extends HomePage{
    gntElements = {
        eachBox:()=> cy.get('div.styles__ProductItem-tbq658-3 > div:nth-child(3)'),
    }
}