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
 
  //delete items from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id
    });
    setCart(newCart)
  }
 
  //Clear Cart
  const clearCart = () => {
    setCart([]);
    }

   //Increase Quantity
   const increaseQuantity = (id) => {
    const cartItem = cart.find((item) =>  item.id === id);
      addToCart(cartItem, id);
      }

   //Decrease quantity
   const decreaseQuantity = (id) => {
    const cartItem = cart.find((item) => {
      return item.id=== id
    })
    if(cartItem){
      const newCart = cart.map(item => {
        if(item.id === id){
          return {...item , quantity: cartItem.quantity-1}
        }else {
          return item; 
        }
      })
      setCart(cartItem)
    }else {
      if(cart.quantity < 2){
        removeFromCart(id)
      }
    }
  }
  return (
    <CartContext.Provider value={{ cart , addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity}}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
