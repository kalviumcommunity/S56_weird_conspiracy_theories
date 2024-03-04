import React from 'react';
import "./card.css";
const Card = ({ theory, description, source, img }) => {
    if (!theory || !description || !source || !img) {
        return <div className="error">Missing props for the component.</div>;
      }
  return (
    <div className="card">
      <h2>{theory}</h2>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Source:</strong> {source}</p>
      <img src={img} alt="Reference Image" />
    </div>
  );
}

export default Card;
