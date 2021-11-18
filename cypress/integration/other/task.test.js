/// <reference types="cypress" />

describe('Example of cy.task() command', () => {
  before(() => {
    cy.visit('https://www.google.com')
    cy.get('input').first().type('yandex{enter}')
  })

  it('', () => {
    cy.contains('yandex').first().click()
    cy.wait(5000)
  })

  it('', () => {
    cy.contains('yandex')
      .first()
      .invoke('attr', 'href')
      .then(href => {
        cy.task('setHref', href)
      })
  })

  it('', () => {
    cy.task('getHref').then(href => {
      cy.visit(href)
    })
  })

  //other examples with executing JS
  it('', () => {
    cy.task('log', 'This will be output to the terminal')
    cy.task('pause', 1000)
  })
})
