
import React from 'react';
import { Button } from '@mui/material';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Weird Conspiracy Theories Page!</h1>
      <p>Explore the mysterious and bizarre world of conspiracy theories. From ancient aliens to government cover-ups, dive into the rabbit hole of unexplained phenomena and secret agendas.</p>
      <p>Join our community to discuss, debate, and share your own theories about the unknown.</p>
      <p>Remember, the truth is out there... or is it?</p>
      <Button variant="contained" color="primary" className="exp">Explore Now</Button>

      
      
    </div>
  );
};

export default Home;
