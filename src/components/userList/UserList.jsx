import React, { useContext, useEffect, useState } from "react";
import User from "./User";
import "./UserList.css";
import { UserContext } from "../../context/user";
import { AuthContext } from "../../context/auth";
import { useNavigate } from "react-router-dom";

function UserList() {
  const { users, addUser, error } = useContext(UserContext);
  const { isAuthenticated } = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/Productos");
    }
  }, [isAuthenticated]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    await addUser({ userName, password });
  };
  return (
    <div className="userListContainer">
      <form className="userCreate" onSubmit={handleSubmit}>
        <div>
          <label>
            <strong>User name</strong>
            <input
              type="text"
              name="userName"
              onChange={(e) => setUserName(e.target.value)}
            />
            {error && <small className="error-message">{error}</small>}
          </label>
          <label>
            <strong>Password&nbsp;&nbsp;</strong>
            <input
              type="text"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>{" "}
        <button type="submit">Create user</button>
      </form>
      <div className="usersList">
        <h3>Users List</h3>
        <ul>
          {users ? (
            users.map((user) => <User user={user} key={user.id} />)
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
}

export default UserList;
