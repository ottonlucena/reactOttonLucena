import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

const MyProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : []
  );

  const isInCart = (id) => {
    return cart?.some((x) => x.id === id);
  };

  const emtyCart = () => {
    setCart([]);
  };

  const addItem = (detalle, count) => {
    const newItem = {
      ...detalle,
      count,
    };

    if (isInCart(newItem.id)) {
      const findProduct = cart.find((x) => x.id === newItem.id);
      const indexProduct = cart.indexOf(findProduct);
      const arrayAux = [...cart];
      arrayAux[indexProduct].count += count;
      setCart(arrayAux);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const deleteItem = (id) => {
    return setCart(cart.filter((x) => x.id !== id));
  };

  const getItemCount = () => {
    return cart.reduce((acc, x) => (acc += x.count), 0);
  };

  const getItemPrice = () => {
    return cart.reduce((acc, x) => (acc += x.count * x.precio), 0);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        isInCart,
        emtyCart,
        addItem,
        deleteItem,
        getItemCount,
        getItemPrice,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default MyProvider;
