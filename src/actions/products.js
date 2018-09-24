export const SET_PRODUCTS = "SET_PRODUCTS";

export function setProducts(products) {
  return {
    type: SET_PRODUCTS,
    products
  };
};