import React from 'react'
import './home.css'






const Home = ({username}) => {

  
  return (
   
    <div>  
      <h1>{username}</h1>

      
        <div className="title">
       <h1>Welcome to R&W Wholesale please login </h1> 
       </div>
       
       <div className="login-btn">
         <a href="./login"><button>Login</button></a>
       </div>
      
      
        
        </div>
  ); 
}

export default Home