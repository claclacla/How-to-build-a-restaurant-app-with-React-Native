import { ADD_PRODUCT, UPDATE_PRODUCT_AMOUNT } from '../actions/order';

import Order from '../entities/Order';

function order(state = new Order(), action) { 
  switch (action.type) {
    case ADD_PRODUCT:           
      return {
        ...state,
        products: state.products.concat(action.product)
      };
    case UPDATE_PRODUCT_AMOUNT:     
      return {
        ...state,
        products: state.products.map(product => {
          if(product.uid === action.productUid) {
            product.amount = action.amount;
          }
  
          return product;
        })
      };
    default:
      return state;
  }
};

export default order;