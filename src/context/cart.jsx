import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const incrementProductQuantity = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    return setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const clearCart = () => {
    setCart([]);
  };
  const decrementProductQuantity = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity -= 1;
      if (newCart[productInCartIndex].quantity === 0) {
        return removeProduct(product);
      }
      return setCart(newCart);
    }
    return "No se pudo restar catidad al producto";
  };
  const removeProduct = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);
    if (productInCartIndex >= 0) {
      const newCart = cart.filter((item) => item.id !== product.id);
      console.log(newCart);

      return setCart(newCart);
    }
    return "No se pudo eliminar el producto";
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        incrementProductQuantity,
        decrementProductQuantity,
        clearCart,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
