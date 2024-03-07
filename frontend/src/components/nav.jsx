
import React from 'react';
import logo from "../assets/logo.png";
import Button  from '@mui/material/Button';
import TextField  from '@mui/material/TextField';
import "./nav.css";
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div className="nav-container">
      <Link to={"/"} ><img src={logo} alt="Logo" className="nav-logo" /></Link>
      
      <TextField id="outlined-basic" label="Search any Conspiracy" variant="outlined" className="nav-search" />
      <Button variant="outlined" color="primary" className="nav-button">Favourites</Button>
      <Link to={"/form"} className='Pages'><Button variant="contained" color="primary" className="nav-button">Add New</Button></Link>
    </div>
  );
}

export default Nav;
