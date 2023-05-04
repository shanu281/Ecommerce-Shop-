import React, { useState, createContext, useEffect } from "react";

// Create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //States
  const [cart, setCart] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0)

  // Update item quantity 
  useEffect(() => {
    if (cart) {
      const quantity = cart.reduce((acc, cv) => {
        return acc + cv.quantity;
      }, 0);
      setItemQuantity(quantity);
    }
  }, [cart]);

  // Update total price
  useEffect(() => {
    const total = cart.reduce((acc, cv) => {
      return acc + cv.price * cv.quantity;
    }, 0)
    setTotalPrice(total)
  });

  // Add to Cart
  const addToCart = (product, id) => {
    const newItems = { ...product, quantity: 1 };
    // Check if the item is already in the cart or not
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // if cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, quantity: cartItem.quantity + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItems]);
    }
  };

  //delete items from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  //Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  //Increase Quantity
  const increaseQuantity = (id) => {
    const item = cart.find((e) => e.id === id);
    addToCart(item, id);
    console.log(item);
  };

  //Decrease quantity
  const decreaseQuantity = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: cartItem.quantity - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.quantity < 2) {
      removeFromCart(id);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        itemQuantity,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
