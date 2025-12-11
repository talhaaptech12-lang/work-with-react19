import React from 'react'
import { useState } from 'react';
function EditTodoForm({editTodo, task}) {
  const [value, setValue] = useState(task.task)

  const handleSubmit=(e)=>{
    e.preventDefault();
    editTodo(value, task.id)
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

export default EditTodoForm