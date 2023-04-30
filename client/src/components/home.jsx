import React from 'react'
import './home.css'
import Username from './username'
import Login from './login'
import { useState } from 'react'

const home = (props) => {
  const isLoggedIn = props.username ? true : false;

  return (
   
    <div>
         <div>
         {isLoggedIn ? <Username username={props.username} />: <p></p>}
      </div>
        <div className="title">
       <h1>Welcome to R&W Wholesale please login </h1> 
       </div>
       
       <div className="login-btn">
         <a href="./login"><button>Login</button></a>
       </div>
      
      
        
        </div>
  )
}

export default home