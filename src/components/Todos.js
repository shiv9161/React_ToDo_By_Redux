import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {
  const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    console.log(todos)
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} style={{}}>
          <p>{todo.text}</p>
          <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default Todos
