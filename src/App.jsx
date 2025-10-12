
import { useState } from 'react'
import './App.css'
import Counter from './Counter';
import User from './user';


function App() {
  const [display, setDisplay]= useState(false)
  const [count, setCounter] = useState(0)
  let array1 =["ali", "haleema"]
  
  // let name = "haleema"
  // let path="https://media.istockphoto.com/id/1322104312/photo/freedom-chains-that-transform-into-birds-charge-concept.webp?s=2048x2048&w=is&k=20&c=ZUWO0obdgqfvcSFLGFPJdcLR7Sg6X05fuAxSnAYPtM0="
  
  // const[vege,setvegetable]=useState("aloo");
  // const handlevegetables=()=>{
  //   setvegetable("ladyfinger")
  // }
  // const fruits=(name)=>{
  
  //   return name
  // }
  // const fruits1=(name)=>{
  
  //   alert(name)
  // }
  // function sum(a,b,operator){
  //   if (operator=="+"){
  //     return a+b;
  //   }
  //   else{
  //     return a*b
  //   }
  // }

  return (
    <>
{/* <h1>={sum(10,10,"+")}</h1>
<h1>{name?name:"user not found"}</h1>
<img id="image" src={path} alt=""  />
<h1>{fruits("ali")}</h1>
<button onClick={()=>fruits1("talha")}>click me</button>
    
    <h1>{vege}</h1>
<button onClick={handlevegetables}>change vegetable name</button>
<Counter /> */}
{
// display? <h1>talha</h1>:<h1>this nothing</h1>
display?<User/>:<h1>this is nothing</h1>

}
<button onClick={()=>setDisplay(!display)}>toggle button</button>
<p>below work is multiple condition uses hen we can use ternary operators in this way</p> 
<h1>{count}</h1>
<button onClick={()=>{setCounter(count+2)}}>SetCounter button</button>
{count==0?<h4>Condition = 0</h4>:
count==2?<h4>Condition = 2</h4>:
count==4?<h4>Condition = 4</h4>:
count==6?<h4>Condition = 6</h4>:
<h4>Other Conditions</h4>

}
<User name={array1[1]}/>
    </>
  )
}

 

export default App;

