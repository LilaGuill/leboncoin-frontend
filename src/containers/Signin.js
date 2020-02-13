import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <form>
        <h2>Connexion</h2>
        <input type="text" />
        <input type="email" />

        <button>Se connecter</button>
      </form>
      <span>Vous n'avez pas de compte</span>
      <Link to="/signup">
        <button>Creer un compte</button>
      </Link>
    </div>
  );
};

export default SignIn;
