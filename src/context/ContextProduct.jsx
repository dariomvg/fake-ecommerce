import { createContext, useState } from "react";

export const ContextProduct = createContext();

const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const removeProduct = (product) => {
    if (product.quantity > 1) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart(cart.filter((item) => item.id !== product.id));
    }
  };

  const addProduct = (product) => {
    const findProduct = cart.find((item) => item.id === product.id);
    if (findProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const buyOneCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const shopAllProducts = () => {
    setCart([]);
  };

  return (
    <ContextProduct.Provider
      value={{
        cart,
        removeProduct,
        addProduct,
        buyOneCart,
        shopAllProducts,
        clearCart,
      }}>
      {children}
    </ContextProduct.Provider>
  );
};

export default ProductProvider;
