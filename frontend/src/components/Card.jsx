import React from 'react';
import "./card.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
const Card = ({ theory, description, source, img,id }) => {
    if (!theory || !description || !source || !img) {
        return <div className="error">Missing props for the component.</div>;
      }
      const handleDelete = (id) => {
      axios.delete("https://weird-conspiracy-theories.onrender.com/delete/"+id)
      .then(res=>{console.log(res)
      window.location.reload();
      }
      
      )
      .catch(err => console.log(err))
      }
  return (
    <div className="card">
      <h2>{theory}</h2>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Source:</strong> {source}</p>
      <img src={img} alt="Reference Image" />
      <div className="button">
        
        <Link to={`/update/${id}`} ><button>UPDATE</button> </Link>
        <button onClick={(e)=>handleDelete(id)}>DELETE</button>
      </div>
    </div>
  );
}

export default Card;
