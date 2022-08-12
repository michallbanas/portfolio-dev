/// <reference types="Cypress" />

describe('Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('social links req', () => {
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
  })

  it('should find buy me a coffee anchor and test if', () => {
    cy.get('.mail-c')
      .should('contain', 'Buy me a coffee')
      .invoke('attr', 'target')
      .should('eq', '_blank')
  })
})
