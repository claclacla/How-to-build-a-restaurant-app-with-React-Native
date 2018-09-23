import { restaurantGetRequest } from '../../repositories/api/restaurants';

async function getCategoryRestaurants({ categoryName }) {
  try {
    return await restaurantGetRequest('q={"category":"' + categoryName + '"}');  
  } catch (error) {
    console.log("Delivery restaurants retrieve error");
  }
}

export default {
  getCategoryRestaurants
}