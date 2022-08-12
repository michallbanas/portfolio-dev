import './commands'

export {};

declare global {
    namespace Cypress {
        interface Window {
            Cypress: any
        }
    }
}