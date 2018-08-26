import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from './src/containers/Home';
import TakeAwayRestaurants from './src/containers/TakeAwayRestaurants';
import DeliveryRestaurants from './src/containers/DeliveryRestaurants';
//import AppStatusBar from './src/components/AppStatusBar';

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  TakeAwayRestaurants: {
    screen: TakeAwayRestaurants
  },
  DeliveryRestaurants: {
    screen: DeliveryRestaurants
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <AppStatusBar backgroundColor="#fff" barStyle="light-content" /> */}
        <AppStackNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});