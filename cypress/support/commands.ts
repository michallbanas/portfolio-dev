import { checkLinksAreVisible } from "./commands/checkingLinks"

export {}
declare global {
  namespace Cypress {
    interface Chainable {
      checkLinksAreVisible: typeof checkLinksAreVisible
    }
  }
}

Cypress.Commands.add("checkLinksAreVisible", checkLinksAreVisible)
