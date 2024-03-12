import React from 'react';
import logo from "../assets/logo.png";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./nav.css";
import { Link, useNavigate } from "react-router-dom";


const Nav = () => {
  const isLoggedIn = document.cookie.includes('username'); 
  const navigate = useNavigate();
  const handleLogout = () => {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate('/');
  };

  return (
    <div className="nav-container">
      <Link to={"/"}><img src={logo} alt="Logo" className="nav-logo" /></Link>

      <TextField id="outlined-basic" label="Search any Conspiracy" variant="outlined" className="nav-search" />
      {isLoggedIn ? ( 
        <Button onClick={handleLogout} variant="outlined" color="primary" className="nav-button">Logout</Button>
      ) : ( 
        <Link to={"/login"}><Button variant="outlined" color="primary" className="nav-button">Login</Button></Link>
      )}
      <Link to={"/form"} className='Pages'><Button variant="contained" color="primary" className="nav-button">Add New</Button></Link>
    </div>
  );
}

export default Nav;
