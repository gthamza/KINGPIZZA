import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    console.log('Adding to cart:', product, quantity);
    
    // Check if the product already exists in the cart
    const existingProduct = cartItems.find((item) => item.product.id === product.id);

    if (existingProduct) {
      // Update the quantity of the existing product
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      // Add new product to the cart
      setCartItems((prevItems) => [...prevItems, { product, quantity }]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
