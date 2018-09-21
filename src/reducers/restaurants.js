import { SET_RESTAURANTS } from '../actions/restaurants';

function restaurants(state = [], action) {
  switch (action.type) {
    case SET_RESTAURANTS:
      return action.restaurants;
    default:
      return state;
  }
};

export default restaurants;