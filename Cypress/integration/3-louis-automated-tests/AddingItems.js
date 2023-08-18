/// <reference types="cypress" />

it('should be able to add a new item to the list', () => {

    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo', {timeout: 3000}).type("Clean room{enter}")

    cy.get('.toggle').click()

    cy.contains('clear completed').click()
})