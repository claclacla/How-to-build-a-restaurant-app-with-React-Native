import IEntity from "./IEntity";
import Product from "./Product";

class Order extends IEntity {
  constructor() {
    super();

    this.products = [];
  }

  // addProduct(product) {
  //   if(!product instanceof Product) {
  //     throw new Error("The given parameter is not a Product instance");
  //   }

  //   this.products.push(product);
  // }

  // removeProduct(uid) {
  //   this.products = this.products.filter(product => product.uid !== uid);
  // }
}

export default Order;