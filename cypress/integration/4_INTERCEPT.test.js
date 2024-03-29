/// <reference types="cypress" />

describe('Spy and stub network responses', () => {
  before(function () {
    cy.fixture('stubbed.json').as('stubbed')
    cy.fixture('original.json').as('original')
  })

  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/aliasing')
  })

  it('spying', function () {
    cy.intercept('GET', '**/comments/*').as('getComment')

    cy.get('.network-btn').click()

    cy.wait('@getComment').its('response.body').should('deep.equal', this.original)
  })

  it('stubbing', function () {
    const stubbed = { customKey: 'TEST VALUE' }

    cy.intercept('GET', '**/comments/*', stubbed).as('getComment')

    cy.get('.network-btn').click()

    cy.wait('@getComment').its('response.body').should('deep.equal', stubbed)
  })
})
