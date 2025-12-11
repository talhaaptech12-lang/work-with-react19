import React from 'react'
import { useState } from 'react'



const TodoForm = ({addTodo}) => {
    const  [value, setValue] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(value){
            addTodo(value)
            setValue('')
        }
    }
    
  return (
    <div>
        <form action="" onSubmit={handleSubmit} className='TodoForm'>
            <input className='TodoInput' type="text" value={value}  onChange={(event)=>setValue(event.target.value)} placeholder='Enter your task'/>
            <button type='submit' className='TodoBtn'>Add Task</button>
        </form>
    </div>
  )
}

export default TodoForm