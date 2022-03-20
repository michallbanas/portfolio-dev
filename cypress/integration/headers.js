/// <reference types="cypress" />

describe('Test', () => {
    beforeEach(() => {
        cy.req()
        cy.visit('/');
    });

    it('should find h1, h2, check if they are visible, not empty and have font family Raleway', () => {
        cy.get('h1, h2').as('headers')
        cy.get('@headers').each(($header) => {
            expect($header).to.be.visible
            expect($header).to.not.be.empty
            expect($header).to.have.css('font-family', 'Raleway, sans-serif');
        }) 
    })
})