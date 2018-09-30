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
      loading: true
    }
  }

  async componentDidMount() {
    try {
      let restaurantName = this.props.restaurantName;

      let products = await ProductsDataProvider.getRestaurantProducts({ restaurantName });
      this.props.setProducts(products);

      this.setState({ loading: false });
    } catch (error) {

    }
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
            renderItem={({ item }) =>
              <View>
                <TouchableHighlight style={styles.productBtn} onPress={() => this.onSelectProduct(item)}>
                  <Text style={styles.productName}>{item.name}</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.addBtn}>
                  <Text>+</Text>
                </TouchableHighlight>
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
  addBtn: {
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    height: 10
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