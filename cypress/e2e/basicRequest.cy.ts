/// <reference types="Cypress" />

describe('Test', () => {
    beforeEach(() => {
      cy.visit('/')
    })

it('should make a request with basic info', () => {
    cy.request('/')
      .then(({ status, statusText }) => {
        cy.log(`Response status: ${status}`)
        cy.log(`Response statusText: ${statusText}`)
    })
  })
})