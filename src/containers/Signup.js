import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    const body = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };
    console.log(username, email, password, confirmPassword);
    const response = await axios.post(
      "http://localhost:3000/user/signup",
      body
    );
    console.log(response.data);
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Signup;
