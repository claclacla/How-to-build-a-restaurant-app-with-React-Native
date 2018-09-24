import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import RestaurantsDataProvider from '../../../../dataProviders/api/RestaurantsDataProvider';
import { setRestaurants } from '../../../../actions/restaurants';

class RestaurantsList extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      let categoryName = this.props.categoryName;
      
      let restaurants = await RestaurantsDataProvider.getCategoryRestaurants({ categoryName });
      this.props.setRestaurants(restaurants);
    } catch (error) {
      
    }
  }

  onSelectRestaurant(restaurantName) {
    const { navigate } = this.props.navigation;
    navigate('RestaurantDetail', {
      restaurantName: restaurantName
    });
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.restaurants}
          renderItem={({ item }) =>
            <TouchableHighlight style={styles.restaurantBtn} onPress={() => this.onSelectRestaurant(item.name)}>
              <Text style={styles.restaurantName}>{item.name}</Text>
            </TouchableHighlight>
          }
          keyExtractor={(item, index) => item.uid}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  restaurantBtn: {
    marginTop: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#777",
    height: 80
  },
  restaurantName: {
    color: "#fff"
  },
});

function mapStateToProps({ restaurants }) {
  return {
    restaurants
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setRestaurants: (restaurants) => dispatch(setRestaurants(restaurants))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsList);