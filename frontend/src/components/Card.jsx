import React, { useState } from 'react';
import "./card.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Card = ({ theory, description, source, img, id }) => {
  const [display, setDislay] = useState(false);

  const handleDelete = (id) => {
    axios.delete("http://localhost:3001/delete/" + id)
      .then(res => {
        console.log(res);
        setDislay(true); 
      })
      .catch(err => console.log(err));
  }

  if (!theory || !description || !source || !img) {
    return <div className="error">Missing props for the component.</div>;
  }

 
  if (display) {
    return null;
  }

  return (
    <div className="card">
      <h2>{theory}</h2>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Source:</strong> {source}</p>
      <img src={img} alt="Reference Image" />
      <div className="button">
        <Link to={`/update/${id}`}><button className='update'>UPDATE</button></Link>
        <button className='delete' onClick={(e) => handleDelete(id)}>DELETE</button>
      </div>
    </div>
  );
}

export default Card;
