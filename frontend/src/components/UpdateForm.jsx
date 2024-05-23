import React, { useState, useEffect } from "react";
import axios from "axios";
import "./form.css";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

const UpdateForm = () => {
  const [conspiracyTheory, setConspiracyTheory] = useState("");
  const [description, setDescription] = useState("");
  const [source, setSource] = useState("");
  const [referenceImages, setReferenceImages] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const username=Cookies.get("username");

  useEffect(() => {
    axios.get("https://gigx.onrender.com/getdata/"+id)
      .then(response => {
        console.log(response)
        const data = response.data;
        setConspiracyTheory(data.conspiracy_theory);
        setDescription(data.description);
        setSource(data.source);
        setReferenceImages(data.reference_images);
        console.log(data.created_by)

      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("https://gigx.onrender.com/updatedata/"+id, {
        conspiracy_theory: conspiracyTheory,
        description,
        source,
        reference_images: referenceImages,
        created_by:username
      })
      .then(response => {
        console.log("Form submitted successfully:", response.data);
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
        <button type="submit" className="btn">Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;
