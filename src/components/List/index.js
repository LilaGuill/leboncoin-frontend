import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/fr";
import "./list.css";
moment.locale("fr");

const List = ({ offers }) => {
  const offersList = offers.map((offer, index) => {
    const date = moment(offer.created).format("L");
    const heure = moment(offer.created).format("LT");

    return (
      <Link
        key={offer._id}
        // to={`/offer/${offer._id}`} les deux syntaxe fonctionnent
        to={"/offer/" + offer._id}
        style={{ textDecoration: "none" }}
      >
        <div className="list-item">
          <img className="list-image" src={offer.image} alt="leboncoin" />
          <div className="list-detail">
            <div className="detail">
              <div className="list-title">{offer.title}</div>
              <div className="list-price">{offer.price} €</div>
            </div>
            <div className="list-date">
              {date} à {heure}
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return <div className="list">{offersList}</div>;
};

export default List;
