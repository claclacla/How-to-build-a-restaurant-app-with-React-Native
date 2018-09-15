import { CREATE_RESTAURANTS } from '../actions/restaurants';
//import Restaurant from '../entities/Restaurant';

function restaurants(state = [], action) {
  switch (action.type) {
    case CREATE_RESTAURANTS:
      return action.restaurants;
    default:
      return state;
  }
};

export default restaurants;