import React from 'react'
import TodoEdit from '../../components/todo-components/todoEdit'
import TodoList from '../../components/todo-components/todoList'

const Todo = () => {
  return (
    <div>
        <TodoList />
        <TodoEdit />
    </div>
  )
}

export default Todo