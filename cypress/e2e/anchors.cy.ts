describe('Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('request', () => {
    cy.request('/')
    .then(({ status, statusText }) => {
      cy.log(`Response status: ${status}`)
      cy.log(`Response statusText: ${statusText}`)
    }).then(response => {
      expect(response.body).to.contain('Michal')
    })

    cy.window().then(({ document, Cypress }) => {
      cy.log(`This test is powered by Cypress ${Cypress.version}`)
      cy.log(`And it is running in ${Cypress.browser.displayName} ${Cypress.browser.version}`)
      cy.log(`Node version is ${Cypress.originalConfig.resolvedNodeVersion}`)
      cy.log(`The title of the page is ${document.title}`)
    })
  })

  it('social links', () => {
    cy.get('[data-cy="social-icons"]').each(link => {
      cy.wrap(link).should('have.attr', 'href').and('contain', 'https://')
      cy.wrap(link).should('have.attr', 'target', '_blank')
      cy.wrap(link).should('have.attr', 'rel', 'noopener noreferrer')

      cy.get('[data-cy="social-icons"]').each(($a) => {
        const href = $a.prop('href')
        cy.log(href)
        cy.request({
          url: href,
          failOnStatusCode: false
        }).its('status').should('eq', 200)
      })
    }) 
  })

  it('should find buy me a coffee anchor and test if', () => {
    cy.get('.mail-c')
      .should('contain', 'Buy me a coffee')
      .invoke('attr', 'target')
      .should('eq', '_blank')
  })
})
