import React from "react";
import "./offerUser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OfferUser = ({ username, count }) => {
  console.log(username, count);
  return (
    <>
      <div className="user">
        <h3>{username}</h3>
        <span className="user-offers">
          {Number(count) === 1
            ? `${count} annonce en ligne`
            : `${count} annonces en ligne`}
        </span>
      </div>
      <div className="wrapper-button">
        <button className="user-button">
          <FontAwesomeIcon icon="shopping-cart" className="icon-shop" />
          Acheter
        </button>
      </div>
    </>
  );
};

export default OfferUser;
