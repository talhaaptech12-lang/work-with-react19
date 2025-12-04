import Adduser from "./Adduser";
import "./App.css";
import DisplayUser from "./DisplayUser";
import { useState } from "react";
function App() {
const [User, setUser] = useState('')
 
  return (
    <div>
      <Adduser setUser={setUser} />
      <hr />
      <DisplayUser user={User}/>
      
    </div>
  );
}

export default App;
