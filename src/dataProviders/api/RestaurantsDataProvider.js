import { restaurantGetRequest } from '../../repositories/api/restaurants';

async function getRestaurants() {
  try {
    return await restaurantGetRequest('q={"service":"Delivery"}');  
  } catch (error) {
    console.log("Delivery restaurants retrieve error");
  }
}

export default {
  getRestaurants
}