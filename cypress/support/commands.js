/// <reference types="cypress" />

Cypress.Commands.add('req', () => {
    cy.request({
        method: 'GET',
        url: '/'
    })
    .then((response) => {
        const [status, server, date] = [response.status, response.headers.server, response.headers.date];
        cy.log(`**Response status: ${status}**`);
        cy.log(`Server: ${server}`);
        cy.log(`Date: ${date}`);
    })
})

