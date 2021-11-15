describe('Handling JS Allerts and PopUps', () => {
  beforeEach(() => {
    // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
    cy.visit('https://www.webdriveruniversity.com/')
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })
  })

  it('Validate js confirm alert box works correctly when clicking OK', () => {
    cy.get('#button4').click()
    cy.on('window:confirm', () => {
      return true
    })
    cy.get('#confirm-alert-text').contains('You pressed OK!')
  })

  it('Validate js confirm alert box works correctly when clicking Cancel', () => {
    cy.get('#button4').click()
    cy.on('window:confirm', () => {
      return false
    })
    cy.get('#confirm-alert-text').contains('You pressed Cancel')
  })
})
