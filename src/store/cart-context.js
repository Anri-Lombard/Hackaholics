import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  spacesAvailable: 10,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
  reduceSpace: () => {},
});

export default CartContext;
