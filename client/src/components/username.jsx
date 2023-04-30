import React, {useState} from 'react';

function Username(props) {

 return (
    <div>
      <p>Welcome, {props.username}!</p>
      
      <button onClick={props.handleLogout}>Logout</button>
  

    </div>
  );

  
}

export default Username;





