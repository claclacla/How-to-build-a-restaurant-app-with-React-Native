export const ADD_PRODUCT = "ADD_PRODUCT";

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    product
  };
};