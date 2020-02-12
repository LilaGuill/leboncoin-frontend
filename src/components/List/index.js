import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./list.css";
moment.lang("fr");
console.log(moment.locale());
const List = ({ offers }) => {
  const offersList = offers.map((offer, index) => {
    const date = moment(offer.created).format("L");
    const heure = moment(offer.created).format("LT");

    console.log(date);
    console.log(heure);
    return (
      <div key={offer._id}>
        <Link to={`/offer/${offer._id}`}>
          <div className="list-item">
            {/* ne pas mettre de point dans la variable */}

            <img
              className="list-image"
              src="https://img5.leboncoin.fr/ad-large/4c9be52d765e65d246f941d0463e856bf34b2f73.jpg"
            />
            <div className="list-detail">
              <div className="detail">
                <div className="title">{offer.title}</div>
                <div className="price">{offer.price} €</div>
              </div>
              <div className="date">
                {date} à {heure}
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  console.log(offers);
  return <div className="list">{offersList}</div>;
};

export default List;
