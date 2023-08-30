import { before } from "mocha";
import { TodoPage, TodoPage } from "../../Page-Objects/TodoPage";

describe('todo-actions', () => {
const TodoPage = new TodoPage()

beforeEach(() => {
  TodoPage.navigate()

  TodoPage.addTodo('Clean room')
})

it('should add a new todo to the list', () => {
TodoPage.validateTodoText(0, 'Clean room')

TodoPage.validateToggleState(0, false)
})

describe('togglingtodos', () => {
it('should toggle test correctly', () => {
  TodoPage.toggleTodo(0)
  TodoPage.validateTodoCompletedState(0, true)
})

it('should clear completed', () => {
  TodoPage.toggleTodo(0)

  TodoPage.clearCompleted()

  TodoPage.validateNumberOfTodosShown(0)
})

})



})


