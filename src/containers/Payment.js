import React from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation, Redirect } from "react-router-dom";

const Payment = ({ token, username }) => {
  const location = useLocation();
  const { title, price, image, _id } = location.state;

  if (token) {
    return (
      <div className="container-payment">
        <h2>Acheter en ligne</h2>
        <div className="wrapper-payment">
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <div className="price-payment">{price} €</div>
        </div>
        <h2>Vos coordonnées bancaires</h2>
        <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
          <Elements>
            <CheckoutForm
              offerId={_id}
              price={price}
              title={title}
              token={token}
              username={username}
            />
          </Elements>
        </StripeProvider>
      </div>
    );
  } else {
    return <Redirect to="/signin" />;
  }
};

export default Payment;
