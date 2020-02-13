import React from "react";
import "./offerUser.css";

const OfferUser = ({ user }) => {
  return (
    <>
      <div className="user">
        <h3>{user.username}</h3>
        <span className="user-offers">10 annonces en lignes</span>
      </div>
      <div className="wrapper-button">
        <button>Acheter</button>
      </div>
    </>
  );
};

export default OfferUser;
