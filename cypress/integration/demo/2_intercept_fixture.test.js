/// <reference types="cypress" />

const stubbedObject = describe('Spy and stub network responses', () => {
  beforeEach(function () {
    cy.fixture('stubbed.json').as('stubbed')
    cy.fixture('original.json').as('original')
    cy.visit('https://example.cypress.io/commands/aliasing')
  })

  it('spying', function () {
    cy.intercept('GET', '**/comments/*').as('getComment')

    cy.get('.network-btn').click()

    cy.wait('@getComment').its('response.body').should('deep.equal', this.original)
  })

  it('stubbing', function () {
    cy.intercept('GET', '**/comments/*', this.stubbed).as('getComment')

    cy.get('.network-btn').click()

    cy.wait('@getComment').its('response.body').should('deep.equal', this.stubbed)
  })
})
