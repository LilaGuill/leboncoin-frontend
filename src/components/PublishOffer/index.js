import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./publishOffer.css";

const PublishOffer = ({ token }) => {
  let history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState();

  const handleSubmit = async event => {
    event.preventDefault();
    if (title && description && price && file) {
      const bodyParameters = { title, description, price, file };

      const formData = new FormData();
      for (const [key, value] of Object.entries(bodyParameters)) {
        formData.append(key, value);
      }

      try {
        await axios.post("http://localhost:3000/offer/publish", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          }
        });

        history.push("/");
      } catch (error) {}
    } else {
      setMessage("Tous les champs sont obligatoires");
    }
  };
  return (
    <div className="publish-container">
      <div className="publish-form">
        <div className="publish-form-wrapper">
          <h2>Déposer une annonce</h2>

          <form onSubmit={handleSubmit} className="publish-form-form">
            <div className="wrapper-label">
              <label htmlFor="text">Titre de l'annonce*</label>
              <input
                className="publish-form-input-description"
                type="text"
                maxLength="50"
                value={title}
                onChange={event => {
                  setTitle(event.target.value);
                  setMessage("");
                }}
              />
            </div>
            <div className="wrapper-label">
              <label htmlFor="textarea">Texte de l'annonce*</label>
              <textarea
                maxLength="350"
                value={description}
                onChange={event => {
                  setDescription(event.target.value);
                  setMessage("");
                }}
              />
            </div>
            <div className="wrapper-label">
              <label htmlFor="number">Prix*</label>
              <div className="sigle-eur">
                <input
                  className="publish-form-input-price"
                  type="number"
                  min="1"
                  max="100000"
                  value={price}
                  onChange={event => {
                    setPrice(event.target.value);
                    setMessage("");
                  }}
                />
                <span className="sigle-eur-span">€</span>
              </div>
            </div>
            <div className="wrapper-label">
              <label htmlFor="file">Photos*</label>
              <input
                className="file"
                type="file"
                onChange={event => {
                  setFile(event.target.files[0]);
                  setMessage("");
                }}
              />
            </div>

            <button type="submit">Publier</button>
          </form>
          <div className="message">{message}</div>
        </div>
      </div>
    </div>
  );
};

export default PublishOffer;
