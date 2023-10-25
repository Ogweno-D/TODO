/* eslint-disable react/prop-types */
import { useState } from "react"

export function NewTodoForm({onSubmit}){
 const [newItem,setnewItem] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
    //     setnewTodos( currentTodos=> {
    //       return [
    //       ...currentTodos, {
    //         id:crypto.randomUUID(), title:newItem, completed:false
    //       },
    //     ]
    //   })
    if (newItem === "" ) return

    onSubmit(newItem)

      setnewItem("")
    }
    

    return (
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className='form-row'>
        <label htmlFor="item"> New Item</label>
        <input value={newItem} 
        onChange={ e => setnewItem ( e.target.value)} 
         type="text" />
      </div>
    <button className='btn'>Add</button>
    </form>
    )

    
}