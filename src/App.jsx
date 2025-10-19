
import { useRef } from 'react';
import './App.css'
import Counter from './Counter';
import Styling from './Styling';
import User from './user';



function App() {
const Talha=(name)=>{
  console.log(name)
}

const Haleema=()=>{
  console.log("Child")
}

  const userref = useRef();
  const paswrref = useRef();
  const formhandler=(event)=>{
event.preventDefault(); // is line s page reload nh hoga jb ham button pr click kregay submit k.
const user= document.querySelector("#user").value;
const password= document.querySelector("#password").value;

console.log(user, password)

  }
  const formhandler1=(event)=>{
    event.preventDefault();
    const user = userref.current.value;
    const pasword = paswrref.current.value;
    console.log(user, pasword)
  }
    // const[counter, setCounter]= useState(0)
    // const[data, setData]= useState(0)

    // const [display , setDisplay]=useState(true)

//     useEffect(()=>{
// CallOnce();

//     },[counter])
// function CallOnce(){
//     console.log("this is effect work");
    
// }
  return (
    <>
    {/* {
    display?<Counter Counter={counter} data={data} />:null
    }
    <button onClick={()=>setCounter(counter+1)}> counter {counter}</button>
    <button onClick={()=>setData(data+1)}> Data {data}</button>
    <button onClick={()=>setDisplay(!display)}> Toggle </button> */}

{/* <Styling/> */}

<form action="" onSubmit={formhandler}>
  <input id='user' type="text" placeholder='Enter YOur name' />
  <br /><br />
  <input id='password' type="password" placeholder='Enter YOur password' />
  <br />
  <button onClick={formhandler}>Submit</button>
</form>
<hr />
<form action="" onSubmit={formhandler1}>
  <input ref={userref} type="text" placeholder='Enter YOur name' />
  <br /><br />
  <input ref={paswrref} type="password" placeholder='Enter YOur password' />
  <br />
  <button>Submit</button>
</form>

<User Sir={Talha} name="talha" daughter={Haleema}/>
    </>
  )
}

 

export default App;

