import React from "react";
import "./header.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper-items-header">
            <img src={logo} alt="logo leboncoin" />
            <button>
              <FontAwesomeIcon icon="plus-square" className="icon-white" />
              Déposer une annonce
            </button>
            <div className="recherche">
              <FontAwesomeIcon icon="search" className="icon-black" />
              Rechercher
            </div>
          </div>
          <div className="connexion">
            <FontAwesomeIcon icon="user" className="icon-black" />
            Se connecter
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
