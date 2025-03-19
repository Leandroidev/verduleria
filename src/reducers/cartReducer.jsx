export const cartInitialState = [];

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const productInCartIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state);
        newCart[productInCartIndex].quantity += 1;
        return newCart;
      }

      return [
        ...state,
        {
          ...action.payload,
          quantity: 1,
        },
      ];
    }
    case "DECREMENT_PRODUCT_QUANTITY": {
      const productInCartIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state);
        newCart[productInCartIndex].quantity -= 1;
        if (newCart[productInCartIndex].quantity === 0) {
          return newCart.filter((item) => item.id !== action.payload.id);
        }
        return newCart;
      }
      return state;
    }
    case "REMOVE_FROM_CART": {
      return state.filter((item) => item.id !== action.payload.id);
    }
    case "CLEAR_CART": {
      return cartInitialState;
    }
  }
};
