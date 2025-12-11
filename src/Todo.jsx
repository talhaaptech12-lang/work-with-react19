import React from 'react'



function Todo({task, deletTodo,editTodo, toggleComplete}) {
  return (
    <div className='todo'>
        <p id='para' className={`${task.completed? 'completed': 'incompleted'}`} onClick={()=>toggleComplete(task.id)}>{task.task}</p>
        <div>
        <button className='Delete-btn' onClick={()=>deletTodo(task.id)}>Delete</button>
        <button className='Edit-btn' onClick={()=>editTodo(task.id)}>Edit</button>
        </div>
        </div>
  )
}

export default Todo