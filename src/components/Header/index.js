import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Cookies from "js-cookie";
import { far } from "@fortawesome/free-regular-svg-icons";

const Header = ({ setToken, token, setUsername }) => {
  const handleDeConnexion = () => {
    //deconnexion
    Cookies.remove("token");
    Cookies.remove("username");
    setToken(null);
    setUsername(null);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper-items-header">
            <Link to="/">
              <img src={logo} alt="logo leboncoin" />
            </Link>
            <Link to="/publish">
              <button className="btn-header">
                <FontAwesomeIcon
                  icon={far.faPlusSquare}
                  className="icon-white"
                />
                Déposer une annonce
              </button>
            </Link>
            <Link to="/home">
              <div className="recherche">
                <FontAwesomeIcon icon="search" className="icon-black" />
                Rechercher
              </div>
            </Link>
          </div>
          <Link to="/signin">
            <div className="connexion">
              <FontAwesomeIcon icon={far.faUser} className="icon-black" />
              {token ? (
                <span onClick={handleDeConnexion}>Se déconnecter</span>
              ) : (
                <span>Se connecter</span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
