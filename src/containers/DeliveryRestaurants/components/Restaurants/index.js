import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import { getRestaurants } from '../../../../dataProviders/api/restaurants';
import { setRestaurants } from '../../../../actions/restaurants';

class Restaurants extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      let restaurants = await getRestaurants();  
      this.props.setRestaurants(restaurants);
    } catch (error) {
      
    }
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.restaurants}
          renderItem={({ item }) =>
            <TouchableHighlight style={styles.restaurantBtn} onPress={() => navigation.navigate('RestaurantDetail')}>
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
)(Restaurants);