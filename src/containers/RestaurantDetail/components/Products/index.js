import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import ProductsDataProvider from '../../../../dataProviders/api/ProductsDataProvider';
import { setProducts } from '../../../../actions/products';
import { addProduct } from '../../../../actions/order';
import OrderProduct from '../../../../entities/OrderProduct';

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      productsAmount: []
    }
  }

  async componentDidMount() {
    try {
      let restaurantName = this.props.restaurantName;

      let products = await ProductsDataProvider.getRestaurantProducts({ restaurantName });
      this.props.setProducts(products);

      this.setState({ loading: false, productsAmount: new Array(products.length).fill(0) });
    } catch (error) {

    }
  }

  getProductAmountStyle(uid) {
    let style = [styles.productAmount];

    this.props.order.products.map(product => {
      if(product.uid === uid) {
        style.push({opacity: 1});
      }
    });

    return style;
  }

  getProductAmount(uid) {
    let productAmount = "";

    this.props.order.products.map(product => {
      if(product.uid === uid) {
        productAmount = "x" + product.amount;
      }
    });

    return productAmount;
  }

  onDecrementProductAmount(index) {
    this.setState(prevState => {
      let productsAmount = prevState.productsAmount;

      if (productsAmount[index] > 0) {
        productsAmount[index]--;
      }

      return {
        ...prevState,
        productsAmount
      }
    });
  }

  onIncrementProductAmount(index) {
    this.setState(prevState => {
      let productsAmount = prevState.productsAmount;
      productsAmount[index]++;

      return {
        ...prevState,
        productsAmount
      }
    });
  }

  onAddToCart(index) {
    let amount = this.state.productsAmount[index];

    if (amount === 0) {
      return;
    }

    let product = this.props.products[index];

    let orderProduct = new OrderProduct({
      uid: product.uid,
      name: product.name,
      amount
    });

    this.props.addProduct(orderProduct);

    this.setState(prevState => {
      let productsAmount = prevState.productsAmount;
      productsAmount[index] = 0;

      return {
        ...prevState,
        productsAmount
      };
    });
  }

  render() {
    return (
      <View>
        {!this.state.loading &&
          <FlatList
            data={this.props.products}
            extraData={{
              productsAmount: this.state.productsAmount
            }}
            renderItem={({ item, index }) =>
              <View>
                <TouchableHighlight style={styles.productBtn}>
                  <View style={styles.productBtnElementsBox}>
                    <Text style={this.getProductAmountStyle(item.uid)}>{this.getProductAmount(item.uid)}</Text>
                    <Text style={styles.productName}>{item.name}</Text>
                  </View>
                </TouchableHighlight>
                <View style={styles.orderElementsBox}>
                  <TouchableHighlight style={styles.orderElements} onPress={() => this.onDecrementProductAmount(index)}>
                    <Text>-</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.orderElements}>
                    <Text>{this.state.productsAmount[index]}</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.orderElements} onPress={() => this.onIncrementProductAmount(index)}>
                    <Text>+</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.orderElements} onPress={() => this.onAddToCart(index)}>
                    <Text>Add to cart</Text>
                  </TouchableHighlight>
                </View>
              </View>
            }
            keyExtractor={(item, index) => item.uid}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productBtn: {
    marginTop: 1,
    backgroundColor: "#777",
    height: 80
  },
  productBtnElementsBox: {
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  productAmount: {
    flex: 0.2,
    marginLeft: 15,
    color: "#fff",
    opacity: 0
  },
  productName: {
    flex: 0.8,
    color: "#fff"
  },
  orderElementsBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  orderElements: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
    height: 30
  }
});

function mapStateToProps({ order, products }) {
  return {
    order,
    products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setProducts: (products) => dispatch(setProducts(products)),
    addProduct: (product) => dispatch(addProduct(product))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);