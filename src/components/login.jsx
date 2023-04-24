import React from 'react'
import { useState} from "react"


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {  
    e.preventDefault();
    console.log(email);
    console.log(password);
  
  
  }


  return (
    <div>
 
 <a href="/"><button>Home</button></a>   

<h1>Login</h1>
<form onSubmit={handleSubmit}>
<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email' id='email'></input>
<input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder='password' id='password'></input>
<button type='submit' >Login</button>
<div className="register">

Not registered yet? <a href="./register">Register</a>

</div>





</form>

      
    
    
    
    </div>
  
  )
}

export default Login

// can be either employee or customer at start 
// eventually need to change to employee or customer login
//or add employee or customer model to datadase and it can check and return status


