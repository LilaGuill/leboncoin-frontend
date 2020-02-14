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

  const handleSubmit = async event => {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const bodyParameters = {
      title,
      description,
      price
    };

    try {
      event.preventDefault();
      if (title && description && price) {
        const response = await axios.post(
          "http://localhost:3000/offer/publish",
          bodyParameters,
          config
        );

        setMessage(response);
        history.push("/");
      } else {
        setMessage("Veuillez remplir tous les champs");
      }
    } catch (error) {
      setMessage(error.message);
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
                value={title}
                onChange={event => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="wrapper-label">
              <label htmlFor="textarea">Texte de l'annonce*</label>
              <textarea
                value={description}
                onChange={event => {
                  setDescription(event.target.value);
                }}
              />
            </div>
            <div className="wrapper-label">
              <label htmlFor="number">Prix*</label>
              <div className="sigle-eur">
                <input
                  className="publish-form-input-price"
                  type="text"
                  value={price}
                  onChange={event => {
                    setPrice(event.target.value);
                  }}
                />
                <span className="sigle-eur-span">€</span>
              </div>
            </div>
            <div className="wrapper-label">
              <label htmlFor="file">Photos*</label>
              <input type="file" />
            </div>
            <button type="submit">Publish</button>
          </form>
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
};

export default PublishOffer;
