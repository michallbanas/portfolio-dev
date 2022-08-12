/// <reference types="cypress" />

describe('Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should find title in </head> element and verify the text', () => {
    cy.title().should('eq', 'Michal Banaš - QA Engineer')
  })

  it('should find h1 and check it has correct text', () => {
    cy.get('h1')
      .should('be.visible')
      .and('have.length', 1)
      .and('have.text', '| michal banaš')
      .and('have.attr', 'id', 'title')
  })

  it('should find subheading and check it has correct text', () => {
    cy.get('[data-cy="header"]')
      .should('be.visible')
      .and('have.text', 'QA Engineer')
      .and('have.attr', 'class', 'header')
  })

  it('should find h1, h2, check if they are have font family Raleway', () => {
    cy.get('h1, h2')
      .should('have.length', 5)
      .each($header => {
        expect($header).to.have.css('font-family', 'Raleway, sans-serif')
      })
      .filter('.h-blog, .h-fotografia, .h-contact')
      .each($filteredElements => {
        const filteredHeaders = ['Blog', 'Fotografia', 'O mne']
        expect($filteredElements.text()).be.oneOf(filteredHeaders)
      })
  })
})