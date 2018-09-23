import { categoryGetRequest } from '../../repositories/api/categories';

async function getCategories() {
  try {
    return await categoryGetRequest();  
  } catch (error) {
    console.log("Delivery categories retrieve error");
  }
}

export default {
  getCategories
}