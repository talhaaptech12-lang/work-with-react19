

import { useState } from 'react';
import './App.css'
import College from './College';
import { SubjectContext } from './context';


function App() {
const [Subject, setSubject]=useState(' ')

  return (
    <div style={{backgroundColor: "grey", height: "90vh", color:"white", padding: 10}}>
     <SubjectContext.Provider value={Subject}>
<select defaultValue={Subject} onChange={(event)=>setSubject(event.target.value)}>
  <option value="">Select Subject</option>
  <option value="Maths">Maths</option>
  <option value="Urdu">Urdu</option>
  <option value="Science">Science</option>
</select>

<button onClick={()=>setSubject("")}>Clear Subject</button>

<h1>Context API</h1>

      <College/>
     </SubjectContext.Provider>
     
      

    </div>
  )


}

export default App;

