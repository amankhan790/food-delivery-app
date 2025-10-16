import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  const addCartItem = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeCartItem = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        // ✅ Added return here
        let itemInfo = food_list.find((product) => product._id === item);

        if (itemInfo) {
          // ✅ Prevent crash if not found
          totalAmount += itemInfo.price * cartItem[item];
        }
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addCartItem,
    removeCartItem,
    getTotalAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
