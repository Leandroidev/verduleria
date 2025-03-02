import { createContext, useReducer, useState } from "react";
import { cartInitialState, cartReducer } from "../reducers/cartReducer";
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const getCartQuantity = () =>
    state.reduce((sum, item) => sum + item.quantity, 0);
  const incrementProductQuantity = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: product });
  const decrementProductQuantity = (product) =>
    dispatch({ type: "DECREMENT_PRODUCT_QUANTITY", payload: product });
  const removeProduct = (product) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: product });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{
        cart: state,
        incrementProductQuantity,
        decrementProductQuantity,
        clearCart,
        removeProduct,
        getCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
