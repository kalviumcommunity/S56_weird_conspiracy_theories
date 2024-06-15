import { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import "./nav.css";
import { Link, useNavigate } from "react-router-dom";

const Nav = ({ onSelectUser }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUser, setSelectedUser] = useState('All');
  const isLoggedIn = document.cookie.includes('username');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://weird-conspiracy-theories.onrender.com/userinfo');
        const data = await response.json();
        
        setSuggestions([{ username: 'All' }, ...data]); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate('/');
  };

  const handleUserSelect = (event) => {
    const user = event.target.value;
    setSelectedUser(user);
    onSelectUser(user);
  };

  return (
    <div className="nav-container">
      <Link to={"/"}><img src={logo} alt="Logo" className="nav-logo" /></Link>

      <TextField
        id="outlined-basic"
        label="Search any user"
        variant="outlined"
        className="nav-search"
        select
        value={selectedUser}
        onChange={handleUserSelect}
      >
        {suggestions.map((user, index) => (
          <MenuItem key={index} value={user.username}>
            {user.username}
          </MenuItem>
        ))}
      </TextField>

      {isLoggedIn ? ( 
        <Button onClick={handleLogout} variant="outlined" color="primary" className="nav-button">Logout</Button>
      ) : ( 
        <Link to={"/login"}><Button variant="outlined" color="primary" className="nav-button">Login</Button></Link>
      )}
      {isLoggedIn && <Link to={"/form"} className='Pages'><Button variant="contained" color="primary" className="nav-button">Add New</Button></Link>}
    </div>
  );
}

export default Nav;

