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
  /*useEffect(() => {
    if (!isAuthenticated) {
      navigate("/Productos");
    }
  }, [isAuthenticated]);*/
  useEffect(() => {
    if (!isAuthenticated || role !== "owner") {
      navigate("/Productos");
    } else {
      fetchUsers(); // Cargar usuarios si es "owner"
    }
    console.log(role);
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

    /*<main className="adminHome">
      {!isAuthenticated ? (
        <></>
      ) : (
        <>
          {togglePanel ? (
            <>
              <button onClick={() => setTogglePanel(!togglePanel)}>
                Users Panel
              </button>
              <ProductList />{" "}
            </>
          ) : (
            <>
              <button onClick={() => setTogglePanel(!togglePanel)}>
                Products Panel
              </button>
              <UserList />
            </>
          )}
        </>
      )}
    </main>*/
  );
}

export default OwnerPage;
