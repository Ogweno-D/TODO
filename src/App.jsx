import { useState } from 'react'
import './styles.css'
import { NewTodoForm } from './newTodoForm'

export default function App() {
// const [newItem, setnewItem] = useState("")
//const [todos, setnewTodos] = useState("")
const [todos, setnewTodos] = useState([])

function addTodo(title){
  setnewTodos( currentTodos=> {
    return [
    ...currentTodos, {
      id:crypto.randomUUID(), title, completed:false
    },
  ]
})
}

// function handleSubmit(e) {
//   e.preventDefault()
//   setnewTodos( currentTodos=> {
//     return [
//     ...currentTodos, {
//       id:crypto.randomUUID(), title:newItem, completed:false
//     },
//   ]
// })
// setnewItem("")
// }
function toggleTodo(id,completed) {
  setnewTodos(currentTodos =>
    {
      return currentTodos.map(
        todo => {
          if(todo.id===id)
          return {
            ...todo, completed
          }
          return todo
        }
      )
    }  
  ) 
}

function deleteTodo(id){
  setnewTodos(currentTodos => {
    return currentTodos.filter ( 
      todo => todo.id !== id)
  })
}
  return (
    <>
    <NewTodoForm onSubmit={addTodo}  />
    {/* <form onSubmit={handleSubmit} className="new-item-form">
      <div className='form-row'>
        <label htmlFor="item"> New Item</label>
        <input value={newItem} 
        onChange={ e => setnewItem ( e.target.value)} 
         type="text" />
      </div>
    <button className='btn'>Add</button>
    </form> */}
    <h1 className='header'> To do Items</h1>
    <ul className='list'>
      {todos.length === 0 && "No todos"}
      {todos.map(todo => {
        return ( 
        <li key={todo.id}>
          <label >
          <input 
            type="checkbox" checked={todo.completed} 
            onChange= {e => toggleTodo(todo.id, e.target.checked)}
            />

            {todo.title}
          </label>
          <button
          onClick={() => deleteTodo(todo.id) }
          className='btn btn-danger'>Delete</button>
        </li>)
      })}
    </ul>

    </>
  )
}