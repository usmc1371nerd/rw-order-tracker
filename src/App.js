import React, { useState}  from 'react';
import './App.css';
import Login from "../src/components/login"
import Order from "../src/components/order-form"
import Home from "../src/components/home"
import Register from "../src/components/register"


import { Route, Routes} from 'react-router';



function App() {
  return (
  
   
    <Routes>
      
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/order-form' element={<Order/>}/>
        <Route exact path='/register' element={<Register/>}/>
        
      
     
      
      
   </Routes>

    
  );
}

export default App;
