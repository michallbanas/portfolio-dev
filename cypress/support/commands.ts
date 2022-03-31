/// <reference types="cypress" />

export{}

Cypress.Commands.add('req', () => {
    return cy.log('Hello friend, you are testing michalbanas.dev with Cypress, enjoy it ♡')
})

declare global {
    namespace Cypress {
        interface Chainable {
            req(): Chainable<any>
        }
    }
}