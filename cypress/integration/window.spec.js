/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/window')
  })

  it('cy.window() - get the global window object', () => {
    // https://on.cypress.io/window
    cy.window()
      .then(() => {
        debugger
      })
      .should('have.property', 'top')
    cy.document()
      .then(el => {
        debugger
      })
      .should('have.property', 'charset')
      .and('eq', 'UTF-8')
    cy.title()
      .then(el => {
        debugger
      })
      .should('include', 'Kitchen Sink')
  })
})
