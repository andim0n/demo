//// <reference types="cypress" />

/// JSON fixture file can be loaded directly using
// the built-in JavaScript bundler
const requiredExample = require('../../fixtures/example.json')

context('Files', () => {
  before(() => {
    cy.visit('https://example.cypress.io/commands/files')

    // load example.json fixture file and store
    // in the test context object
    cy.fixture('example.json').as('example')
  })

  it('cy.fixture() or require - load a fixture', function () {
    // we are inside the "function () { ... }"
    // callback and can use test context object "this"
    // "this.example" was loaded in "beforeEach" function callback
    expect(this.example, 'fixture in the test context').to.deep.equal(requiredExample)

    // or use "cy.wrap" and "should('deep.equal', ...)" assertion
    cy.wrap(this.example).should('deep.equal', requiredExample)
  })

  it('cy.readFile() - read file contents', () => {
    // https://on.cypress.io/readfile

    // You can read a file and yield its contents
    // The filePath is relative to your project's root.
    cy.readFile('cypress.json').then(json => {
      expect(json).to.be.an('object')
    })
  })

  it('cy.writeFile() - write to a file', () => {
    // https://on.cypress.io/writefile

    // You can write to a file

    // Use a response from a request to automatically
    // generate a fixture file for use later
    cy.request('https://jsonplaceholder.cypress.io/users').then(response => {
      cy.writeFile('cypress/fixtures/users.json', response.body)
    })

    cy.fixture('users').should(users => {
      expect(users[0].name).to.exist
    })

    // JavaScript arrays and objects are stringified
    // and formatted into text.
    cy.writeFile('cypress/fixtures/profile.json', {
      id: 8739,
      name: 'Jane',
      email: 'jane@example.com',
    })

    cy.fixture('profile').should(profile => {
      expect(profile.name).to.eq('Jane')
    })
  })
})
