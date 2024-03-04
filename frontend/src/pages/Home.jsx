import './Home.css';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Weird Conspiracy Theories Page!</h1>
      <p>Explore the mysterious and bizarre world of conspiracy theories. From ancient aliens to government cover-ups, dive into the rabbit hole of unexplained phenomena and secret agendas.</p>
      <p>Join our community to discuss, debate, and share your own theories about the unknown.</p>
      <p>Remember, the truth is out there... or is it?</p>
      <button className="button-55" role="button">Explore Now</button>  
      <div className="theory">
       <Card
        theory="Flat Earth Theory"
        description="Belief that the Earth is flat rather than an oblate spheroid, despite scientific evidence proving otherwise."
        source="Scientific research, historical evidence"
        img="https://imgs.search.brave.com/ViAFowx9d2YnmY9wcX2ZssbvLicE3yt1NYD5qX_d2aA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zb3Rw/Lm55YzMuY2RuLmRp/Z2l0YWxvY2VhbnNw/YWNlcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTgvMDEv/RmxhdF9lYXJ0aC02/Mzd4NDc4LnBuZw"
      />    
      <Card
        theory="Chemtrails"
        description="Idea that condensation trails left by airplanes are chemicals sprayed for nefarious purposes like weather control or population manipulation.
        "
        source="Atmospheric science, aviation studies
        "
        
        img="https://imgs.search.brave.com/WafbvZGPkLWtR1UnWIuuZQLPvs3ueb0lIYILLtBC5LU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzA1LzU4Lzk0/LzM2MF9GXzEwNTU4/OTQ2N19USVJCd1hI/Y0laWnQyY0RtMlhm/Vk83YVdLRk9VQldt/Vi5qcGc
        "
      />  
      </div>
      
    </div>
  );
};

export default Home;
