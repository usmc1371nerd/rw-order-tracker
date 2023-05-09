 import React, {useState} from "react"
 import "./register.css"
 
 
 
 const Register = ()=> {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {  
      e.preventDefault();
      console.log(email);
      console.log(password);
    }
   return (
    <div>
    <h1>Register</h1>


 
        <form onSubmit={handleSubmit}>
          <label>
          Username:
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='email'></input>
        </label>
        <label>
          Password:  
        <input value={password} onChange={(e) => setPassword(e.target.value)}type="password"  id='password'></input>
        </label>
        <label>
          Password:
        <input value={password} onChange={(e) => setPassword(e.target.value)}type="password"  id='password'></input>
        </label>
        <button type='submit' >Create</button>
        </form>
   </div>
   )
}

export default Register