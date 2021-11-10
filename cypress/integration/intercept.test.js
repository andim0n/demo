/// <reference types="cypress" />

context('Intercepting with alias', () => {
  it('intercept with alias', () => {
    cy.visit('https://example.cypress.io/commands/aliasing')

    const stubbedObject = { customKey: 'TEST VALUE' }
    // Alias the route to wait for its response
    cy.intercept('GET', '**/comments/*', stubbedObject).as('getComment')

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    cy.get('.network-btn').click()

    // https://on.cypress.io/wait
    cy.wait('@getComment')
      // .its('response.statusCode').should('eq', 200)
      .its('response.body')
      .should('deep.equal', stubbedObject)
  })

  it('intercept with fixture', () => {
    cy.visit('https://example.cypress.io/commands/files')

    // https://on.cypress.io/intercept

    // Instead of writing a response inline you can
    // use a fixture file's content.

    // when application makes an Ajax request matching "GET **/comments/*"
    // Cypress will intercept it and reply with the object in `example.json` fixture
    cy.intercept('GET', '**/comments/*', { fixture: 'example.json' }).as('getComment')

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    cy.get('.fixture-btn').click()

    cy.wait('@getComment')
      .its('response.body')
      .should('have.property', 'name')
      .and('include', 'Using fixtures to represent data')
  })

  it('cy.intercept() - route responses to matching requests', () => {
    cy.visit('https://example.cypress.io/commands/network-requests')

    // https://on.cypress.io/intercept

    let message = 'whoa, this comment does not exist'

    // Listen to GET to comments/1
    cy.intercept('GET', '**/comments/*').as('getComment')

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    cy.get('.network-btn').click()

    // https://on.cypress.io/wait
    cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304])

    // Listen to POST to comments
    cy.intercept('POST', '**/comments').as('postComment')

    // we have code that posts a comment when
    // the button is clicked in scripts.js
    cy.get('.network-post').click()
    cy.wait('@postComment').should(({ request, response }) => {
      expect(request.body).to.include('email')
      expect(request.headers).to.have.property('content-type')
      expect(response && response.body).to.have.property('name', 'Using POST in cy.intercept()')
    })

    // Stub a response to PUT comments/ ****
    cy.intercept(
      {
        method: 'PUT',
        url: '**/comments/*',
      },
      {
        statusCode: 404,
        body: { error: message },
        headers: { 'access-control-allow-origin': '*' },
        delayMs: 500,
      },
    ).as('putComment')

    // we have code that puts a comment when
    // the button is clicked in scripts.js
    cy.get('.network-put').click()

    cy.wait('@putComment')

    // our 404 statusCode logic in scripts.js executed
    cy.get('.network-put-comment').should('contain', message)
  })
})
