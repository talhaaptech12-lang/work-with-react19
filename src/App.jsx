import "./App.css";
import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);


  const submitHandler = (e) => {
    e.preventDefault()
    console.log(title)
    
    const copyTask = [...task];
    copyTask.push({title,detail});
console.log(copyTask)
    setTask(copyTask);
    setTitle('');
    setDetail('');
  };
  const deleteNote=(idx)=>{
    console.log("delete")
    const copyNote=[...task]
    copyNote.splice(idx, 1)
    setTask(copyNote)
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          onChange={(e) => {
            setTitle(e.target.value);
            console.log(e.target.value);

          }}
          value={title}
          type="text"
          placeholder="Enter Task"
        />

        <input
          onChange={(e) => {
            setDetail(e.target.value);
            console.log(e.target.value)
          }}
          value={detail}
          type="text"
          placeholder="Detail"
          
        />
        <button>click here</button>
      </form>
      <div>
        {task.map(function(elem, idx){
          return <div key={idx} className="notes">
            <h3>{elem.title}</h3>
            <p>{elem.detail}</p>
            <button onClick={()=>{
              deleteNote(idx)
            }} className="delete">Delete</button>
          </div>
      

    
        })}
      </div>
      </div>
      
  );
}

export default App;
