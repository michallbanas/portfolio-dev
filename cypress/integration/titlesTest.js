/// <reference types="cypress" />

// First test

describe('Test', () => {
    it('should find h1, h2, check if they are visible and not empty and have css font raleway', () => {
        cy.visit('/')
        const titles = ['h1', 'h2']
        titles.forEach(title => {
            cy.get(title)
                .should('be.visible') // assert that element is visible
                .and('not.be.empty') // assert that element has content

                .should('have.css', 'font-family') // assert that element has css property
                .and('match', /Raleway, sans-serif/) // assert that element has css property with value  
        })
    })
})