import React from "react";
import OfferUser from "../OfferUser";
import "./offerDetail.css";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

const OfferDetail = ({ offer, count }) => {
  const date = moment(offer.created).format("L");
  const heure = moment(offer.created).format("LT");
  return (
    <div className="container-offer">
      <div className="offer">
        <div className="wrapper-offer">
          <img className="image-offer" src={offer.image} alt="leboncoin" />
          <div className="offer-title">{offer.title}</div>
          <div className="price">{offer.price} €</div>

          <div className="description">
            <p>{offer.description}</p>
          </div>
          <div className="date">
            {date} à {heure}
          </div>
        </div>
      </div>
      <div className="wrapper-user">
        <OfferUser
          username={offer.creator.account.username}
          count={count}
          offer={offer}
        />
      </div>
    </div>
  );
};

export default OfferDetail;
