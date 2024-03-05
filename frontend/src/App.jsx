import React from 'react';
import Nav from './components/nav';
import { Routes, Route } from 'react-router-dom';
import Form from './pages/FormPage';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      {/* <Home/> */}
    </div>
  );
};

export default App;
