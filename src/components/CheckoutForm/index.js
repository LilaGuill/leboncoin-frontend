import React from "react";
import { injectStripe, CardElement } from "react-stripe-elements";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./checkoutForm.css";

const CheckoutForm = ({ stripe, offerId, title, price, token, username }) => {
  const history = useHistory();
  return (
    <div className="payment-form">
      <CardElement />
      <button
        className="btn-payment"
        onClick={async () => {
          const stripeResponse = await stripe.createToken({
            name: username
          });

          try {
            const stripeToken = stripeResponse.token.id;
            const response = await axios.post(
              `${process.env.REACT_APP_API}/pay`,
              {
                stripeToken: stripeToken,
                offerId: offerId,
                title: title,
                price: price,
                token: token
              }
            );

            history.push("/success", {
              message: response.data,
              username: username
            });
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
