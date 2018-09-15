import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import { getRestaurants } from '../../../../dataProvider/restaurants';

class Restaurants extends React.Component {
  constructor(props) {
    super(props);
    
    this.props.getRestaurants();
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
    getRestaurants: () => dispatch(getRestaurants())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Restaurants);