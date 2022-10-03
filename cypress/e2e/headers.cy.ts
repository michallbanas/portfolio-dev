import { testData } from '../fixtures/testData'

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
    cy.get('h2').spread((main, blog, photo, about) => {
      expect(main).to.have.text('QA Engineer')
      expect(blog).to.have.text('Blog')
      expect(photo).to.have.text('Fotografia')
      expect(about).to.have.text('O mne')
    })

    const filtEle: string[] = []
    cy.get('h1, h2')
      .each($header => {
        expect($header).to.have.css('font-family', 'Raleway, sans-serif')
      })
      .filter('h2')
      .should('have.length', headersLength)
      .filter('.h-blog, .h-fotografia, .h-contact')
      .each($filteredElements => {
        filtEle.push($filteredElements.text())
        expect($filteredElements.text()).be.oneOf(sections)
      })
      .then(() => {
        expect(filtEle).to.deep.equal(sections)
      })
      .spread((blogElement, photoElement, contactElement) => {
        cy.wrap(sections).spread((blog, fotografia, oMne) => {
          cy.wrap(blogElement).invoke('text').should('deep.equal', blog)
          cy.wrap(photoElement).invoke('text').should('deep.equal', fotografia)
          cy.wrap(contactElement).invoke('text').should('deep.equal', oMne)
        })
      })
  })
})
