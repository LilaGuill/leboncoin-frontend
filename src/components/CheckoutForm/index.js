import React from "react";
import { injectStripe, CardElement } from "react-stripe-elements";
import axios from "axios";
import "./checkoutForm.css";

const CheckoutForm = ({ stripe, offerId, title, price, token }) => {
  return (
    <div className="payment-form">
      <CardElement />
      <button
        className="btn-payment"
        onClick={async () => {
          try {
            const stripeResponse = await stripe.createToken({
              name: "non de l'acheteur"
            });
            const stripeToken = stripeResponse.token.id;

            console.log(stripeToken);
            const response = await axios.post("http://localhost:3000/pay", {
              stripeToken: stripeToken,
              offerId: offerId,
              title: title,
              price: price,
              token: token
            });
            console.log(response.data);
          } catch (error) {
            console.error("coordonnées bancaires incorrectes");
          }
        }}
      >
        Procéder au paiement
      </button>
    </div>
  );
};

export default injectStripe(CheckoutForm);
