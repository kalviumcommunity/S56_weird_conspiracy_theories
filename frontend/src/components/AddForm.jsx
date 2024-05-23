import React, { useState } from "react";
import axios from "axios";
import "./form.css";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
const Form = () => {
  const [conspiracyTheory, setConspiracyTheory] = useState("");
  const [description, setDescription] = useState("");
  const [source, setSource] = useState("");
  const [referenceImages, setReferenceImages] = useState("");
  const navigate = useNavigate();
  const username = Cookies.get("username")


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://gigx.onrender.com/createUser", {
        conspiracy_theory: conspiracyTheory,
        description,
        source,
        reference_images: referenceImages,
        created_by: username
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
            className="input"
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
            className="input"
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
            className="input"
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
            className="input"
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
