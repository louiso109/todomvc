/// <reference types="cypress" />
//before each is used to make the test run independantly of one another
//can also use after each reverse of this method
//copied prologue and runs before each test
describe('Todo actions', () => {
    beforeEach(() => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo', {timeout: 6000}).type('Clean room{enter}')
})


it('should add a new todo to the list', () => {

  
    cy.get('label').should('have.text', 'Clean room')
    cy.get('.toggle').should('not.be.checked')

  })

  it('should mark a todo as completed', () => {
    cy.get('.toggle').click()
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')

  })

  it('should clear completed todos', () => {
    //copied from test two instead of including in before each
    cy.get('.toggle').click()
   
    cy.contains('Clear completed').click()
  
    cy.get('.todo-list').should('not.have.descendants', 'li')

  })
})