import { productGetRequest } from '../../repositories/api/products';

async function getRestaurantProducts({ restaurantName }) {
  try {
    return await productGetRequest('q={"restaurant":"' + restaurantName + '"}');  
  } catch (error) {
    console.log("Delivery products retrieve error");
  }
}

export default {
  getRestaurantProducts
}