import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const SignIn = ({ setToken }) => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    const body = {
      email: email,
      password: password
    };
    const response = await axios.post("http://localhost:3000/user/login", body);

    //enregistrement du token dans les cookies
    const token = response.data.token;
    Cookies.set("token", token, { expires: 7 });

    //mise a jour du state
    setToken(token);
    //redirection vers la page home
    history.push("/");
  };

  return (
    <div className="container-signup">
      <h2>Connexion</h2>
      <hr></hr>
      <form onSubmit={handleSubmit} className="form-signup">
        <label htmlFor="email">Adresse email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          value={password}
          onChange={event => {
            setPassword(event.target.value);
          }}
        />

        <button className="form-submit" type="submit">
          Se connecter
        </button>
      </form>
      <div className="wrapper-signup">
        <span>Vous n'avez pas de compte ?</span>

        <button className="wrapper-signup-button">
          <Link to="/signup">Creer un compte</Link>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
