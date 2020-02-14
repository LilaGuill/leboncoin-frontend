import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Information from "../components/Information";

const Signup = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();
    const body = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };

    const response = await axios.post(
      "http://localhost:3000/user/signup",
      body
    );
    //enregistrement du token dans les cookies
    const token = response.data.token;
    Cookies.set("token", token, { expires: 7 });
    setToken(token);
    history.push("/");
  };

  return (
    <div className="signup-container">
      <div className="wrapper-signup-information">
        <Information />

        <div className="signup-wrapper">
          <h2 className="form-signup-title">Créer un compte</h2>

          <form className="form-signup-2" onSubmit={handleSubmit}>
            <label htmlFor="username">Pseudo *</label>

            <input
              type="text"
              value={username}
              onChange={event => {
                setUsername(event.target.value);
              }}
            />
            <label htmlFor="email">Adresse email*</label>
            <input
              type="email"
              value={email}
              onChange={event => {
                setEmail(event.target.value);
              }}
            />
            <div className="wrapper-password">
              <div>
                <label htmlFor="password">Mot de passe*</label>
                <input
                  type="password"
                  value={password}
                  onChange={event => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="confirmPassword">
                  Confirmer le mot de passe*
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={event => {
                    setConfirmPassword(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="condition">
              <input type="checkbox" className="checkbox" />« J’accepte les
              <span> Conditions Générales de Vente</span> et
              <span> les Conditions Générales d’Utilisation »</span>
            </div>
            <button className="signup-button" type="submit">
              Créer mon Compte Personnel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
