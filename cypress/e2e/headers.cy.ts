import { testData } from "../fixtures/testData"

describe("Test", () => {
  const { title, titleLength, header, headersLength, sections } = testData
  beforeEach(() => {
    cy.visit("/")
  })

  it("should find title in </head> element and verify the text", () => {
    cy.title().should("eq", "Michal Banas - QA Engineer")
  })

  it("should find h1 and check it has correct text", () => {
    cy.get("h1")
      .should("be.visible")
      .and("have.length", titleLength)
      .and("have.text", title)
      .and("have.attr", "id", "title")
  })

  it("should find subheading and check it has correct text", () => {
    cy.get('[data-cy="header"]')
      .should("be.visible")
      .and("have.text", header)
      .and("have.attr", "class", "header")
  })

  it("should find h1, h2, check if they are have font family Raleway", () => {
    cy.get("h2").spread((main, project, photo, about) => {
      expect(main).to.have.text("QA Engineer")
      expect(project).to.have.text("Projects")
      expect(photo).to.have.text("Photography")
      expect(about).to.have.text("About me")
    })

    const filtEle: string[] = []
    cy.get("h1, h2")
      .each(($header) => {
        const font = $header.css("font-family")
        expect(font).to.contain("Raleway")
        expect(font).to.contain("sans-serif")
      })
      .filter("h2")
      .should("have.length", headersLength)
      .filter(".h-blog, .h-fotografia, .h-contact")
      .each(($filteredElements) => {
        filtEle.push($filteredElements.text())
        expect($filteredElements.text()).be.oneOf(sections)
      })
      .then(() => {
        expect(filtEle).to.deep.equal(sections)
      })
      .spread((projectElement, photoElement, contactElement) => {
        cy.wrap(sections).spread((projects, photography, about) => {
          cy.wrap(projectElement).invoke("text").should("deep.equal", projects)
          cy.wrap(photoElement).invoke("text").should("deep.equal", photography)
          cy.wrap(contactElement).invoke("text").should("deep.equal", about)
        })
      })
  })
})
