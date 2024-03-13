import React from 'react';
import Nav from './components/nav';
import { Routes, Route } from 'react-router-dom';
import Form from './pages/FormPage';
import Home from './pages/Home';
import UpdatePage from './pages/UpdatePage';
import LoginPage from './pages/LoginPage';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/update/:id" element={<UpdatePage />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>
      {/* <Home/> */}
    </div>
  );
};

export default App;
