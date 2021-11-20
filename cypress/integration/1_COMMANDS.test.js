/// <reference types="cypress" />

describe('Cypress custom commands', () => {
  it('without cy.command', () => {
    cy.visit('http://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('[type=submit]').click()
    cy.contains('You logged into a secure area!')
    cy.get('a.button').should('be.visible')
  })

  it('with cy.command', () => {
    cy.login('tomsmith', 'SuperSecretPassword!')
  })

  it('custom commands to work with session storage', () => {
    // The read-only sessionStorage property accesses a session Storage object for the current origin.
    cy.setSessionStorage('token', 'abc123')
    cy.getSessionStorage('token').should('eq', 'abc123')
  })

  it('overwrited visit', () => {
    cy.visit('https://yandex.ru')
  })
})
