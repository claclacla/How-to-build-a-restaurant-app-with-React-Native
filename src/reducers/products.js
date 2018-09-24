import { SET_PRODUCTS } from '../actions/products';

function products(state = [], action) { 
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};

export default products;