describe("Test", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should find all images and check if they have width, height and alt attribute", () => {
    cy.get("img").each(($img) => {
      expect($img).to.have.attr("alt").not.empty
      expect($img).to.have.attr("width")
      expect($img).to.have.attr("height")
    })
  })

  it("should find images in gallery and check if they have attribute lazy loading", () => {
    cy.get('[data-cy="img"]').should("have.attr", "loading", "lazy")
  })
})
