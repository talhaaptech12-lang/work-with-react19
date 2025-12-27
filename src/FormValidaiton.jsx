import React from "react";
import { useState } from "react";
export const FormValidaiton = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [err, setErr] = useState(false)
    const [passErr, setPassErr] = useState(false)

    const emailHandler=(e)=>{
        console.log(e.target.value)
        let element = e.target.value;
        if(element.length < 3){
            console.log('enter mm')
            setErr(true)
        }else{
            setErr(false)
        }
        setEmail(element)

    }

const passwordHandler=(e)=>{
        console.log(e.target.value)

        let element = e.target.value;
        if(element.length < 5){
            console.log('enter mm')
            setPassErr(true)
        }else{
            setPassErr(false)
            
        }
        setPassword(element)
}
    const loginForm=(e)=>{
        if(email.length < 3 || password.length < 5){
            alert("invalid credentials")
        }else{
            alert('thanks')
        }
        e.preventDefault();
    }
  return (
    <div>
      <h1>FormValidaiton</h1>
      <form onSubmit={loginForm}>
        <input type="text" placeholder="Enter your Email" onChange={emailHandler} />
        <br />  
        {
            err?<span>Minimum 3 letters are required !</span>:<span></span>
        }
      <br />
      <br />
      <input type="text" placeholder="Enter your Password" onChange={passwordHandler} />
      <br />
       {
            passErr?<span>Minimum 3 letters are required !</span>:<span></span>
        }
      <br />
      <br />
      <button type="submit">Click For Submit</button>
      </form>
    </div>
  );
};
