import { ADD_PRODUCT } from '../actions/order';

import Order from '../entities/Order';

function order(state = new Order(), action) { 
  switch (action.type) {
    case ADD_PRODUCT:      
      state.products.push(action.product);
      
      return state;
    default:
      return state;
  }
};

export default order;