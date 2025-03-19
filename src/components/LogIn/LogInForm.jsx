import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import "./LogInForm.css";

function LogInForm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ userName: user, password });
  };

  return (
    <div className="logInForm">
      <h1 className="logInTitle">LogIn</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

export default LogInForm;
