import React, { createContext, useState, useEffect } from "react";
import { sessionActive, userLogin } from "../api/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || null
  );
  const [role, setRole] = useState(localStorage.getItem("role") || null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  const login = async (credentials) => {
    setError(null);
    try {
      const {
        token: newToken,
        userName: newUserName,
        role: newRole,
      } = await userLogin(credentials);

      localStorage.setItem("token", newToken);
      localStorage.setItem("userName", newUserName);
      localStorage.setItem("role", newRole);

      setToken(newToken);
      setUserName(newUserName);
      setRole(newRole);
      setIsAuthenticated(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("role");
    setToken(null);
    setUserName(null);
    setRole(null);
    setIsAuthenticated(false);
  };

  const checkAuthentication = async () => {
    const actualRol = localStorage.getItem("role");
    if (token) {
      try {
        const { role: validatedRole } = await sessionActive(actualRol);

        setIsAuthenticated(true);
        setRole(validatedRole);
      } catch {
        logout();
      }
    } else {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, [token]);

  const value = {
    token,
    userName,
    role,
    isAuthenticated,
    login,
    logout,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
