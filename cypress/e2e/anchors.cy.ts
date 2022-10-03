describe('Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('social icon anchors should be visible and have attributes href, targer and rel', () => {
    cy.get('[data-cy="social-icons"]')
      .each(link => {
        expect(link).to.be.visible
        expect(link).to.have.attr('target', '_blank')
        expect(link).to.have.attr('rel', 'noopener noreferrer')
      })
      .spread((twitter, github, codepen, linkedIn) => {
        expect(twitter).to.have.attr('href').to.eq('https://twitter.com/michall_banas')
        expect(github).to.have.attr('href').to.eq('https://github.com/michallbanas')
        expect(codepen).to.have.attr('href').to.eq('https://codepen.io/michallbanas')
        expect(linkedIn).to.have.attr('href').to.eq('https://linkedin.com/in/michall-banas')
      })

    cy.checkLinksAreVisible({
      selector: '[data-cy="social-icons"]',
      expectedVisibleLinks: 4,
    })
  })

  it('should find buy me a coffee anchor and test if', () => {
    cy.get('[data-cy="bmc"]')
      .should('contain', 'Buy me a coffee')
      .invoke('attr', 'target')
      .should('eq', '_blank')
  })
})
