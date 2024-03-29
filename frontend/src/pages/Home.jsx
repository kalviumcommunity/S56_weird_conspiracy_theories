import { useState, useEffect } from 'react';
import './Home.css';
import Card from '../components/Card';
import Loader from '../components/Loader';

const Home = ({ selectedUser }) => {
  const [theories, setTheories] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [cards, setCards] = useState(false);
  const isLoggedIn = document.cookie.includes('username'); 

  useEffect(() => {
    setLoading(true); 
    fetch('https://weird-conspiracy-theories.onrender.com/getuser')
      .then(response => response.json())
      .then(data => {
        const filteredTheories = selectedUser === 'All' ? data : data.filter(theory => theory.created_by === selectedUser);
        setTheories(filteredTheories);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); 
      });
  }, [selectedUser]);

  const handleClick = () => {
    setCards(true);
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Weird Conspiracy Theories Page!</h1>
      <p>Explore the mysterious and bizarre world of conspiracy theories. From ancient aliens to government cover-ups, dive into the rabbit hole of unexplained phenomena and secret agendas.</p>
      <p>Join our community to discuss, debate, and share your own theories about the unknown.</p>
      <p>Remember, the truth is out there... or is it?</p>
      {isLoggedIn && ( 
        <button className="button-55" role="button" onClick={handleClick}>Explore Now</button>
      )}

      {loading ? (
        <div className="loader-container">
          <Loader type={"bars"} color={"#000000"}/>
        </div>
      ) : (
        theories.length === 0 ? (
          <p>No theories to display.</p>
        ) : (
          cards && isLoggedIn && ( 
            <div className="theory">
              {theories.map((theory, index) => (
                <Card
                  key={index}
                  theory={theory.conspiracy_theory}
                  description={theory.description}
                  source={theory.source}
                  img={theory.reference_images}
                  id={theory._id}
                />
              ))}
            </div>
          )
        )
      )}
    </div>
  );
};

export default Home;
