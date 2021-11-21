/// <reference types="cypress" />

describe('Define custom commands', () => {
  it('Do not write like this', () => {
    cy.visit('http://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('[type=submit]').click()
    cy.contains('You logged into a secure area!')
    cy.get('a.button').should('be.visible')
  })

  it('Make your tests more readable', () => {
    cy.login('tomsmith', 'SuperSecretPassword!')
  })
})
