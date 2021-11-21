/// <reference types="cypress" />

describe('Time control', () => {
  it('Overrides native global functions related to time', () => {
    cy.visit('https://currentmillis.com/').pause()
    // The clock starts at the unix epoch (timestamp of 0)
    cy.clock()

    // Move the clock the specified number of milliseconds.
    // Any timers within the affected range of time will be called.
    cy.tick(1111)

    cy.tick(999999999)

    cy.clock().then(clock => {
      clock.restore()
    })
  })
})
