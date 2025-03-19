import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";
import { UserContext } from "../context/user";
import ProductList from "../components/ProductList/ProductList";
import UserList from "../components/userList/UserList";
function OwnerPage() {
  const navigate = useNavigate();
  const { isAuthenticated, role } = useContext(AuthContext);
  const { users, fetchUsers } = useContext(UserContext);
  const [togglePanel, setTogglePanel] = useState(true);

  useEffect(() => {
    if (!isAuthenticated || role !== "owner") {
      navigate("/Productos");
    } else {
      fetchUsers();
    }
  }, [isAuthenticated, role]);

  return (
    <main className="adminHome">
      {isAuthenticated && role === "owner" ? (
        <>
          {togglePanel ? (
            <>
              <button onClick={() => setTogglePanel(!togglePanel)}>
                Users Panel
              </button>
              <ProductList />
            </>
          ) : (
            <>
              <button onClick={() => setTogglePanel(!togglePanel)}>
                Products Panel
              </button>
              <UserList users={users} />
            </>
          )}
        </>
      ) : (
        <p>No tienes acceso a esta sección.</p>
      )}
    </main>
  );
}

export default OwnerPage;
