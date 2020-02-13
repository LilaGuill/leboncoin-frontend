import React from "react";
import OfferUser from "../OfferUser";
import "./offerDetail.css";

const OfferDetail = props => {
  return (
    <div className="container-offer">
      <div className="offer">
        <div className="wrapper-offer">
          <img
            className="image-offer"
            src="https://img5.leboncoin.fr/ad-large/4c9be52d765e65d246f941d0463e856bf34b2f73.jpg"
            alt="leboncoin"
          />
          <div className="offer-title">{props.title}</div>
          <div className="price">{props.price} €</div>
          <div className="date">{props.created}</div>
        </div>
        <div className="description">
          <h6>Description</h6>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="wrapper-user">
        <OfferUser user={props.creator.account} />
      </div>
    </div>
  );
};

export default OfferDetail;
