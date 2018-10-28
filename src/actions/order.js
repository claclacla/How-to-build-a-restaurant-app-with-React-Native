export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT_AMOUNT = "UPDATE_PRODUCT_AMOUNT";

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    product
  };
};

export function updateProductAmount(productUid, amount) {
  return {
    type: UPDATE_PRODUCT_AMOUNT,
    productUid,
    amount
  };
};