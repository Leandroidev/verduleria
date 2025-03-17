import React, { useContext } from "react";
import { DeleteCanSvg } from "../Icons/Icons";
import "./User.css";
import { LogInContext } from "../../context/logIn";
function User({ user }) {
  const { removeUser } = useContext(LogInContext);
  return (
    <li className="userItem">
      <div className="userName">
        <strong>{user.userName}</strong>
      </div>
      <div className="deleteUser">
        <button
          onClick={() => {
            removeUser(user.id);
          }}
        >
          <DeleteCanSvg />
        </button>
      </div>
    </li>
  );
}

export default User;
