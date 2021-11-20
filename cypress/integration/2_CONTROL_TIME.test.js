/// <reference types="cypress" />

describe('desc block', () => {
  it('Overrides native global functions related to time', () => {
    cy.visit('https://currentmillis.com/')

    // The clock starts at the unix epoch (timestamp of 0)
    cy.clock()
    cy.wait(1000)

    // Move the clock the specified number of milliseconds.
    // Any timers within the affected range of time will be called.
    cy.tick(1111)
    cy.wait(1000)

    cy.tick(999999999)
    cy.wait(1000)
  })
})
