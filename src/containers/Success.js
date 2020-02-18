import React from "react";
import { useLocation, Link } from "react-router-dom";

const Success = () => {
  const location = useLocation();

  const { message, username } = location.state;

  return (
    <div className="container-payment">
      {message.message === "success" ? (
        <h2>{username}, merci pour votre commande.</h2>
      ) : (
        <h2>Une erreur est survenue lors de votre paiement.</h2>
      )}
      <Link to="/">
        <button className="success-btn">Retour à la page d'accueil</button>
      </Link>
    </div>
  );
};

export default Success;
