import { restaurantGetRequest } from '../../repositories/api/restaurants';

export async function getRestaurants() {
  try {
    return await restaurantGetRequest('q={"service":"Delivery"}');  
  } catch (error) {
    console.log("Delivery restaurants retrieve error");
  }
}