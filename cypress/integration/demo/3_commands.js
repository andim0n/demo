/// <reference types="cypress" />

describe('Cypress custom commands', () => {
  // best practice to deal with PO
  // https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/#final-thoughts
  it('As a user I should be able to log in', () => {
    cy.login('tomsmith', 'SuperSecretPassword!')
  })

  // it('commands to work with session storage', () => {
  //   // The read-only sessionStorage property accesses a session Storage object for the current origin.
  //   cy.setSessionStorage('token', 'abc123')
  //   cy.getSessionStorage('token').should('eq', 'abc123')
  // })

  // it('overwrited visit', () => {
  //   cy.visit('https://yandex.ru')
  // })
})
