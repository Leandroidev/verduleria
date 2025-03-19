import React, { useContext } from "react";
import { DeleteCanSvg } from "../Icons/Icons";
import "./User.css";
import { UserContext } from "../../context/user";
function User({ user }) {
  const { removeUser } = useContext(UserContext);
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
