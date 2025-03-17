import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogInContext } from "../context/logIn";
import ProductList from "../components/ProductList/ProductList";
import UserList from "../components/userList/UserList";
function OwnerPage() {
  const navigate = useNavigate();
  const { isAuthenticated, userName } = useContext(LogInContext);
  const [togglePanel, setTogglePanel] = useState(true);
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/Productos");
    }
  }, [isAuthenticated]);

  return (
    <main className="adminHome">
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
    </main>
  );
}

export default OwnerPage;
