//import { CREATE_RESTAURANT } from '../actions/restaurant';
//import Restaurant from '../entities/Restaurant';

function restaurant(state = [], action) {
  switch (action.type) {
    //case CREATE_RESTAURANT:
    //  return action.restaurant;
    default:
      return state;
  }
};

export default restaurant;