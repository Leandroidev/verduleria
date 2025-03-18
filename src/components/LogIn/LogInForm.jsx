import React, { useState, useContext, useEffect } from "react";
import { LogInContext } from "../../context/logIn";
import "./LogInForm.css";

function LogInForm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, userName } = useContext(LogInContext);

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
