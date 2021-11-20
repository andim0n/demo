/// <reference types="cypress" />

describe('Request', () => {
  it('save response in the shared test context', () => {
    cy.request('https://jsonplaceholder.cypress.io/users')
      .its('body')
      .its('0')
      .as('user')
      .then(function () {
        cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
          userId: this.user.id,
          title: 'Cypress Test Runner',
          body: 'Fast, easy and reliable testing for anything that runs in a browser.',
        })
          .its('body')
          .as('post')
      })
      .then(function () {
        expect(this.post, 'post has the right user id').property('userId').to.equal(this.user.id)
      })
  })
})
