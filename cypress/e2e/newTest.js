function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

export function placepickerSelectorTravel(searchField = "destination", cityName = "Dublin", destFromRow = "0") {
  cy.log(`Add new ${searchField}`)
  cy.get(
    `[data-test=SearchFieldItem-${searchField}]
          [data-test='PlacePickerInputPlace-close']`,
  ).click()
  cy.get(`[data-test=SearchFieldItem-${searchField}]`).type(cityName, { delay: 500 })
  cy.get(`[data-test="PlacePickerRow-wrapper"]:eq(${destFromRow})`).scrollIntoView().click()
}

Cypress.Commands.add("requestCheckUrl", ({ selector, href, statusCode = 200 } ) => {
  cy.request({
    url: Cypress.config("baseUrl") + href,
  }).should(({ status }) => {
    expect(status).to.eq(statusCode)
  })
  cy.get(selector).scrollIntoView().click()
  cy.url().should("contain", href)
})

    cy.get(`[data-test='PictureCard']:eq(${getRandomNum(10)})`)
      .then($pictureCard => {
        const href = $pictureCard.attr("href")
        cy.requestCheckUrl({ selector: $pictureCard, href: href, statusCode: 200 })
      })
      