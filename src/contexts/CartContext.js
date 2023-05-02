import React, { useState, createContext, useEffect } from "react";

// Create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //States
  const [cart, setCart] = useState([]);
  // Add to Cart
  const addToCart = (id, product) => {
    const newItems = {...product, quantity:1}
  // Check if the item is already in the cart or not
    const cartItem = cart.find(item => {
      return item.id === id
    })
    // if cart item is already in the cart
      if(cartItem) {
        const newCart = [...cart].map((item) => {
          if(item.id=== id){
            return{ ...item, quantity: cartItem.quantity+1}
          } else {
            return item;
          }
        })
        setCart(newCart);

      }else {
        setCart([... cart, newItems])
      }
  }
  
  return (
    <CartContext.Provider value={{ cart , addToCart}}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
