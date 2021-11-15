const loginPage = require('../pages/login')

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getSessionStorage', key => {
  cy.window().then(window => window.sessionStorage.getItem(key))
})

Cypress.Commands.add('setSessionStorage', (key, value) => {
  cy.window().then(window => {
    window.sessionStorage.setItem(key, value)
  })
})

Cypress.Commands.add('login', (username, password) => {
  cy.visit(loginPage.url)
  cy.get(loginPage.input.name).type(username)
  cy.get(loginPage.input.password).type(password)
  cy.get(loginPage.button.submit).click()
  cy.contains(loginPage.message)
  cy.get(loginPage.button.logout).should('be.visible')
})

Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  cy.log(options)
  const domain = Cypress.env('BASE_DOMAIN')
  if (url !== domain) url = domain
  return originalFn(url, options)
  // if (options.search) {
  //   url = domain
  // }

  // if (options.timeout > 5000) {
  //   options.timeout = 5000
  // }

  // originalFn is the existing `visit` command that you need to call
  // and it will receive whatever you pass in here.
  //
  // make sure to add a return here!
})
