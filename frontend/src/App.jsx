import React from 'react';
import Nav from './components/nav';
import { Routes, Route } from 'react-router-dom';
import Form from './pages/FormPage';
import Home from './pages/Home';
import UpdatePage from './pages/UpdatePage';

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/update/:id" element={<UpdatePage />} />
      </Routes>
      {/* <Home/> */}
    </div>
  );
};

export default App;
