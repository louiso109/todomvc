/// <reference types="cypress" />

// it.only is a feature of mocha that runs only that test
// the second test is dependant on the first test
// the third test is dependant on the first and second tests

  it.only('should add a new todo to the list', () => {
    //prologue
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo', {timeout: 6000}).type('Clean room{enter}')
  
    cy.get('label').should('have.text', 'Clean room')
    cy.get('.toggle').should('not.be.checked')

  })

  it('should mark a todo as completed', () => {
    cy.get('.toggle').click()
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')

  })

  it('should clear completed todos', () => {
    cy.contains('Clear completed').click()
  
    cy.get('.todo-list').should('not.have.descendants', 'li')

  })