import { ADD_PRODUCT, addProduct } from '../../src/actions/order';
import Product from '../../src/entities/Product';

test('addProduct', () => {
  let product = new Product({ 
    uid: "jU8rfl4r",
    name: "Product name" 
  });

  let action = addProduct(product)

  expect(action).toBeInstanceOf(Object);
  expect(action).toHaveProperty("type");
  expect(action).toHaveProperty("product");

  expect(action.type).toEqual(ADD_PRODUCT);
  expect(action.product).toEqual(product);
});