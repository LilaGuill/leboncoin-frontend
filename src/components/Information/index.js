import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import "./information.css";

const Information = () => {
  return (
    <div className="information">
      <h2 className="title">Pourquoi créer un compte ?</h2>
      <div>
        <div className="information-title">
          <FontAwesomeIcon icon={far.faClock} className="icon-information" />
          <h5>Gagner du temps</h5>
        </div>
        <p>
          Gagnez du temps Publiez vos annonces rapidement, avec vos informations
          pré-remplies chaque fois que vous souhaitez déposer une nouvelle
          annonce.
        </p>
      </div>
      <div>
        <div className="information-title">
          <FontAwesomeIcon icon={far.faBell} className="icon-information" />
          <h5>Soyez les premiers informés</h5>
        </div>
        <p>
          Soyez les premiers informés Créez des alertes Immo ou Emploi et ne
          manquez jamais l’annonce qui vous intéresse.
        </p>
      </div>
      <div>
        <div className="information-title ">
          <FontAwesomeIcon icon={far.faEye} className="icon-information" />
          <h5>Visibilité</h5>
        </div>
        <p>
          Visibilité Suivez les statistiques de vos annonces (nombre de fois où
          votre annonce a été vue, nombre de contacts reçus).
        </p>
      </div>
    </div>
  );
};

export default Information;
