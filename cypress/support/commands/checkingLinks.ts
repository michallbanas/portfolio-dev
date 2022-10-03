/// <reference types="cypress" />

export const checkLinksAreVisible = ({
  selector,
  expectedVisibleLinks,
}: {
  selector: string
  expectedVisibleLinks?: number
}): Cypress.Chainable<any> =>
  cy
    .get(`${selector}`)
    .should('be.visible')
    .each(link => {
      expect(link).to.have.attr('href')
    })
    .its('length')
    .should('be.gte', expectedVisibleLinks)
