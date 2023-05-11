import { useEffect, useState } from "react"
import { NewItemForm } from "./NewItemForm"
import { TodoList } from "./TodoList"

export default function App() {
  const [todos, setTodos] =useState(() => {
    const localValue = localStorage.getItem('ITEMS')
    if(localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id, completed) {
    setTodos(prev => {
      return prev.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed
          }
        }
        return todo
      })
    })
  }

  function addTodo(title) {
    setTodos(prev => {
      return [
        ...prev,
        {
          id: crypto.randomUUID(),
          title,
          completed: false
        }
      ]
    })
  }

  function deleteTodo(id) {
    setTodos(prev => {
      return prev.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewItemForm onSubmit={addTodo}/>
      <h1 className="list-title">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}