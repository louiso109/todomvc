export class TodoPage {
 navigate() {
  cypress.visit('http://todomvc-app-for-testing.surge.sh/')
 } 

 addTodo(todoText) {
  cy.get('.new-todo').type(todoText + '{enter}')
 }

 toggleTodo(TodoIndex) {
  cy.get('.todo-list li:nth-child(${todoIndex +1}) .toggle').click()
 }

 showOnlyCompletedTodos() {
  cy.contains('Completed').click()
 }

 showOnlyActiveTodos() {
  cy.contains('Active').click()
 }

 showAllTodods() {
  cy.contains('All').click()
 }

 clearCompleted() {
  cy.contains('clear completed').click()
 }

 validateNumberOfTodosShown(expectedNumberOfTodos) {
  cy.get('.todo-list-li').should('have.length', expectedNumberOfTodos)
 }

 validateTodoCompletedState(todoIndex, shouldBeCompleted) {
  const l = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)

  l.should(`${shouldBeCompleted ? '' : 'not.'}have.css`, 'text-decoration-line', 'line-through')
 }

validateTodotext(todoIndex, expectedText) {
cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText)

}

validateToggleState(todoIndex, shouldBeTogged) {
  const label = cy.get(` .todo-list li:nth-child(${todoIndex + 1}) label`)

  label.should(`${shouldBeTogged ? '' : 'not.'}be.checked`)
}

}