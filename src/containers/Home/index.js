import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => (
  <View>
    <Text>Benvenuto!</Text>
    <TouchableOpacity onPress={() => navigation.navigate('TakeAwayRestaurants')}>
      <Text>Take away</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('DeliveryRestaurants')}>
      <Text>Delivery</Text>
    </TouchableOpacity>
  </View>
);

export default Home;