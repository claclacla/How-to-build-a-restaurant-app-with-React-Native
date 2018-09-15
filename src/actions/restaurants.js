import { restaurantGetRequest } from '../repositories/pure-src/restaurants'; 

export const CREATE_RESTAURANTS = "CREATE_RESTAURANTS";

export function createRestaurants(restaurants) {
  return {
    type: CREATE_RESTAURANTS,
    restaurants
  };
};

export function createAsyncRestaurants(_id) {
  return function (dispatch) {   
    restaurantGetRequest('q={"service":"Delivery"}')
      .then(restaurants => {
        dispatch(createRestaurants(restaurants));
      })
      .catch((error) => {        
        console.log("Delivery restaurants retrieve error");
      })
  }
}