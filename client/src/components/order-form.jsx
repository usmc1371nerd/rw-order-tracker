import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ username }) => {
  const history = useNavigate();
  
  const handleLogout = () => {
    history('/');
  }
  
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>Order form goes here.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Order;

// Order for needs to submit the order to 2 different emails
// 1 email is the standing order
// 2 email is the event/wedding orders
