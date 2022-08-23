/// <reference types="cypress" />

const testData = {
  title: "| michal banaš",
  titleLength: 1,
  header: "QA Engineer",
  headersLength: 4,
  sections: ["Blog", "Fotografia", "O mne"]
}

describe('Test', () => {
  const { title, titleLength, header, headersLength, sections } = testData
  beforeEach(() => {
    cy.visit('/')
  })

  it('should find title in </head> element and verify the text', () => {
    cy.title().should('eq', 'Michal Banaš - QA Engineer')
  })

  it('should find h1 and check it has correct text', () => {
    cy.get('h1')
      .should('be.visible')
      .and('have.length', titleLength)
      .and('have.text', title)
      .and('have.attr', 'id', 'title')
  })

  it('should find subheading and check it has correct text', () => {
    cy.get('[data-cy="header"]')
      .should('be.visible')
      .and('have.text', header)
      .and('have.attr', 'class', 'header')
  })

  it('should find h1, h2, check if they are have font family Raleway', () => {
    cy.get('h1, h2')
      .each($header => {
        expect($header).to.have.css('font-family', 'Raleway, sans-serif')
      })
      .filter('h2')
      .should("have.length", headersLength)
      .filter('.h-blog, .h-fotografia, .h-contact')
      .each($filteredElements => {
        expect($filteredElements.text()).be.oneOf(sections)
      })
  })
})