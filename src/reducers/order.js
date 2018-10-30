import { ADD_PRODUCT, UPDATE_PRODUCT_AMOUNT, REMOVE_PRODUCT } from '../actions/order';

import Order from '../entities/Order';

function order(state = new Order(), action) {
  switch (action.type) {
    case ADD_PRODUCT:
      let productIdx = state.products.findIndex(product => product.uid === action.product.uid);

      let products = [
        ...state.products
      ];

      if(productIdx >= 0) {
        products[productIdx] = action.product;
      }
      else {
        products = products.concat(action.product);
      }

      return {
        ...state,
        products
      };
    case UPDATE_PRODUCT_AMOUNT:
      return {
        ...state,
        products: state.products.map(product => {
          if (product.uid === action.productUid) {
            product.amount = action.amount;
          }

          return product;
        })
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => {
          if (product.uid !== action.productUid) {
            return true;
          }

          return false;
        })
      }
    default:
      return state;
  }
};

export default order;