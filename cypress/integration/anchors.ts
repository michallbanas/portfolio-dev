/// <reference types="cypress" />

describe('Test', () => {
  beforeEach(() => {
    cy.req();
    cy.visit('/');
  });

  it('should find all anchor attributes and check if they have href attribute', () => {
    cy.get('a').each(($link) => {
      expect($link).to.have.attr('href');
    });
  });

  it('should find buy me a coffee anchor and test if', () => {
    cy.get('.mail-c')
      .should('contain', 'Buy me a coffee')
      .invoke('attr', 'target')
      .should('eq', '_blank');
  });
});
