 import React, {useState} from "react"
 
 
 
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
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email' id='email'></input>
        <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder='password' id='password'></input>
        <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder='password' id='password'></input>
        <button type='submit' >Create</button>
        </form>
   </div>
   )
}

export default Register