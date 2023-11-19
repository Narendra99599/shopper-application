import React, { createContext, useState } from "react";
import all_product from "../components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prevValue) => {
      return {
        ...prevValue,
        [itemId]: prevValue[itemId] + 1,
      };
    });
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevValue) => {
      return {
        ...prevValue,
        [itemId]: prevValue[itemId] - 1,
      };
    });
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === +item);
        total += itemInfo.new_price * cartItems[item];
      }
    }
    return total;
  };

  const getTotalCartItems = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) total += cartItems[item];
    }
    return total;
  };

  const countextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={countextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
