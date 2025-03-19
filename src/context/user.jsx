import React, { createContext, useState, useEffect, useContext } from "react";
import { getUsers, createUser, deleteUser } from "../api/user";
import { AuthContext } from "./auth";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { role } = useContext(AuthContext); // Accedemos al rol desde AuthContext
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    if (role !== "owner") return; // Restringir acceso si no es "owner"
    setError(null);
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const addUser = async (newUser) => {
    if (role !== "owner") return; // Restringir acceso si no es "owner"
    setError(null);
    try {
      await createUser(newUser);
      fetchUsers();
    } catch (err) {
      setError(err.message);
    }
  };

  const removeUser = async (userId) => {
    if (role !== "owner") return; // Restringir acceso si no es "owner"
    setError(null);
    try {
      await deleteUser(userId);
      fetchUsers();
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [role]);

  const value = {
    users,
    fetchUsers,
    addUser,
    removeUser,
    error,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
