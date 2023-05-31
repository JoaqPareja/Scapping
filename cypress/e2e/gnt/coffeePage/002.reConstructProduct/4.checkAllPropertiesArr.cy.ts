/// <reference types="cypress" />
import {gntCoffePageElements} from '../../../../support/Pages/SuperMarkets'

describe('Concat both arrays and check them', ()=>{
    let arrayTepm:Array<string>=[];
    beforeEach('Get products',()=>{
        cy.readFile(gntCoffePageElements.gntNewJson).then((data)=>{
            arrayTepm = data;
        })
    })
        it('Check Marca', ()=>{       
            cy.wrap(arrayTepm).each((txt:any)=>{  
                    cy.wrap(txt.Marca).should('not.be.null')
            })
        })
        it('Check Description',()=>{
            cy.wrap(arrayTepm).each((txt:any)=>{    
                cy.wrap(txt.Descripcion).should('not.be.null')
            })
        })
        it('Check  Normal Price', ()=>{
            cy.wrap(arrayTepm).each((txt:any)=>{
                cy.wrap(txt.NormalPrice).should('not.be.null')
                cy.wrap(txt.NormalPrice).should('contain','$')
                cy.wrap(txt.NormalPrice).should('not.include','abcdefghijklmnñopqrstuvwxyz')
      
            })
        })
        it('Check SantanderPrice', ()=>{
            cy.wrap(arrayTepm).each((txt:any)=>{    
            if(txt.SantanderPrice){
                cy.log('Santander price does exist')
                cy.wrap(txt.SantanderPrice).should('not.be.null')
                cy.wrap(txt.SantanderPrice).should('contain','$')
                cy.wrap(txt.SantanderPrice).should('not.include','abcdefghijklmnñopqrstuvwxyz')
                // expect(txt.SantanderPrice).to.not.be.null;
                // expect(txt.SantanderPrice).to.include('$')
                // expect(txt.SantanderPrice).to.not.contain.value('abcdefghijklmnñopqrstuvwxyz')
            }
            else{
                cy.log('The property Santander price does Not exist')
            }
       
        })
       
    })
 
    })