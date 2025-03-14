import React, { useState, useContext, useEffect } from "react";
import { LogInContext } from "../../context/logIn";
import "./LogInForm.css";
import { useNavigate } from "react-router-dom";
function LogInForm() {
  // Estados para almacenar los valores del formulario
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // Accedemos al contexto de autenticación
  const { login, error, isAuthenticated } = useContext(LogInContext);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Llamamos a la función de inicio de sesión del contexto
    await login({ userName, password });
  };

  return (
    <div className="logInForm">
      <h1 className="logInTitle">LogIn</h1>
      <form onSubmit={handleSubmit}>
        {/* Campo de usuario */}
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        {/* Campo de contraseña */}
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Botón de inicio de sesión */}
        <button type="submit">Login</button>

        {/* Mensaje de error */}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

export default LogInForm;
