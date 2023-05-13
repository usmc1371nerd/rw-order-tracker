import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./header.css"

function Header(props) {
  const navigate = useNavigate();





  const handleLogout = () => {
    localStorage.removeItem('token');
    props.setLoggedIn(false);
    navigate('/');


  }

  return (
    <header>
      <div>
       
        
      </div>
      <nav>
        <ul>
        <li>
            
            <Link to="/">Home</Link>
            
         
      </li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
