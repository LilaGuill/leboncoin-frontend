import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

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
    console.log(response.data);
    Cookies.set("token", token, { expires: 7 });
    setToken(token);
    history.push("/");
  };

  return (
    <div style={{ width: 300, height: 300 }}>
      <div>
        <h2>Créez un compte</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={event => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="email"
          value={email}
          placeholder="adresse email"
          onChange={event => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={event => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="password"
          value={confirmPassword}
          placeholder="confirm password"
          onChange={event => {
            setConfirmPassword(event.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
