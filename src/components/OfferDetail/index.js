import React from "react";
import OfferUser from "../OfferUser";
import "./offerDetail.css";

const OfferDetail = ({ offer, count }) => {
  return (
    <div className="container-offer">
      <div className="offer">
        <div className="wrapper-offer">
          <img
            className="image-offer"
            src="https://img5.leboncoin.fr/ad-large/4c9be52d765e65d246f941d0463e856bf34b2f73.jpg"
            alt="leboncoin"
          />
          <div className="offer-title">{offer.title}</div>
          <div className="price">{offer.price} €</div>

          <div className="description">
            <p>{offer.description}</p>
          </div>
          <div className="date">{offer.created}</div>
        </div>
      </div>
      <div className="wrapper-user">
        <OfferUser username={offer.creator.account.username} count={count} />
      </div>
    </div>
  );
};

export default OfferDetail;
