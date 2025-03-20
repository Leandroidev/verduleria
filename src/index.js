import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FiltersProvider } from "./context/filters";
import { CartProvider } from "./context/cart";
import { ProductProvider } from "./context/products";
import { AuthProvider } from "./context/auth";
import { UserProvider } from "./context/user";
import { ShopProvider } from "./context/shop";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <UserProvider>
      <ProductProvider>
        <ShopProvider>
          <CartProvider>
            <FiltersProvider>
              <App />
            </FiltersProvider>
          </CartProvider>
        </ShopProvider>
      </ProductProvider>
    </UserProvider>
  </AuthProvider>
);

reportWebVitals();
