/// <reference types="cypress" />

it('should add a new todo to the list', () => {
    cy.visit('https://www.calculator.net/')

    cy.get('[onclick="r(1)"]').click()
    cy.get('#sciout > tbody > :nth-child(1) > td > :nth-child(1)')

})