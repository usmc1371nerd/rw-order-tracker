import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const history = useNavigate();
  
  // clear the user's session or token here

  history('/login');
  
  return (
    <div>
      <p>You have been logged out.</p>
    </div>
  );
};

export default Logout;