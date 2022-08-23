/// <reference types="Cypress" />

describe('Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it.skip('social links req', () => {
    cy.get('[data-cy="social-icons"]')
      .each(($a) => {
        const href = $a.prop('href')
        const ariaLabel = $a.attr('aria-label')
        cy.request({
          url: href,
          followRedirect: false,
          failOnStatusCode: false
        })
          .then(({ status }) => {
            cy.log(`Media: ${ariaLabel} - Response status: ${status}`)
      })
    })
  })

  it('social links', () => {
    cy.get('[data-cy="social-icons"]').each(link => {
      cy.wrap(link).should('have.attr', 'href').and('contain', 'https://')
      cy.wrap(link).should('have.attr', 'target', '_blank')
      cy.wrap(link).should('have.attr', 'rel', 'noopener noreferrer')
    }) 
    cy.get('a').filter('[target="_blank"]').each(link => {
      expect(link).to.have.attr('href').contain('https://')
    })
    cy.get('h1, h2').filter('[data-cy]').spread((h1, h2) => {
      expect(h1).to.have.attr('data-cy', 'title')
      expect(h2).to.have.attr('data-cy', 'header')
      expect(h2).to.have.attr('lang', 'en')
    })
  })

  it('should find buy me a coffee anchor and test if', () => {
    cy.get('[data-cy="bmc"]')
      .should('contain', 'Buy me a coffee')
      .invoke('attr', 'target')
      .should('eq', '_blank')
  })
})