/// <reference types="cypress" />

context('Example of cy.task() command', () => {
    it('task with JS promise', () => {
        cy.task('log', 'This will be output to the terminal')
        cy.task('pause', 1000)
    })

    it.skip('you can not browse two origin', () => {
        cy.visit('https://www.google.com')
        cy.get('.gLFyf').type(`yandex{enter}`)
        cy.get('.yuRUbf a').first().click()
        cy.wait(5000)
    })

    it('but you can invoke href with task', () => {
        cy.visit('https://www.google.com')
        cy.get('.gLFyf').type(`yandex{enter}`)
        cy.get('.yuRUbf a')
            .first()
            .invoke('attr', 'href')
            .then((href) => {
                cy.task('setHref', href)
            })
    })

    it('and visit it', () => {
        cy.task('getHref').then((href) => {
            cy.visit(href)
        })
    })
})
