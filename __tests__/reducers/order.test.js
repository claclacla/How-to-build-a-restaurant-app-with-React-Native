import { addProduct } from '../../src/actions/order';
import order from '../../src/reducers/order';
import Order from '../../src/entities/Order';
import Product from '../../src/entities/Product';

test('Order reducer > Add product', () => {
  let product = new Product({ 
    uid: "jU8rfl4r",
    name: "Product name" 
  });

  let action = addProduct(product);

  let state = order(new Order(), action);

  expect(state.products).toBeInstanceOf(Array);
  expect(state.products).toHaveLength(1);

  let stateProduct = state.products[0];

  expect(stateProduct).toEqual(product);
});