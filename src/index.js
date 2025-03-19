import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FiltersProvider } from "./context/filters";
import { CartProvider } from "./context/cart";
import { ProductProvider } from "./context/products";
import { AuthProvider } from "./context/auth"; // Asegúrate de importar correctamente
import { UserProvider } from "./context/user"; // Asegúrate de importar correctamente
import { ShopProvider } from "./context/shop"; // Importar el nuevo ShopContext
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <UserProvider>
      <ShopProvider>
        <ProductProvider>
          <CartProvider>
            <FiltersProvider>
              <App />
            </FiltersProvider>
          </CartProvider>
        </ProductProvider>
      </ShopProvider>
    </UserProvider>
  </AuthProvider>
);

reportWebVitals();
