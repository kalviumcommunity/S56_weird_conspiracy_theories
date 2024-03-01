
import React from 'react';
import logo from "../assets/logo.png";
import Button  from '@mui/material/Button';
import TextField  from '@mui/material/TextField';
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <img src={logo} alt="Logo" className="nav-logo" />
      <TextField id="outlined-basic" label="Search any Conspiracy" variant="outlined" className="nav-search" />
      <Button variant="outlined" color="primary" className="nav-button">Favourites</Button>
      <Button variant="contained" color="primary" className="nav-button">Add New</Button>
    </div>
  );
}

export default Nav;
