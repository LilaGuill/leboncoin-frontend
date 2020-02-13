import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");

  return (
    <div style={{ width: 300, height: 300 }}>
      <div>
        <h2>Créez un compte</h2>
      </div>
      <form>
        <input type="text" placeholder="username" />
        <input type="email" placeholder="adresse email" />
        <input type="password" placeholder="adresse email" />
        <input type="password" placeholder="confirm password" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Signup;
