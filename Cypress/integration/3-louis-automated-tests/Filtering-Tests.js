/// <reference types="cypress" />

//tests are independant as before each method is run before each test
describe('Filtering', () => {
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
//there are three items in the list
        cy.get('.new-todo',).type('Clean room{enter}')
        cy.get('.new-todo',).type('Learn JavaScript{enter}')
        cy.get('.new-todo',).type('Use Cypress{enter}')

//goes to the second list item and toggle.click
        cy.get('.todo-list li:nth-child(2) .toggle').click()

    })

//independant test for filtering by uncompled todos
    it('should filter "Active" todos'), () => {
        cy.contains('Active').click()

        cy.get('.todo-list li').should('have.length',2)
    }

//independant test for filtering by completed todos
    it('should filter "Completed" todos'), () => {
        cy.contains('Completed').click()

        cy.get('.todo-list li').should('have.length',1)
    }

//independant test for filtering by all todos
    it('should filter "All" todos'), () => {
        cy.contains('All').click()

        cy.get('.todo-list li').should('have.length',3)
    }

})