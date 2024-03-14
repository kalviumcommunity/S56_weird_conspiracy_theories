import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const usernameCookie = Cookies.get('username');


  const handleUsername = (e) => {
    setUsername(e.target.value);

  };

  
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    axios.post("https://weird-conspiracy-theories.onrender.com/auth", {username, password})
      .then((response) => {
        document.cookie = `token=${response.data}; expires=Sun, 1 Jan 9999 12:00:00 UTC; path=/`;
        document.cookie = `username=${username}; expires=Sun, 1 Jan 9999 12:00:00 UTC; path=/`;
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });

      axios.post("https://weird-conspiracy-theories.onrender.com/addUser",{
        username:usernameCookie
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => { 
        console.log(err);
      } );
  };
  
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsername}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
            className="form-control"
          />
        </div>
        <div className='button'>
          <button type="button" onClick={handleLogin} className="login-btn">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
