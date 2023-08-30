/// <reference types ="Cypress"/>
import *  as todoPage from "c:/Development/TodoMVC/cypress/Page-Objects/TodoPage";

describe('visual validation', () => {
    before(() => todoPage.navigate())

    it('should look good', () => {
        cy.eyesCheckWindow('empty todo list')

        todoPage.addTodo('Clean room')
        todoPage.addTodo('Learn JavaScript')

        cy.eyesCheckWindow('two todos')

        todoPage.toggleTodo(0)
    })
})
