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

    cy.window()
      // @ts-expect-error
      .then(({ document, Cypress }) => { 
        cy.log(`This test is powered by Cypress ${Cypress.version}`)
        cy.log(`And it is running in ${Cypress.browser.displayName} ${Cypress.browser.version}`)
        cy.log(`Node version is ${Cypress.originalConfig.resolvedNodeVersion}`)
        cy.log(`The title of the page is ${document.title}`)
    })
  })
})
