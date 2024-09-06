import React, { createContext, useContext, useState } from 'react';

// Create context
const CartContext = createContext();

// Provide context
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems([...cartItems, { product, quantity }]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for accessing the cart
export const useCart = () => useContext(CartContext);
