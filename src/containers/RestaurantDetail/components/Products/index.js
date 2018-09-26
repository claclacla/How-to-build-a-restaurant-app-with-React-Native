import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import ProductsDataProvider from '../../../../dataProviders/api/ProductsDataProvider';
import { setProducts } from '../../../../actions/products';

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

  render() {
    return (
      <View>
        {!this.state.loading &&
          <FlatList
            data={this.props.products}
            renderItem={({ item }) =>
              <TouchableHighlight style={styles.productBtn} onPress={() => navigation.navigate('ProductDetail')}>
                <Text style={styles.productName}>{item.name}</Text>
              </TouchableHighlight>
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
});

function mapStateToProps({ products }) {
  return {
    products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setProducts: (products) => dispatch(setProducts(products))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsList);