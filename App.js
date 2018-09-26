import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import restaurants from './src/reducers/restaurants';
import products from './src/reducers/products';

import Home from './src/containers/Home';
import Restaurants from './src/containers/Restaurants';
import RestaurantDetail from './src/containers/RestaurantDetail';
import Order from './src/containers/Order';
//import AppStatusBar from './src/components/AppStatusBar';

const store = createStore(combineReducers({ restaurants, products }), applyMiddleware(thunk));

const RestaurantTabs = createBottomTabNavigator(
  {
    "Restaurant": RestaurantDetail,
    "Order": Order 
  },
);

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Restaurants: {
    screen: Restaurants
  },
  RestaurantTabs: {
    screen: RestaurantTabs 
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          {/* <AppStatusBar backgroundColor="#fff" barStyle="light-content" /> */}
          <AppStackNavigator />
        </View>
      </Provider>
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