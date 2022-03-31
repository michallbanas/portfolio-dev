/// <reference types="cypress" />

describe('Test', () => {
    beforeEach(() => {
        cy.req()
        cy.visit('/');
    });

    it('should find h1 and check it contains correct text', () => {
        cy.get('h1').as('title')
        cy.get('@title').should('be.visible')
                        .and('contain', 'michal banaš');
        cy.get('@title').should('have.attr', 'data-cy', 'title');
    })

    it('should find subheading and check it have correct text', () => {
        cy.get('[data-cy="heading"]').should('have.text', 'QA Engineer');
    })

    it('should find h1, h2, check if they are visible, not empty and have font family Raleway', () => {
        cy.get('h1, h2').as('headers')
        cy.get('@headers').each(($header) => {
            expect($header).to.be.visible
            expect($header).to.not.be.empty
            expect($header).to.have.css('font-family', 'Raleway, sans-serif');
        }) 
    })
})