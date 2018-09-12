import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';

import { restaurantGetRequest } from '../../../../repositories/pure-src/restaurants';

class Restaurants extends React.Component {
  constructor() {
    super();

    this.state = {
      restaurants: []
    };

    restaurantGetRequest('q={"service":"Delivery"}')
      .then(restaurants => {
        this.setState({ restaurants });
      })
      .catch((error) => {
        console.log("Delivery restaurants retrieve error");
      })
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.restaurants}
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

export default Restaurants;