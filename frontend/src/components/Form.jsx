import React, { useState } from "react";
import axios from "axios";
import "./form.css";

const Form = () => {
  const [theory, setTheory] = useState("");
  const [description, setDescription] = useState("");
  const [source, setSource] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios
      .post("https://weird-conspiracy-theories.onrender.com/adddata", { theory, description, source, link })
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="theory">
          Theory:
          <input
            type="text"
            id="theory"
            name="theory"
            placeholder="Enter theory name"
            value={theory}
            onChange={(e) => setTheory(e.target.value)}
          />
        </label>
        <label htmlFor="description">
          Description:
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Write description here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label htmlFor="source">
          Source:
          <input
            type="text"
            id="source"
            name="source"
            placeholder="Write Source here"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </label>
        <label htmlFor="link">
          Link:
          <input
            type="text"
            id="link"
            name="link"
            placeholder="Enter your contact number"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </label>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
