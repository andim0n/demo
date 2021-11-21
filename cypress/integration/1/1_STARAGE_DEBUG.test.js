describe('', () => {
  it('custom commands to work with session storage', () => {
    // The read-only sessionStorage property accesses a session Storage object for the current origin.
    cy.setSessionStorage('token', 'abc123')
    cy.getSessionStorage('token').debug().should('eq', 'abc123')
  })
})
