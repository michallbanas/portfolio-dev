describe("Test", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Buy me a coffee button", () => {
    cy.log("Buy me a coffee button should have correct attributes")
    cy.get("[data-cy='bmc']").should((attributes) => {
      expect(attributes).to.have.attr("href", "https://www.buymeacoffee.com/michallbanas")
      expect(attributes).to.have.attr("target", "_blank")
      expect(attributes).to.have.attr("rel", "noopener noreferrer")
    })

    cy.log("Buy me a coffee button should have correct text")
    cy.get("[data-cy='bmc']")
      .should("be.visible")
      .then((button) => {
        const cleanText = button.text().replace(/\s+/g, " ").trim()
        return cleanText
      })
      .and("eq", "Buy me a coffee")

    cy.log("Buy me a coffee image should have correct alt text")
    cy.get("[data-cy='bmc'] img").should("have.attr", "alt", "link to buy a coffee")
  })

  it("Mail button", () => {
    cy.log("Mail button should have correct attributes")
    cy.get("[data-cy='mail']").should((attributes) => {
      expect(attributes).to.have.attr("href", "mailto:banas.michal@icloud.com")
      expect(attributes).to.have.attr("rel", "noopener noreferrer")
    })

    cy.log("Mail button should have correct text")
    cy.get("[data-cy='mail']")
      .should("be.visible")
      .then((button) => {
        const cleanText = button.text().replace(/\s+/g, " ").trim()
        return cleanText
      })
      .and("eq", "Good old mail")

    cy.log("Mail image should have correct alt text")
    cy.get("[data-cy='mail'] img").should("have.attr", "alt", "link to send an email")
  })
})
