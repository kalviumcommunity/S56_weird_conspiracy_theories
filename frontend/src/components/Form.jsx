import React, { useState } from "react";
import axios from "axios";
import "./form.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [conspiracyTheory, setConspiracyTheory] = useState("");
  const [description, setDescription] = useState("");
  const [source, setSource] = useState("");
  const [referenceImages, setReferenceImages] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://weird-conspiracy-theories.onrender.com/createUser", {
        conspiracy_theory: conspiracyTheory,
        description,
        source,
        reference_images: referenceImages
      })
      .then(response => {
        console.log("Form submitted successfully:", response.data);
        setConspiracyTheory("");
        setDescription("");
        setSource("");

        setReferenceImages("");
        navigate("/");

      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="conspiracyTheory">
          Conspiracy Theory:
          <input
            type="text"
            id="conspiracyTheory"
            name="conspiracyTheory"
            placeholder="Enter conspiracy theory name"
            value={conspiracyTheory}
            onChange={(e) => setConspiracyTheory(e.target.value)}
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
        <label htmlFor="referenceImages">
          Reference Images:
          <input
            type="text"
            id="referenceImages"
            name="referenceImages"
            placeholder="Enter reference images URL"
            value={referenceImages}
            onChange={(e) => setReferenceImages(e.target.value)}
          />
        </label>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
