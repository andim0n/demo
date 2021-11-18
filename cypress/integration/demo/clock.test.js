describe('', () => {
  it('', () => {
    cy.visit('https://currentmillis.com/')

    cy.clock()
    cy.wait(1000)
    cy.tick(1111)
    cy.wait(1000)
    cy.tick(999999999)
    cy.wait(1000)
  })
})
