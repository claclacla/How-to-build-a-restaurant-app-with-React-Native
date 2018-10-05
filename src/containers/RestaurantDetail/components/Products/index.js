import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import ProductsDataProvider from '../../../../dataProviders/api/ProductsDataProvider';
import { setProducts } from '../../../../actions/products';
import { addProduct } from '../../../../actions/order';

class RestaurantsList extends React.Component {
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

  onDecrementProductAmount(index) {
    this.setState(prevState => {
      let productsAmount = prevState.productsAmount;

      if(productsAmount[index] > 0) {
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

  onSelectProduct(product) {
    this.props.addProduct(product);
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
                  <Text style={styles.productName}>{item.name}</Text>
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
                  <TouchableHighlight style={styles.orderElements}>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#777",
    height: 80
  },
  productName: {
    color: "#fff"
  },
  orderElementsBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  orderElements: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    height: 30
  }
});

function mapStateToProps({ products }) {
  return {
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
)(RestaurantsList);