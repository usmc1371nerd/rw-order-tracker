import React from 'react';
import './App.css';
import Login from "./components/login"
import Order from "./components/order-form"
import Home from "./components/home"
import Register from "./components/register"



import { Route, Routes, useLocation} from 'react-router';



function App() {
  const location = useLocation();
  const username = new URLSearchParams(location.search).get('username');
  return (
  
   
    <Routes>
      
        <Route exact path='/' element={<Home username={username}/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/order-form' element={<Order username={username}/>}/>
        <Route exact path='/register' element={<Register/>}/>
        
      
     
      
      
   </Routes>

    
  );
}

export default App;
