import Product from "./Product";

class OrderProduct extends Product {
  constructor({ uid, name, amount }) {
    super({ uid, name });

    this.amount = 0;

    if (amount) {
      this.amount = amount;
    }
  }
}

export default OrderProduct;