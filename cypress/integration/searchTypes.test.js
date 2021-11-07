describe('Examples of Selectors via WebdriverUni Contact Us Page', () => {
  beforeEach(() => {
    cy.visit('https://www.webdriveruniversity.com/')
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
  })

  it.only('Search for element by CSS & Xpath selectors', () => {
    //By id
    cy.get('#contact_me')

    // by tag name
    cy.get('input').first().type('this element was found by its tag')

    //By attribute name and value
    cy.get("input[name='last_name']").type('this element was found by attribute name and value')

    //By class
    cy.get('.feedback-input').eq(2).type('this_element_was_found_ by_class_name')

    //By xpath
    cy.xpath("//textarea[@name='message']").type(
      'Cypress allows you to use Xpath locators, but only in case "cypress-xpath" pacage installed',
    )

    //By two different attributes
    cy.get("[type='submit'][value='SUBMIT']")
  })
})
