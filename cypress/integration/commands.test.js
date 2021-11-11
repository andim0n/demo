context('Cypress custom commands', () => {
  it('commands to work with session storage', () => {
    // The read-only sessionStorage property accesses a session Storage object for the current origin.
    cy.setSessionStorage('token', 'abc123')
    cy.getSessionStorage('token').should('eq', 'abc123')
  })

  it('overwrited visit', () => {
    cy.visit('https://yandex.ru', { search: true, timeout: 10000 })
  })

  it('overwrited visit', () => {
    cy.visit('https://yandex.ru', {})
  })
})
