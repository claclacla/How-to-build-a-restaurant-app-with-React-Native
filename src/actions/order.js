export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT_AMOUNT = "UPDATE_PRODUCT_AMOUNT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

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

export function removeProduct(productUid) {
  return {
    type: REMOVE_PRODUCT,
    productUid
  };
};