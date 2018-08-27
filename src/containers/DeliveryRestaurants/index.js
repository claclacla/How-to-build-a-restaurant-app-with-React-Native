import React from 'react';
import { Text, View, FlatList } from 'react-native';

import Restaurants from './components/Restaurants';

const DeliveryRestaurants = () => (
  <View>
    <Text>Delivery</Text>
    <Restaurants/>
  </View>
);

export default DeliveryRestaurants;