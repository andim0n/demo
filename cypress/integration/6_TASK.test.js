/// <reference types="cypress" />

describe('Execute code in Node via the task plugin event.', () => {
  before(() => {
    cy.task('seedDatabase')
  })

  after(() => {
    cy.task('resetDatabase')
  })

  it('The task plugin event handler logs message and returns null', () => {
    cy.task('hello', { greeting: 'Hello', name: 'World' })
  })

  it('Return a Promise from an asynchronous task', () => {
    cy.task('pause', 1000)
  })
})
