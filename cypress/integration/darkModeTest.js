/// <reference types="cypress" />

// Test Collection

describe('Basic michalbanas.dev test', () => {
    
    // First test

    it('should check if dark mode is working', () => {
        cy.visit('/')
          cy.get('body').then(($body) => {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches){
                expect($body[0].attributes[0].value).to.eq('light-theme dark-theme')
            }
        })
    })
})