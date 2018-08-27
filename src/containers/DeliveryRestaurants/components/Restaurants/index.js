import React from 'react';
import { Text, View, FlatList } from 'react-native';

import { restaurantGetRequest } from '../../../../repositories/pure-src/restaurants';

class Restaurants extends React.Component {
  constructor() {
    super();

    this.restaurants = [];

    restaurantGetRequest('')
      .then(restaurants => {
        console.log(restaurants);
        
        this.restaurants = restaurants;
      })
      .catch((error) => {        
        console.log("Delivery restaurants retrieve error");
      })

    /*
    try {
      this.restaurants = await restaurantGetRequest('');
    } catch (error) {
      console.log("Delivery restaurants retrieve error");
      return;
    }
    */
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.restaurants}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
    );
  }
}

export default Restaurants;