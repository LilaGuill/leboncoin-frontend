import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";

const Header = ({ setToken, token }) => {
  const handleDeConnexion = () => {
    //deconnexion
    Cookies.remove("token");
    setToken(null);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper-items-header">
            <img src={logo} alt="logo leboncoin" />

            <Link to="/publish">
              <button>
                <FontAwesomeIcon icon="plus-square" className="icon-white" />
                Déposer une annonce
              </button>
            </Link>

            <div className="recherche">
              <FontAwesomeIcon icon="search" className="icon-black" />
              Rechercher
            </div>
          </div>

          <div className="connexion">
            <FontAwesomeIcon icon="user" className="icon-black" />
            {token ? (
              <span onClick={handleDeConnexion}>Se déconnecter</span>
            ) : (
              <Link to="/signin">
                <span>Se connecter</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
