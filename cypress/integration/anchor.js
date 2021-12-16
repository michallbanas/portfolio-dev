/// <reference types="cypress" />


const links = ['a']

describe('Test', () => {
    it('should find all anchor attributes', () => {
        links.forEach(link => {
                cy.visit('/')
                cy.get(link)
                    .should('be.visible') // assert that element is visible
                    .should('have.attr', 'target', '_blank') // assert that element has attribute
                    .and('not.be.empty') // assert that element has content
                cy.get(link)
                    .should('have.attr', 'href')
                    .and('include', 'http')
        })
    })
})