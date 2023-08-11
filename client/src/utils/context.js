import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [cartitemCount, setCartitemCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    let totalPrice = 0;
    cartItems.map(
      (item) => (totalPrice += item.attributes.price * item.attributes.quantity)
    );
    let count = 0;
    cartItems.map((item) => (count += item.attributes.quantity));
    setCartitemCount(count);
    setSubTotal(totalPrice);
  }, [cartItems, cartCount]);

  const cartQuantityHandler = (product, quantity) => {
    product.attributes.quantity = quantity;
    setCartCount(quantity);
  };

  const handleProductAddToCart = (product, quantity) => {
    let item = [...cartItems];
    let index = item.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      item[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      item = [...item, product];
    }
    return setCartItems(item);
  };
  const handleProductRemovetoCart = (product) => {
    let items = [...cartItems];
    items = cartItems.filter((p) => p.id !== product.id);
    setCartItems(items);
  };

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        handleProductRemovetoCart,
        handleProductAddToCart,
        subTotal,
        setSubTotal,
        setCartCount,
        setCartItems,
        cartItems,
        cartCount,
        cartQuantityHandler,
        cartitemCount,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
