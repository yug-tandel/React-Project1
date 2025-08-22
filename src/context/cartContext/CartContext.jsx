import { createContext, useContext, useEffect, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./cartReducer";

faker.seed(100);

// Named export for direct use in components
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    productName: faker.commerce.productName(),
    productDescription: faker.commerce.productDescription(),
    price: faker.number.int({ min: 0, max: 5000 }),
    image: faker.image.urlPicsumPhotos({
      width: 300,
      height: 300,
    }),
    inStock: faker.helpers.arrayElement([0, 5, 10, 15, 20]),
    fastDelivery: faker.datatype.boolean(),
    new: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    unfilteredProducts: products,
    products,
    cart: [],
  });

  // Load persisted state
  useEffect(() => {
    const sessionData = JSON.parse(localStorage.getItem("cartContextData"));
    if (!sessionData) return;
    dispatch({
      type: "SET_STATE",
      payload: sessionData ?? {},
    });
  }, []);

  // Save state to localStorage on changes
  useEffect(() => {
    localStorage.setItem("cartContextData", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook for using context in components
export const useCartContext = () => useContext(CartContext);

// Default export for wrapping the app
export default CartContextProvider;
