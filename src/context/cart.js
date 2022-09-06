import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const removeFromCart = (queryItem) => {
    const isAvailable = items.find((item) => item.id === queryItem.id);
    if (isAvailable !== null && queryItem.quantity > 1) {
      const filterList = items.filter((item) => item.id !== queryItem.id);
      console.log("filterList", filterList.length);
      filterList.push({ ...isAvailable, quantity: isAvailable.quantity - 1 });
      console.log("filterList", filterList);
      setItems(filterList);
    } else {
      const newItems = items.filter((item) => item.id !== queryItem.id);
      setItems(newItems);
    }
  };

  const addToCart = (queryItem) => {
    const isAvailable = items.find((item) => item.id === queryItem.id);
    console.log("isAvailable", isAvailable);
    if (isAvailable) {
      const filterList = items.filter((item) => item.id !== queryItem.id);
      console.log("filterList", filterList.length);
      filterList.push({ ...isAvailable, quantity: isAvailable.quantity + 1 });
      console.log("filterList", filterList);

      setItems(filterList);
    } else {
      setItems([...items, { ...queryItem, quantity: 1 }]);
    }
  };

  const initialCartContext = {
    items,
    addToCart,
    removeFromCart
  };
  return (
    <CartContext.Provider value={initialCartContext}>
      {children}
    </CartContext.Provider>
  );
};
