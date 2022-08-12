/// <reference types="cypress" />

describe('Social media icons', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should find social media icons bar and check if it is visible', () => {
    cy.get('[data-cy="ul-social"]').should('be.visible').find('li').should('have.length', 4)
  })

  it('should find social media icons and check if they have correct attributes', () => {
    cy.get('[data-cy="social-icons"]').as('socialIcons')
    cy.get('@socialIcons').should('have.attr', 'target', '_blank')
    cy.get('@socialIcons').should('have.attr', 'rel', 'noopener noreferrer')
    cy.get('@socialIcons').invoke('attr', 'href').should('contain', 'https')
  })
})
