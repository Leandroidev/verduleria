import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FiltersProvider } from "./context/filters";
import { CartProvider } from "./context/cart";
import { ProductProvider } from "./context/products";
import { LogInProvider } from "./context/logIn";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LogInProvider>
    <ProductProvider>
      <CartProvider>
        <FiltersProvider>
          <App />
        </FiltersProvider>
      </CartProvider>
    </ProductProvider>
  </LogInProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
