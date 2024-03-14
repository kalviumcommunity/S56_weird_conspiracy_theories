import { useState } from 'react';
import Nav from './components/nav';
import { Routes, Route } from 'react-router-dom';
import Form from './pages/FormPage';
import Home from './pages/Home';
import UpdatePage from './pages/UpdatePage';
import LoginPage from './pages/LoginPage';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [selectedUser, setSelectedUser] = useState('All');

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <ToastContainer />
      <Nav onSelectUser={handleUserSelect} />
      <Routes>
        <Route path="/" element={<Home selectedUser={selectedUser} />} />
        <Route path="/form" element={<Form />} />
        <Route path="/update/:id" element={<UpdatePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
