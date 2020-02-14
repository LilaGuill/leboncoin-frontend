import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./list.css";
moment.lang("fr");
moment.locale();

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
        {/* ne pas mettre de point dans la variable */}

        <div className="list-item">
          <img
            className="list-image"
            src="https://img5.leboncoin.fr/ad-large/4c9be52d765e65d246f941d0463e856bf34b2f73.jpg"
            alt="leboncoin"
          />
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
