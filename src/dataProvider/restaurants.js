import { createAsyncRestaurants } from '../actions/restaurants';

export function getRestaurants() {
  return createAsyncRestaurants();
}