export const SET_RESTAURANTS = "SET_RESTAURANTS";

export function setRestaurants(restaurants) {
  return {
    type: SET_RESTAURANTS,
    restaurants
  };
};