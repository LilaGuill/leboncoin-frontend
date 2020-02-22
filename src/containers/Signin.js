import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const SignIn = ({ setToken }) => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    if (email && password) {
      const body = {
        email: email,
        password: password
      };
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API}/user/login`,
          body
        );

        //enregistrement du token dans les cookies
        const token = response.data.token;
        Cookies.set("token", token, { expires: 7 });

        //mise a jour du state
        setToken(token);
        //redirection vers la page home
        history.push("/");
      } catch (error) {
        history.push("/signup");
        console.error(error.message);
      }
    } else {
      setMessage("Veuillez indiquer votre email et mot de passe ");
    }
  };

  return (
    <div className="container-signup">
      <h2>Connexion</h2>
      <hr></hr>
      <form onSubmit={handleSubmit} className="form-signup" autoComplete="on">
        <label htmlFor="email">Adresse email*</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={event => {
            setEmail(event.target.value);
            setMessage("");
          }}
        />
        <label htmlFor="password">Mot de passe*</label>
        <input
          type="password"
          autoComplete="off"
          value={password}
          onChange={event => {
            setPassword(event.target.value);
            setMessage("");
          }}
        />

        <button className="form-submit" type="submit">
          Se connecter
        </button>
        <div className="message">{message}</div>
      </form>
      <div className="wrapper-signup">
        <span>Vous n'avez pas de compte ?</span>

        <button className="wrapper-signup-button">
          <Link to="/signup">Créer un compte</Link>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
