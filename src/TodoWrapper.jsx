import React from 'react'
import TodoForm from './TodoForm'
import { useState } from 'react'
import EditTodoForm from './EditTodoForm'
import Todo from './Todo'

const TodoWrapper = () => {

   const [todos, setTodos] = useState([])
   const addTodo=(todo)=>{
setTodos([
  ...todos, {id: Date.now(), task:todo, completed:false, isEditing: false }
])
   }

   // delete todo
    const deletTodo= (id) => setTodos(todos.filter((todo)=> todo.id!==id));

    // completed todo
   const toggleComplete=(id)=>{
    setTodos(
      todos.map((todo)=> todo.id === id ? {...todo, completed:!todo.completed}: todo)
    )
   }
// edit todo
const editTodo=(id)=>{
  setTodos(
    todos.map((todo)=> todo.id === id? {...todo,isEditing:!todo.isEditing}: todo)
  )
}
// edit todo task
const editTask=(task, id)=>{
  setTodos(
    todos.map((todo)=> todo.id === id? {...todo,isEditing:!todo.isEditing}: todo)
  )

}
  return (
    <div className='TodoWrapper'>
        <h1>To Do Web</h1>
        <TodoForm addTodo={addTodo}/>
{todos.map((todo)=>todo.isEditing?(
  <EditTodoForm editTodo={editTask} task={todo}/>

): (< Todo task={todo} deletTodo={deletTodo} toggleComplete={toggleComplete} editTodo={editTodo}/>





))}
    </div>
  )
}

export default TodoWrapper