import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./login.css"
import Header from "./header"
import Register from './register';


const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  console.log(username)
  console.log(password)

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', {username, password})

      .then(response => {
        // handle the successful login here
        console.log("logged in successfully");
        history(`/order-form?username=${username}`);
      })
      .catch(error => {
        // handle the login error here
        console.log(error);
      });
  };

  return (
    <div>
 <Header/>
   
    <form onSubmit={handleLogin} className='form'>
      <label className='user-name'>
        Username:
        <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      
      <label className='user-password'>
        Password:
        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      
      <button type="submit">Login</button>
      <h4>if you have not registered please register a username and password below </h4>
    </form>
    <div className='register'> 

    <Register/>

    </div>
   
    </div>
  );
};

export default Login;
