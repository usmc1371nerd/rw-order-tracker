import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', {username, password})

      .then(response => {
        // handle the successful login here
        console.log(response);
        history('/');
      })
      .catch(error => {
        // handle the login error here
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
